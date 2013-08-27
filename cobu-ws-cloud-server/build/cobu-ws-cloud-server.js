/**
 * Codebullets
 * @namespace cobu
 */
var cobu = cobu || {};

/**
 * Web Socket Cloud
 * @namespace cobu
 */
cobu.wsc = cobu.wsc || {};


/**
 * Codebullets
 * @namespace cobu
 */
var cobu = cobu || {};

/**
 * Web Socket Cloud
 * @namespace cobu
 */
cobu.wsc = cobu.wsc || {};

/**
 * Web Socket Cloud - Service API
 * @namespace cobu
 */
cobu.wsc.service = cobu.wsc.service || {};


/**
 * CreateInstanceRequest
 * @constructor
 */
cobu.wsc.service.CreateInstanceRequest = function CreateInstanceRequest()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'request.createInstance';

   /**
    * Unique name of instance.
    * @type {string}
    */
   this.name = null;

   /**
    * Some description.
    * @type {string}
    */
   this.description = null;

   /**
    *
    * @type {number}
    */
   this.port = 0;

   /**
    * Name of plugins that shall be used by this instance.
    * @type {Array.<string>}
    */
   this.plugins = [];
};/**
 * CreateInstanceResponse
 * @constructor
 */
cobu.wsc.service.CreateInstanceResponse = function CreateInstanceResponse()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'response.createInstance';

   /**
    * Whether the request was successfully or not.
    * @type {boolean}
    */
   this.success = true;

   /**
    * Optional: Message if no success.
    * @type {string}
    */
   this.message = '';
};/**
 * DeleteInstanceRequest
 * @constructor
 */
cobu.wsc.service.DeleteInstanceRequest = function DeleteInstanceRequest()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'request.deleteInstance';

   /**
    * Name of the instance.
    * @type {string}
    */
   this.instanceName = null;
};/**
 * DeleteInstanceResponse
 * @constructor
 */
cobu.wsc.service.DeleteInstanceResponse = function DeleteInstanceResponse()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'response.deleteInstance';

   /**
    * Whether the request was successfully or not.
    * @type {boolean}
    */
   this.success = true;

   /**
    * Optional: Message if no success.
    * @type {string}
    */
   this.message = '';
};/**
 * GetInstancesRequest
 * @constructor
 */
cobu.wsc.service.GetInstancesRequest = function GetInstancesRequest()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'request.getInstances';
};/**
 * GetInstancesResponse
 * @constructor
 */
cobu.wsc.service.GetInstancesResponse = function GetInstancesResponse()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'response.getInstances';

   /**
    * List of available cloud instances as InstanceInfo array.
    * @type {Array.<cobu.wsc.service.InstanceInfo>}
    */
   this.instances = [];
};/**
 * InstanceInfo
 * @constructor
 */
cobu.wsc.service.InstanceInfo = function InstanceInfo()
{
   'use strict';

   /**
    *
    * @type {string}
    */
   this.name = null;

   /**
    *
    * @type {string}
    */
   this.state = null;

   /**
    * Description
    * @type {null|string}
    */
   this.description = null;

   /**
    *
    * @type {number}
    */
   this.connectionCount = 0;

   /**
    *
    * @type {number}
    */
   this.port = null;

   /**
    *
    * @type {Array.<string>}
    */
   this.plugins = [];
};/**
 * RemoveInstanceRequest
 * @constructor
 */
cobu.wsc.service.RemoveInstanceRequest = function RemoveInstanceRequest()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'request.removeInstance';

   /**
    * Name of the instance.
    * @type {string}
    */
   this.instanceName = null;
};/**
 * RemoveInstanceResponse
 * @constructor
 */
cobu.wsc.service.RemoveInstanceResponse = function RemoveInstanceResponse()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'response.removeInstance';

   /**
    * Whether the request was successfully or not.
    * @type {boolean}
    */
   this.success = true;

   /**
    * Optional: Message if no success.
    * @type {string}
    */
   this.message = '';
};/**
 * StartInstanceRequest
 * @constructor
 */
cobu.wsc.service.StartInstanceRequest = function StartInstanceRequest()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'request.startInstance';

   /**
    * Name of the instance.
    * @type {string}
    */
   this.instanceName = null;
};/**
 * StartInstanceResponse
 * @constructor
 */
cobu.wsc.service.StartInstanceResponse = function StartInstanceResponse()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'response.startInstance';

   /**
    * Whether the request was successfully or not.
    * @type {boolean}
    */
   this.success = true;

   /**
    * Optional: Message if no success.
    * @type {string}
    */
   this.message = '';
};/**
 * StopInstanceRequest
 * @constructor
 */
cobu.wsc.service.StopInstanceRequest = function StopInstanceRequest()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'request.stopInstance';

   /**
    * Name of the instance.
    * @type {string}
    */
   this.instanceName = null;
};/**
 * StopInstanceResponse
 * @constructor
 */
cobu.wsc.service.StopInstanceResponse = function StopInstanceResponse()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'response.stopInstance';

   /**
    * Whether the request was successfully or not.
    * @type {boolean}
    */
   this.success = true;

   /**
    * Optional: Message if no success.
    * @type {string}
    */
   this.message = '';
};/**
 * UpdateInstanceRequest
 * @constructor
 */
cobu.wsc.service.UpdateInstanceRequest = function UpdateInstanceRequest()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'request.updateInstance';

   /**
    * The original instance name.
    * @type {null}
    */
   this.instanceName = null;

   /**
    * Unique name of instance.
    * @type {string}
    */
   this.name = null;

   /**
    * Some description.
    * @type {string}
    */
   this.description = null;

   /**
    *
    * @type {number}
    */
   this.port = 0;

   /**
    * Name of plugins that shall be used by this instance.
    * @type {Array.<string>}
    */
   this.plugins = [];
};/**
 * UpdateInstanceResponse
 * @constructor
 */
cobu.wsc.service.UpdateInstanceResponse = function UpdateInstanceResponse()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'response.updateInstance';

   /**
    * Whether the request was successfully or not.
    * @type {boolean}
    */
   this.success = true;

   /**
    * Optional: Message if no success.
    * @type {string}
    */
   this.message = '';
};/**
 * GetPluginsRequest
 * @constructor
 */
cobu.wsc.service.GetPluginsRequest = function GetPluginsRequest()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'request.getPlugins';
};/**
 * GetPluginsResponse
 * @constructor
 */
cobu.wsc.service.GetPluginsResponse = function GetPluginsResponse()
{
   'use strict';

   /**
    * Command for the service API.
    * @type {string}
    */
   this.type = 'response.getPlugins';

   /**
    * List of available cloud Plugins as InstanceInfo array.
    * @type {Array.<cobu.wsc.service.PluginInfo>}
    */
   this.plugins = [];
};/**
 * PluginInfo
 * @constructor
 */
cobu.wsc.service.PluginInfo = function PluginInfo()
{
   'use strict';

   /**
    *
    * @type {string}
    */
   this.name = null;

   /**
    *
    * @type {string}
    */
   this.description = null;

   /**
    *
    * @type {string}
    */
   this.code = null;
};/**
 * CloudServer
 * @constructor
 */
cobu.wsc.CloudServer = function CloudServer()
{
   'use strict';

   /** @type {cobu.wsc.CloudServer} */
   var self = this;

   /**
    *
    * @type {Object.<string, cobu.wsc.ServerInstance>}
    */
   var instances = {};

   /**
    * @type {cobu.wsc.ServerInstance}
    */
   this.serviceInstance = null;

   /**
    * @type {cobu.wsc.PluginManager}
    */
   this.pluginManager = new cobu.wsc.PluginManager();

   /** Constructor */
   function constructor() {
   }

   /**
    * @param {cobu.wsc.ServerInstance} serviceInstance
    */
   this.start = function start(serviceInstance) {
      if (serviceInstance) {
         self.serviceInstance = serviceInstance;
         self.serviceInstance.start();
      }
   };

   /**
    * Add instance to cloud.
    * @param {cobu.wsc.ServerInstance} instance
    */
   this.addInstance = function addInstance(instance) {
      console.log('addInstance', instance);
      if (instances.hasOwnProperty(instance.name)) {
         throw Error('Instance with name ' + name + ' already added');
      } else {
         instances[instance.name] = instance;
      }
   };

   /**
    * Remove instance
    * @param {string} instanceName
    */
   this.removeInstance = function removeInstance(instanceName) {
      console.log('removeInstance', instanceName);
      if (instances.hasOwnProperty(instanceName)) {
         instances[instanceName].stop();
         delete instances[instanceName];
      }
   };

   /**
    * Get instance by name.
    * @param name
    * @returns {cobu.wsc.ServerInstance}
    */
   this.getInstance = function getInstance(name) {
      return instances[name];
   };

   /**
    *
    * @returns {Array.<cobu.wsc.ServerInstance>}
    */
   this.getInstances = function getInstances() {
      var arr = [];

      for(var key in instances) {
         if (instances.hasOwnProperty(key)) {
            arr.push(instances[key]);
         }
      }

     return arr;
   };

   /**
    * Start/Run an instance.
    * @param {string} name
    */
   this.startInstance = function startInstance(name) {
      if (instances.hasOwnProperty(name)) {
         instances[name].start();
      }  else {
         throw Error('Instance not found ' + name);
      }
   };

   /**
    * Stop an instance.
    * @param {string} name
    */
   this.stopInstance = function stopInstance(name) {
      if (instances.hasOwnProperty(name)) {
         instances[name].stop();
      }  else {
         throw Error('PluginWorker not found ' + name);
      }
   };


   constructor();
};/**
 * InstanceState
 * @enum {string}
 */
cobu.wsc.InstanceState = {
   STARTING: 'starting',
   STOPPED: 'stopped',
   RUNNING: 'running',
   STOPPING: 'stopping',
   ERROR: 'error'
};
/**
 * Logger
 * @class
 * @constructor
 * @param {string} [name]
 */
cobu.wsc.Logger = function Logger(name)
{
   'use strict';

   /** @type {cobu.wsc.Logger} */
   var self = this;

   var prefix = name || '';

   /** Constructor */
   function constructor()
   {
   }

   /**
    * @param {string} message
    */
   this.info = function info(message) {
      var msg = prefix + ' INFO  ' + message;
      console.log(msg.trim());
   };

   /**
    * @param {string} message
    */
   this.warn = function warn(message) {
      var msg = prefix + ' WARN  ' + message;
      console.warn(msg.trim());
   };

   /**
    * @param {string} message
    */
   this.error = function error(message) {
      var msg = prefix + ' ERROR ' + message;
      console.warn(msg.trim());
   };

   constructor();
};/**
 * ServerInstance
 * @interface
 */
cobu.wsc.ServerInstance = function ServerInstance()
{
   'use strict';

   /**
    * The unique instance name.
    * @type {null}
    */
   this.name = null;

   /**
    * Start instance.
    */
   this.start = function start() {};

   /**
    * Stop instance.
    */
   this.stop = function stop() {};

   /**
    * Description
    * @type {string}
    */
   this.description = '';

   /**
    * @type {cobu.wsc.Logger}
    */
   this.log = new cobu.wsc.Logger(self.name);
};/**
 * WebSocketConnection
 * @class
 * @constructor
 * @param {WebSocket} [socket]
 */
cobu.wsc.WebSocketConnection = function WebSocketConnection(socket)
{
   'use strict';

   /** @type {cobu.wsc.WebSocketConnection} */
   var self = this;

   /**
    * Unique Id of the web socket connection.
    * @type {string}
    */
   this.id = null;

   /**
    * @type {WebSocket|null}
    */
   this.socket = socket || null;

   /** Constructor */
   function constructor() {
      self.id = guid();
   }

   /**
    * Send data on connection.
    * @param {string|object} data
    */
   this.send = function send(data) {

      console.log('send', data);
      if (typeof data === 'object') {
         self.sendAsJson(data);
      } else {
         self.socket.send(data);
      }
   };

   /**
    * Send data on connection.
    * @param {object} obj
    */
   this.sendAsJson = function send(obj) {
      self.socket.send(JSON.stringify(obj));
   };

   constructor();
};/**
 * WebSocketMessage
 * @class
 * @constructor
 * @param {string} data
 */
cobu.wsc.WebSocketMessage = function WebSocketMessage(data)
{
   'use strict';

   /**
    * @type {string|null}
    */
   this.data = data || null;

   /** Constructor */
   function constructor() {
   }

   constructor();
};/**
 * WebSocketServerInstance
 * @constructor
 * @implements {cobu.wsc.ServerInstance}
 * @param {number} [port]
 * @param {string} name Unique instance name.
 */
cobu.wsc.WebSocketServerInstance = function WebSocketServerInstance(name, port)
{
   'use strict';

   var WebSocketServer = require('ws').Server;

   var server = null;

   /** @type {cobu.wsc.WebSocketServerInstance} */
   var self = this;

   /**
    *
    * @type {Object.<string, cobu.wsc.WebSocketConnection>}
    */
   var connections = {};

   /**
    * Server port
    * @type {number} default: 8080;
    */
   this.port = port || 8080;

   /**
    * Description
    * @type {string}
    */
   this.description = '';

   /**
    * Unique instance name.
    * @type {string}
    */
   this.name = name;

   /**
    *
    * @type {Array.<cobu.wsc.PluginWorker>}
    */
   this.plugins = [];

   /**
    * @type {cobu.wsc.Logger}
    */
   this.log = new cobu.wsc.Logger(self.name);

   /**
    * @type {cobu.wsc.InstanceState}
    */
   this.state = cobu.wsc.InstanceState.STOPPED;

   /** Constructor */
   function constructor() {
   }

   /**
    * Start server instance
    */
   this.start = function start() {

      try {
         if (self.state !== cobu.wsc.InstanceState.RUNNING) {
            self.log.info('Starting WebSocketServer Instance.');
            server = new WebSocketServer({port: self.port});
            server.on('connection', handleConnection);
            self.state = cobu.wsc.InstanceState.RUNNING;
         } else {
            self.log.info('Can not start, Instance already running.');
         }
      } catch (ex) {
         self.log.error('Could not start instance: ' + ex.message);
         self.state = cobu.wsc.InstanceState.ERROR;
      }
   };

   /**
    * Stop server instance.
    */
   this.stop = function stop() {

      try {
         if (server && self.state === cobu.wsc.InstanceState.RUNNING) {
            self.state = cobu.wsc.InstanceState.STOPPING;
            self.log.info('Stopping WebSocketServerInstance...');
            server.close();
            server = null;
            self.state = cobu.wsc.InstanceState.STOPPED;
         }
      } catch (ex) {
         self.log.error('Could not stop instance: ' + ex.message);
         self.state = cobu.wsc.InstanceState.ERROR;
      }
   };

   /**
    * Get all connections.
    * @return {Array.<cobu.wsc.WebSocketConnection>}
    */
   this.getConnections = function getConnections() {
      var connectionList = [];

      for(var key in connections) {
         if (connections.hasOwnProperty(key)) {
            connectionList.push(connections[key]);
         }
      }

      return connectionList;
   };

   /**
    * Creates a handler function to handle connection events.
    */
   function handleConnection(socket) {

      var connection = new cobu.wsc.WebSocketConnection();
      connection.socket = socket;

      self.log.info('connected ' + connection.id);

      connections[connection.id] = connection;

      socket.on('close', function() {
         self.log.info('onclose ' + connection.id);
         connections[connection.id] = null;
      });

      socket.on('message', createMessageHandler(connection));
      //socket.onmessage = handleMessage;
   }


   /**
    * @param {cobu.wsc.WebSocketConnection} connection
    * @returns {Function}
    */
   function createMessageHandler(connection) {

      return function handleMessage(data, flags) {
         self.log.info('message ' + connection.id + ', ' + data);

         for(var i=0; i<self.plugins.length; i++) {
            var plugin = self.plugins[i];
            self.log.info(plugin.name + '.onMessage()');

            plugin.onMessage(new cobu.wsc.WebSocketMessage(data), connection, self);
         }
      }
   }

   constructor();
};function s4() {
   return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

/**
 * http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
 * @returns {string}
 */
function guid() {
   return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}
/**
 * Plugin
 * @constructor
 */
cobu.wsc.Plugin = function Plugin()
{
   'use strict';

   /** @type {cobu.wsc.Plugin} */
   var self = this;

   /**
    * Name of the plugin (Has to be unique)
    * @type {null|string}
    */
   this.name = null;

   /**
    * Description of the plugin.
    * @type {null|string}
    */
   this.description = null;

   /**
    * @type {null|string}
    */
   this.code = null;

   /**
    * Constructor to create a plugin instance.
    * @constructor
    * @implements {cobu.wsc.PluginWorker}
    */
   this.PluginWorker = function() {};

   /** Constructor */
   function constructor() {
   }

   constructor();
};/**
 * PluginManager
 * @constructor
 */
cobu.wsc.PluginManager = function PluginManager()
{
   'use strict';

   /** @type {cobu.wsc.PluginManager} */
   var self = this;

   /**
    * @type {Object.<string, cobu.wsc.Plugin>}
    */
   var plugins = {};

   /** Constructor */
   function constructor() {
   }

   /**
    * @param {string} name
    * @returns {cobu.wsc.Plugin}
    */
   this.getPlugin = function getPlugin(name) {
      return plugins[name];
   };

   /**
    * Get list of plugins.
    * @returns {Array.<cobu.wsc.Plugin>}
    */
   this.getPlugins = function getPlugins() {

      var result = [];

      for(var key in plugins) {
         if (plugins.hasOwnProperty(key)) {
            result.push(plugins[key]);
         }
      }

      console.log('getPlugins', result);

      return result;
   };

   /**
    * @param plugin
    */
   this.addOrUpdatePlugin = function addOrUpdatePlugin(plugin) {
      plugins[plugin.name] = plugin;
   };

   /**
    * @param {cobu.wsc.Plugin} plugin
    */
   this.removePlugin = function removePlugin(plugin) {
      if (plugins.hasOwnProperty(plugin.name)) {
         delete plugins[plugin.name];
      }
   };

   /**
    * @param {string} name
    * @return {null|cobu.wsc.PluginWorker}
    */
   this.createPluginWorker = function createPluginWorker(name) {
      console.log('CreatePluginWorker: ' + name);
      var pluginWorker = null;

      if (plugins.hasOwnProperty(name)) {
         var plugin = plugins[name];

         try {
            pluginWorker = new plugin.PluginWorker();
            pluginWorker.name = name;
         } catch(ex) {
            pluginWorker = null;
            console.warn('Can not create plugin worker "' + name + '"');
            console.log(ex);
         }
      }

      return pluginWorker;
   };

   /**
    * @param {string} name
    * @param {string} description
    * @param {string} code
    */
   this.createOrUpdatePlugin = function createOrUpdatePlugin(name, description, code) {
      console.log('createOrUpdatePlugin', name, description);
      try {
         var plugin = new cobu.wsc.Plugin();
         plugin.name = name;
         plugin.description = description;
         plugin.code = code;
         plugin.PluginWorker = new Function('return ' + code)();

         plugins[name] = plugin;
      } catch (ex) {
         console.log(ex);
      }
   };

   constructor();
};/**
 * PluginWorker
 * @interface
 */
cobu.wsc.PluginWorker = function PluginWorker(name)
{
   'use strict';

   /** @type {cobu.wsc.PluginWorker} */
   var self = this;

   this.name = name;

   /** Constructor */
   function constructor() {
   }

   /**
    * @param {cobu.wsc.WebSocketConnection} connection
    * @param {cobu.wsc.WebSocketServerInstance} instance
    */
   this.onNewConnection = function onNewConnection(connection, instance) {};

   /**
    * @param {cobu.wsc.WebSocketMessage} message
    * @param {cobu.wsc.WebSocketConnection} connection
    * @param {cobu.wsc.WebSocketServerInstance} instance
    */
   this.onMessage = function onMessage(message, connection, instance) {};

   constructor();
};/**
 * BroadcastPluginWorker
 * @constructor
 * @implements {cobu.wsc.PluginWorker}
 */
cobu.wsc.BroadcastPluginWorker = function BroadcastPluginWorker()
{
   'use strict';

   /** @type {cobu.wsc.BroadcastPluginWorker} */
   var self = this;

   this.name = 'broadcast';

   /** Constructor */
   function constructor()
   {
   }

   /**
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.onNewConnection = function onNewConnection(connection) {};

   /**
    * @param {cobu.wsc.WebSocketMessage} message
    * @param {cobu.wsc.WebSocketConnection} connection
    * @param {cobu.wsc.WebSocketServerInstance} instance
    */
   this.onMessage = function onMessage(message, connection, instance) {

      var connections = instance.getConnections();

      for(var i=0; i<connections.length; i++) {
         var conn = connections[i];

         if (conn.id !== connection.id) {
            conn.send(message.data);
         }
      }
   };

   constructor();
};
/**
 * EchoPluginWorker
 * @constructor
 * @implements {cobu.wsc.PluginWorker}
 */
cobu.wsc.EchoPluginWorker = function EchoPluginWorker()
{
   'use strict';

   /** @type {cobu.wsc.PingPongPluginWorker} */
   var self = this;

   /** Constructor */
   function constructor() { }

   /**
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.onNewConnection = function onNewConnection(connection) {};

   /**
    * @param {cobu.wsc.WebSocketMessage} message
    * @param {cobu.wsc.WebSocketConnection} connection
    * @param {cobu.wsc.WebSocketServerInstance} instance
    */
   this.onMessage = function onMessage(message, connection, instance) {
      connection.send(message.data);
   };

   constructor();
};
/**
 * PingPongPluginWorker
 * @constructor
 * @implements {cobu.wsc.PluginWorker}
 */
cobu.wsc.PingPongPluginWorker = function PingPongPluginWorker()
{
   'use strict';

   /** @type {cobu.wsc.PingPongPluginWorker} */
   var self = this;

   /** Constructor */
   function constructor() {
   }

   /**
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.onNewConnection = function onNewConnection(connection) {};

   /**
    * @param {cobu.wsc.WebSocketMessage} message
    * @param {cobu.wsc.WebSocketConnection} connection
    * @param {cobu.wsc.WebSocketServerInstance} instance
    */
   this.onMessage = function onMessage(message, connection, instance) {
      if (message.data === 'ping') {
         connection.send('pong');
      }
   };

   constructor();
};
/**
 * CreateInstanceRequestHandler
 * @constructor
 * @param {cobu.wsc.CloudServer} cloudServer
 * @implements {cobu.wsc.ServiceMessageHandler}
 */
cobu.wsc.CreateInstanceRequestHandler = function CreateInstanceRequestHandler(cloudServer)
{
   'use strict';

   /** @type {cobu.wsc.CreateInstanceRequestHandler} */
   var self = this;

   /** Constructor */
   function constructor()
   {
   }

   /**
    * @param {cobu.wsc.service.CreateInstanceRequest} message
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.handle = function handle(message, connection) {

      try {

         var isNameAlreadyUsed = checkInstanceName(message.name);

         if (isNameAlreadyUsed) {
            var response = new cobu.wsc.service.CreateInstanceResponse();
            response.success = false;
            response.message = 'Cannot create instance: Name is already used.';
            connection.send(response);
         } else {
            var newInstance = new cobu.wsc.WebSocketServerInstance(message.name, message.port);
            newInstance.description = message.description;

            cloudServer.addInstance(newInstance);
            connection.send(new cobu.wsc.service.CreateInstanceResponse());
         }
      } catch (ex) {
         cloudServer.serviceInstance.log.error(ex.message);
      }
   };

   /**
    * Check if instance name is already in use.
    * @param {string} name
    */
   function checkInstanceName(name) {

      var isNameAlreadyUsed = false;
      var instances = cloudServer.getInstances();

      for(var i=0; i<instances.length; i++) {
         if (instances[i].name.trim() === name.trim()) {
            isNameAlreadyUsed = true;
            break;
         }
      }

      return isNameAlreadyUsed;
   }

   constructor();
};/**
 * GetInstancesRequestHandler
 * @constructor
 * @param {cobu.wsc.CloudServer} cloudServer
 * @implements {cobu.wsc.ServiceMessageHandler}
 */
cobu.wsc.GetInstancesRequestHandler = function GetInstancesRequestHandler(cloudServer)
{
   'use strict';

   /** @type {cobu.wsc.StartInstanceRequestHandler} */
   var self = this;

   /** Constructor */
   function constructor()
   {
   }

   /**
    * @param {cobu.wsc.WebSocketMessage} message
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.handle = function handle(message, connection) {

      try {
         var instances = cloudServer.getInstances();
         var response = new cobu.wsc.service.GetInstancesResponse();

         for(var i=0; i<instances.length; i++) {
            var instance = instances[i];

            var instanceInfo = new cobu.wsc.service.InstanceInfo();
            instanceInfo.name = instance.name;
            instanceInfo.connectionCount = instance.getConnections().length;
            instanceInfo.port = instance.port;
            instanceInfo.state = instance.state;
            instanceInfo.plugins = toPluginString(instance.plugins);
            instanceInfo.description = instance.description;

            response.instances.push(instanceInfo);
         }
         connection.sendAsJson(response);
      } catch (ex) {
         cloudServer.serviceInstance.log.error(ex.message);
      }
   };

   /**
    *
    * @param {Array.<cobu.wsc.PluginWorker>} plugins
    */
   function toPluginString(plugins) {
      var text = '';

      for(var i=0; i<plugins.length; i++) {
         if (text !== '') {
            text += ", ";
         }
         text += plugins[i].name;
      }

      return text;
   }

   constructor();
};/**
 * RemoveInstanceRequestHandler
 * @constructor
 * @param {cobu.wsc.CloudServer} cloudServer
 * @implements {cobu.wsc.ServiceMessageHandler}
 */
cobu.wsc.RemoveInstanceRequestHandler = function RemoveInstanceRequestHandler(cloudServer)
{
   'use strict';

   /** @type {cobu.wsc.RemoveInstanceRequestHandler} */
   var self = this;

   /** Constructor */
   function constructor()
   {
   }

   /**
    * @param {cobu.wsc.WebSocketMessage} message
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.handle = function handle(message, connection) {

      try {
         cloudServer.removeInstance(message.instanceName);
         connection.sendAsJson(new cobu.wsc.service.RemoveInstanceResponse());
      } catch (ex) {
         cloudServer.serviceInstance.log.error(ex.message);
      }
   };

   constructor();
};/**
 * StartInstanceRequestHandler
 * @constructor
 * @param {cobu.wsc.CloudServer} cloudServer
 * @implements {cobu.wsc.ServiceMessageHandler}
 */
cobu.wsc.StartInstanceRequestHandler = function StartInstanceRequestHandler(cloudServer)
{
   'use strict';

   /** @type {cobu.wsc.StartInstanceRequestHandler} */
   var self = this;

   /** Constructor */
   function constructor()
   {
   }

   /**
    * @param {cobu.wsc.WebSocketMessage} message
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.handle = function handle(message, connection) {

      try {
         cloudServer.startInstance(message.instanceName);
         connection.sendAsJson(new cobu.wsc.service.StartInstanceResponse());
      } catch (ex) {
         cloudServer.serviceInstance.log.error(ex.message);
      }
   };

   constructor();
};/**
 * StopInstanceRequestHandler
 * @constructor
 * @param {cobu.wsc.CloudServer} cloudServer
 * @implements {cobu.wsc.ServiceMessageHandler}
 */
cobu.wsc.StopInstanceRequestHandler = function StopInstanceRequestHandler(cloudServer)
{
   'use strict';

   /** @type {cobu.wsc.StartInstanceRequestHandler} */
   var self = this;

   /** Constructor */
   function constructor()
   {
   }

   /**
    * @param {cobu.wsc.WebSocketMessage} message
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.handle = function handle(message, connection) {

      try {
         cloudServer.stopInstance(message.instanceName);
         connection.sendAsJson(new cobu.wsc.service.StartInstanceResponse());
      } catch (ex) {
         cloudServer.serviceInstance.log.error(ex.message);
      }
   };

   constructor();
};/**
 * UpdateInstanceRequestHandler
 * @constructor
 * @param {cobu.wsc.CloudServer} cloudServer
 * @implements {cobu.wsc.ServiceMessageHandler}
 */
cobu.wsc.UpdateInstanceRequestHandler = function UpdateInstanceRequestHandler(cloudServer)
{
   'use strict';

   /** @type {cobu.wsc.CreateInstanceRequestHandler} */
   var self = this;

   /** Constructor */
   function constructor()
   {
   }

   /**
    * @param {cobu.wsc.service.UpdateInstanceRequest} message
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.handle = function handle(message, connection) {

      try {

         var foundInstance = checkInstanceName(message.instanceName);

         if (foundInstance) {
            var instance = new cobu.wsc.WebSocketServerInstance(message.name, message.port);
            instance.description = message.description;

            console.log('updateInstance', instance);
            cloudServer.removeInstance(message.instanceName);
            cloudServer.addInstance(instance);

            connection.send(new cobu.wsc.service.UpdateInstanceResponse());
         } else {
            var response = new cobu.wsc.service.UpdateInstanceResponse();
            response.success = false;
            response.message = 'No instance with name ' + message.name + ' found';
            connection.send(response);
         }
      } catch (ex) {
         cloudServer.serviceInstance.log.error(ex.message);
      }
   };

   /**
    * Check if instance name is already in use.
    * @param {string} name
    */
   function checkInstanceName(name) {

      var isNameAlreadyUsed = false;
      var instances = cloudServer.getInstances();

      for(var i=0; i<instances.length; i++) {
         if (instances[i].name.trim() === name.trim()) {
            isNameAlreadyUsed = true;
            break;
         }
      }

      return isNameAlreadyUsed;
   }

   constructor();
};/**
 * GetPluginsRequestHandler
 * @constructor
 * @param {cobu.wsc.CloudServer} cloudServer
 * @implements {cobu.wsc.ServiceMessageHandler}
 */
cobu.wsc.GetPluginsRequestHandler = function GetPluginsRequestHandler(cloudServer)
{
   'use strict';

   /** @type {cobu.wsc.GetPluginsRequestHandler} */
   var self = this;

   /** Constructor */
   function constructor() {
   }

   /**
    * @param {cobu.wsc.WebSocketMessage} message
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.handle = function handle(message, connection) {

      try {
         var plugins = cloudServer.pluginManager.getPlugins();

         var response = new cobu.wsc.service.GetPluginsResponse();

         for(var i=0; i < plugins.length; i++) {
            var plugin = plugins[i];

            var pluginInfo = new cobu.wsc.service.PluginInfo();
            pluginInfo.name = plugin.name;
            pluginInfo.description = plugin.description;
            pluginInfo.code = plugin.code;

            response.plugins.push(pluginInfo);
         }
         console.log(response);
         connection.sendAsJson(response);
      } catch (ex) {
         cloudServer.serviceInstance.log.error(ex.message);
      }
   };

   constructor();
};/**
 * ServiceMessageHandler
 * @interface
 */
cobu.wsc.ServiceMessageHandler = function ServiceMessageHandler()
{
   'use strict';

   /**
    * @param {object} message
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.handle = function handle(message, connection) {};
};/**
 * ServicePlugin
 * @constructor
 * @implements {cobu.wsc.PluginWorker}
 * @param {cobu.wsc.CloudServer} cloudServer
 */
cobu.wsc.ServicePlugin = function ServicePlugin(cloudServer)
{
   'use strict';

   /** @type {cobu.wsc.PingPongPluginWorker} */
   var self = this;

   this.name = self.constructor.name;

   var apiMap = {};

   /** Constructor */
   function constructor() {
      apiMap['request.startInstance'] = new cobu.wsc.StartInstanceRequestHandler(cloudServer);
      apiMap['request.stopInstance'] = new cobu.wsc.StopInstanceRequestHandler(cloudServer);
      apiMap['request.getInstances'] = new cobu.wsc.GetInstancesRequestHandler(cloudServer);
      apiMap['request.createInstance'] = new cobu.wsc.CreateInstanceRequestHandler(cloudServer);
      apiMap['request.updateInstance'] = new cobu.wsc.UpdateInstanceRequestHandler(cloudServer);
      apiMap['request.removeInstance'] = new cobu.wsc.RemoveInstanceRequestHandler(cloudServer);
      apiMap['request.getPlugins'] = new cobu.wsc.GetPluginsRequestHandler(cloudServer);
   }

   /**
    * @param {cobu.wsc.WebSocketConnection} connection
    */
   this.onNewConnection = function onNewConnection(connection) {};

   /**
    * @param {cobu.wsc.WebSocketMessage} message
    * @param {cobu.wsc.WebSocketConnection} connection
    * @param {cobu.wsc.WebSocketServerInstance} instance
    */
   this.onMessage = function onMessage(message, connection, instance) {

      try {
         instance.log.info('onMessage ' + message.data);
         var msg = JSON.parse(message.data);

         if (msg.type) {
            if (apiMap.hasOwnProperty(msg.type)) {
               apiMap[msg.type].handle(msg, connection);
            }
         }
      } catch (ex) {
         instance.log.error(ex.message);
      }
   };

   constructor();
};
console.log('start server');

var cloudServer = new cobu.wsc.CloudServer();

var serviceInstance = new cobu.wsc.WebSocketServerInstance('service', 8080);
serviceInstance.plugins.push(new cobu.wsc.ServicePlugin(cloudServer));
cloudServer.start(serviceInstance);

var instanceA = new cobu.wsc.WebSocketServerInstance('A', 8081);
instanceA.description = 'test-csu';
//instanceA.plugins.push(new cobu.wsc.PingPongPluginWorker());
//instanceA.plugins.push(new cobu.wsc.BroadcastPluginWorker());


var instanceB = new cobu.wsc.WebSocketServerInstance('B', 8082);
//instanceB.plugins.push(new cobu.wsc.PingPongPluginWorker());
//instanceB.plugins.push(new cobu.wsc.EchoPluginWorker());


cloudServer.pluginManager.createOrUpdatePlugin('console', 'Hello World console output', 'function HelloWorld() { this.onMessage = function onMessage(message, connection, instance) { console.log("hello world"); }; }');

var echoPlugin = new cobu.wsc.Plugin();
echoPlugin.name = 'echo';
echoPlugin.description = 'Echo service. Every received message will be returned.';
echoPlugin.PluginWorker = cobu.wsc.EchoPluginWorker;
echoPlugin.code = cobu.wsc.EchoPluginWorker.toString();

cloudServer.pluginManager.addOrUpdatePlugin(echoPlugin);


instanceA.plugins.push(cloudServer.pluginManager.createPluginWorker('echo'));
instanceA.plugins.push(cloudServer.pluginManager.createPluginWorker('console'));

cloudServer.addInstance(instanceA);
cloudServer.addInstance(instanceB);

console.log('server initialized. running...');



