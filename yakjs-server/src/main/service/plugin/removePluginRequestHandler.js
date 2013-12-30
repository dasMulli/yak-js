/**
 * RemovePluginRequestHandler
 * @constructor
 * @param {yak.YakServer} cloudServer
 * @implements {yak.ServiceMessageHandler}
 */
yak.RemovePluginRequestHandler = function RemovePluginRequestHandler(cloudServer) {

    'use strict';

    /**
     * Constructor
     */
    function constructor() {
    }

    /**
    * @param {yak.api.RemovePluginRequest} message
    * @param {yak.WebSocketConnection} connection
    */
    this.handle = function handle(message, connection) {

        try {
            if (cloudServer.pluginManager.hasPlugin(message.pluginName)) {
                cloudServer.pluginManager.removePlugin(message.pluginName);
                sendSuccessResponse(connection);
            } else {
                sendPluginNotFoundResponse(message, connection);
            }
        } catch (ex) {
            cloudServer.serviceInstance.log.error(ex.message);
        }
    };

    /**
    * Send success response
    * @param {yak.WebSocketConnection} connection
    */
    function sendSuccessResponse(connection) {
        var response = new yak.api.RemovePluginResponse();
        connection.send(response);
    }

    /**
    * Send an error response
    * @param {yak.WebSocketConnection} connection
    * @param {yak.RemovePluginRequest} message
    */
    function sendPluginNotFoundResponse(message, connection) {
        var response = new yak.api.RemovePluginResponse();
        response.success = false;
        response.message = 'Can not find plugin: ' + message.pluginName;
        connection.send(response);
    }

    constructor();
};