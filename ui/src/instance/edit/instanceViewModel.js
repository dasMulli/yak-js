var InstanceConfigItem = require('./instanceConfigItem');
var SelectPluginItem = require('./selectPluginItem');
var ShowViewCommand = require('../../workspace/showViewCommand');
var InstanceListView = require('../list/instanceListView');

/**
 * @constructor
 * @struct
 * @param {!ViewModelContext} context
 */
function InstanceViewModel(context) {
    'use strict';

    /**
     * @type {!InstanceViewModel}
     */
    var self = this;

    /**
     * @type {InstanceConfigItem}
     */
    this.instanceConfigItem = null;

    /**
     * @type {Function}
     */
    this.onInstanceConfigItemChanged = _.noop;

    /**
     * @type {!Array<!SelectPluginItem>}
     */
    this.allPluginItems = [];

    /**
     * @type {!Array}
     */
    this.selectedPluginItems = [];

    /**
     * @type {!Array}
     */
    this.notSelectedPluginItems = [];

    /**
     * @type {Function}
     */
    this.onSelectPluginItemsChanged = _.noop;

    /**
     * Callback for received error response.
     * @type {function(string)}
     */
    this.onErrorResponse = _.noop;

    /**
     * Activate view
     * @param {InstanceInfoItem} data
     */
    this.activate = function activate(data) {
        console.log('InstanceViewModel.activate', {data: data});

        if (data) {
            self.instanceConfigItem = new InstanceConfigItem();
            self.instanceConfigItem.id = data.id;
            self.instanceConfigItem.description = data.description;
            self.instanceConfigItem.name = data.name;
            self.instanceConfigItem.port = data.port;
            self.instanceConfigItem.plugins = data.plugins;
        } else {
            self.instanceConfigItem = null;
        }

        self.onInstanceConfigItemChanged();

        context.adapter.get('/plugins').then(handleGetPluginsResponse);
    };

    /**
     * Delete instance.
     */
    this.deleteInstance = function deleteInstance() {
        context.adapter
            .deleteResource('/instances/' + self.instanceConfigItem.id + '/config')
            .then(showList)
            .catch(showErrorResponse);
    };

    /**
     *
     * @param {GetPluginsResponse} response
     */
    function handleGetPluginsResponse(response) {
        console.log('InstanceViewModel.handleGetPluginsResponse', {response: response});

        self.allPluginItems = [];

        _.each(response.plugins, function toItem(pluginsInfo) {
            var item = new SelectPluginItem();
            item.name = pluginsInfo.id;
            item.description = pluginsInfo.description;

            if (self.instanceConfigItem && _.contains(self.instanceConfigItem.plugins, item.name)) {
                item.isActive = true;
            }

            self.allPluginItems.push(item);
        });

        updateSelectedPluginItems();
    }

    /**
     * Updates selectedPluginItems and notSelectedPluginItems.
     */
    function updateSelectedPluginItems() {
        self.selectedPluginItems = _.where(self.allPluginItems, {isActive: true});
        self.notSelectedPluginItems = _.where(self.allPluginItems, {isActive: false});

        if (self.selectedPluginItems.length === 0) {
            // Add special placeholder item
            var placeholder = new SelectPluginItem();
            placeholder.name = 'No plugin selected...';
            placeholder.isActive = false;
            self.selectedPluginItems.push(placeholder);
        }

        self.onSelectPluginItemsChanged();
    }

    /**
     * Create or update a new websocket instance.
     * @param {!InstanceConfigItem} instanceConfigItem
     */
    this.createOrUpdate = function createOrUpdate(instanceConfigItem) {
        console.log('InstanceViewModel.createOrUpdate', {instanceConfigItem: instanceConfigItem});

        var instanceConfig = new InstanceConfigItem();
        _.extend(instanceConfig, instanceConfigItem);

        instanceConfig.plugins = [];

        _.each(_.where(self.allPluginItems, { isActive: true }), function select(selectPluginItem) {
            instanceConfig.plugins.push(selectPluginItem.name);
        });

        var request = {
            instanceConfig: instanceConfig
        };

        if (self.instanceConfigItem === null) {
            context.adapter
                .post('/instances/config', request)
                .then(showList)
                .catch(showErrorResponse);
        } else {
            context.adapter
                .put('/instances/' + self.instanceConfigItem.id + '/config', request)
                .then(showList)
                .catch(showErrorResponse);
        }
    };

    /**
     * Cancel instance edit.
     */
    this.cancel = function cancel() {
        showPanelInstanceList();
    };

    /**
     * Uses all available plugins.
     */
    this.useAllPlugins = function useAllPlugins() {
        _.each(self.allPluginItems, function(item) {
            item.isActive = true;
        });

        updateSelectedPluginItems();
    };

    /**
     * Don't use any plugin.
     */
    this.useNoPlugins = function useNoPlugins() {
        _.each(self.allPluginItems, function(item) {
            item.isActive = false;
        });

        updateSelectedPluginItems();
    };

    /**
     * Show the panel instance list.
     */
    function showPanelInstanceList() {
        context.eventBus.post(new ShowViewCommand(InstanceListView));
    }

    /**
     *
     * @param {string} pluginName
     */
    this.togglePluginSelection = function togglePluginSelection(pluginName) {
        console.log('InstanceViewModel.togglePluginSelection', pluginName);
        var pluginItem = _.findWhere(self.allPluginItems, {name: pluginName});
        pluginItem.isActive = !pluginItem.isActive;

        updateSelectedPluginItems();
    };

    function showList() {
        context.eventBus.post(new ShowViewCommand(InstanceListView));
    }

    function showErrorResponse(response) {
        self.onErrorResponse(response.message);
    }
}

module.exports = InstanceViewModel;
