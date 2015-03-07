/**
 * FileUploadRequestHandler
 * @constructor
 * @param {yak.YakServer} yakServer
 * @implements {yakServiceMessageHandler}
 */
yak.FileUploadRequestHandler = function FileUploadRequestHandler(yakServer) {
    'use strict';

    /**
     * @type {yak.CreateInstanceRequestHandler}
     */
    var self = this;

    var PLUGIN_EXTENSION = '.plugin.js';
    var INSTANCE_EXTENSION = '.instance.json';
    var STORE_EXTENSION = '.store.txt';

    /**
     * @type {yak.Store}
     */
    var store = yak.require('store');

    /**
     * @type {yak.Logger}
     */
    var log = new yak.Logger(self.constructor.name);

    /**
     * @type {yak.api.PluginValidator}
     */
    var pluginValidator = new yak.api.PluginValidator();

    /**
     * @param {yak.api.UploadFileRequest} request
     * @returns {!yak.api.UploadFileResponse} response
     */
    this.handle = function handle(request) {
        var response;
        if (isPlugin(request.filename)) {
            log.info('isPlugin');
            response = addOrUpdatePlugin(request);
        }

        if (isInstance(request.filename)) {
            response = addOrUpdateInstance(request);
        }

        if (isStore(request.filename)) {
            response = addOrUpdateStore(request);
        }

        return response;
    };

    /**
     * @param {yak.api.UploadFileRequest} request
     * @returns {!yak.api.UploadFileResponse} response
     */
    function addOrUpdateStore(request) {
        var response = new yak.api.UploadFileResponse(request.id);
        response.success = true;

        var documentKey = request.filename.replace(STORE_EXTENSION, '');
        store.setValue(documentKey, request.content);

        // Restart every instance, because currently there is no way
        // to determine which plugin uses a store key.
        var instances = yakServer.instanceManager.getInstances();
        _.each(instances, function restart(instance) { restartInstance(instance.id); });

        return response;
    }

    /**
     * @param {yak.api.UploadFileRequest} request
     * @returns {!yak.api.UploadFileResponse} response
     */
    function addOrUpdateInstance(request) {
        var response = new yak.api.UploadFileResponse(request.id);
        response.success = false;

        var instance =  yakServer.instanceManager.parseInstance(request.filename, request.content);

        if (instance) {
            if (request.enableInstanceRestart) {
                restartInstance(instance.id);
            }
            response.success = true;
        }

       return response;
    }

    /**
     * @param {yak.api.UploadFileRequest} request
     * @returns {!yak.api.UploadFileResponse} response
     */
    function addOrUpdatePlugin(request) {
        var response = new yak.api.UploadFileResponse(request.id);
        var pluginManager = yakServer.pluginManager;

        var pluginName = request.filename.replace(PLUGIN_EXTENSION, '');
        var parsedPlugin = pluginManager.parsePluginContent(pluginName, request.content);

        if (pluginValidator.isPluginValid(parsedPlugin)) {
            parsedPlugin.version = parsedPlugin.version || '0.1.0';
            parsedPlugin.description = parsedPlugin.description || 'Created via file upload ' + request.filename;

            pluginManager.addOrUpdatePlugin(parsedPlugin);
            pluginManager.savePlugin(parsedPlugin);

            if (request.enableInstanceRestart) {
                restartInstancesWithPlugin(parsedPlugin.name);
            }
        } else {
            response = false;
            response.message = pluginValidator.getMessage();
        }

        return response;
    }

    /**
     * @param {string} pluginName
     */
    function restartInstancesWithPlugin(pluginName) {
        var instances = yakServer.instanceManager.getInstances();

        /**
         * @param {yak.Instance} instance
         */
        function restartWhenUsingPlugin(instance) {
            if (_.contains(instance.plugins, pluginName)) {
                restartInstance(instance.id);
            }
        }

        _.each(instances, restartWhenUsingPlugin);
    }

    /**
     * Restart instance
     * @param {string} instanceId
     */
    function restartInstance(instanceId) {
        var instanceEntity = yakServer.instanceManager.getInstanceEntity(instanceId);
        instanceEntity.stop();
        instanceEntity.start();
    }

    /**
     * Whether this file is a plugin.
     * @param {string} filename
     * @returns {boolean} Whether this file is a plugin.
     */
    function isPlugin(filename) {
        return filename.lastIndexOf(PLUGIN_EXTENSION) === (filename.length - PLUGIN_EXTENSION.length);
    }

    /**
     * Whether this file is a instance.
     * @param {string} filename
     * @returns {boolean} Whether this file is a instance.
     */
    function isInstance(filename) {
        return filename.lastIndexOf(INSTANCE_EXTENSION) === (filename.length - INSTANCE_EXTENSION.length);
    }

    /**
     * Whether this file is a store.
     * @param {string} filename
     * @returns {boolean} Whether this file is a store.
     */
    function isStore(filename) {
        return filename.lastIndexOf(STORE_EXTENSION) === (filename.length - STORE_EXTENSION.length);
    }
};