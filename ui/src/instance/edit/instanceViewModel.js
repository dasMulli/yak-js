/**
 * InstanceViewModel
 * @constructor
 * @param {yak.ui.ViewModelContext} context
 */
yak.ui.InstanceViewModel = function InstanceViewModel(context) {
    'use strict';

    /** @type {yak.ui.InstanceViewModel} */
    var self = this;

    /**
    * @type {yak.ui.InstanceItem}
    */
    this.instanceItem = null;

    /**
     * @type {Function}
     */
    this.onInstanceInfoChanged = yak.ui.noop;

    /**
     * @type {Array.<yak.ui.SelectPluginItem>}
     */
    this.selectPluginItems = [];

    /**
     * @type {Function}
     */
    this.onSelectPluginItemsChanged = yak.ui.noop;

    /**
     * Constructor
     */
    function constructor() {
        context.eventBus.on(yak.api.CreateInstanceResponse).register(handleResponse);
        context.eventBus.on(yak.api.UpdateInstanceResponse).register(handleResponse);
        context.eventBus.on(yak.api.GetPluginsResponse).register(handleGetPluginsResponse);
    }

    /**
     * Activate view
     * @param {string|object} data
     */
    this.activate = function activate(data) {
        console.log('InstanceViewModel.activate', data);

        if (data) {
            self.instanceItem = new yak.ui.InstanceItem();
            _.extend(self.instanceItem, data);
        } else {
            self.instanceItem = null;
        }

        self.onInstanceInfoChanged();

        context.webSocket.send(new yak.api.GetPluginsRequest());
    };

    /**
     *
     * @param {yak.api.GetPluginsResponse} response
     */
    function handleGetPluginsResponse(response) {
        console.log('InstanceViewModel.handleGetPluginsResponse');

        self.selectPluginItems = [];

        _.each(response.plugins, function toItem(pluginsInfo) {
            var item = new yak.ui.SelectPluginItem();
            item.name = pluginsInfo.name;
            item.description = pluginsInfo.description;

            if (self.instanceItem && _.contains(self.instanceItem.plugins, item.name)) {
                item.isActive = true;
            }

            self.selectPluginItems.push(item);
        });

        self.onSelectPluginItemsChanged();
    }

    /**
     * Create or update a new websocket instance.
     * @param {yak.ui.InstanceItem} instanceItem
     */
    this.createOrUpdate = function createOrUpdate(instanceItem) {
        console.log('InstanceViewModel.createOrUpdate', { instanceItem: instanceItem });

        var request = null;

        if (self.instanceItem === null) {
            request = new yak.api.CreateInstanceRequest();
            request.instance = _.extend(new yak.api.Instance(), instanceItem);
        } else {
            request = new yak.api.UpdateInstanceRequest();
            request.instance = _.extend(new yak.api.Instance(), instanceItem);
            request.instanceId = self.instanceItem.id;
        }

        request.instance.plugins = [];

        _.each(_.where(self.selectPluginItems, { isActive: true }), function select(selectPluginItem) {
            request.instance.plugins.push(selectPluginItem.name);
        });

        context.webSocket.send(request);
    };

    /**
     * Cancel instance edit.
     */
    this.cancel = function cancel() {
        context.eventBus.post(new yak.ui.ActivatePanelCommand('panel-instance'));
    };

    /**
     *
     * @param {string} pluginName
     */
    this.togglePluginSelection = function togglePluginSelection(pluginName) {
        console.log('togglePluginSelection', pluginName);
        var pluginItem = _.findWhere(self.selectPluginItems, { name: pluginName});
        pluginItem.isActive = !pluginItem.isActive;

        self.onSelectPluginItemsChanged();
    };

    /**
     * @param {yak.api.CreateInstanceResponse} response
     */
    function handleResponse(response) {
        console.log('handleResponse', response);

        if (response.success) {
            context.eventBus.post(new yak.ui.ActivatePanelCommand('panel-instance'));
        }
    }

    constructor();
};