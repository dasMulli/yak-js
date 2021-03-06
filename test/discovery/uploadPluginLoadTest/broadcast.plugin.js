function BroadcastPlugin(require) {
    'use strict';

    var log = require('log');

    /**
     * @param {yak.WebSocketInstance} instance
     */
    this.onInitialize = function onInitialize(instance) {};

    /**
     * @param {yak.WebSocketConnection} connection
     * @param {yak.WebSocketInstance} instance
     */
    this.onNewConnection = function onNewConnection(connection, instance) {};

    /**
     * @param {yak.WebSocketMessage} message
     * @param {yak.WebSocketConnection} connection
     * @param {yak.WebSocketInstance} instance
     */
    this.onMessage = function onMessage(message, connection, instance) {
        // Get all connections to this instance.
        var connections = instance.getConnections();

        for(var i = 0; i < connections.length; i++) {
            var conn = connections[i];

            if (conn.id !== connection.id) {
                log.debug('Sending message to ' + connection.id);
                conn.send(message.data);
            }
        }
    };

    /**
     * Connection closed event. Note that the connection is no longer part of instance.getConnections().
     * @param {yak.WebSocketConnection} connection
     * @param {yak.WebSocketInstance} instance
     */
    this.onConnectionClosed = function onConnectionClosed(connection, instance) {};

    /**
     * @param {yak.WebSocketInstance} instance
     */
    this.onTerminate = function onTerminate(instance) {};
};