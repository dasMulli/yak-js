/**
 * CreateInstanceConfigRequestHandler
 * @constructor
 * @param {yak.YakServer} yakServer
 * @implements {yakServiceMessageHandler}
 */
yak.CreateInstanceConfigRequestHandler = function CreateInstanceConfigRequestHandler(yakServer) {
    'use strict';

    /**
     * @param {yak.api.CreateInstanceConfigRequest} request
     * @returns {yak.api.CreateInstanceResponse} response
     */
    this.handle = function handle(request) {
        var newInstance = _.clone(request.instance);
        var response = new yak.api.CreateInstanceResponse(request.id);
        var validator = new yak.api.InstanceValidator(newInstance);

        if (validator.isValid()) {
            yakServer.instanceManager.addInstance(newInstance);
        } else {
            response.success = false;
            response.message = validator.getMessage();
        }

        return response;
    };
};
