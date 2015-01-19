/**
 * SetStoreValueRequest
 * @constructor
 * @implements {yak.api.Request}
 */
yak.api.SetStoreValueRequest = function SetStoreValueRequest() {
    /**
     * Command for the service API.
     * @type {string}
     */
    this.type = 'request.setStoreValue';

    /**
     * Create unique request id.
     * @type {string}
     */
    this.id = yak.api.guid();

    /**
     * The store key.
     * @type {?string}
     */
    this.key = null;

    /**
     * The key-value pair description.
     * @type {null}
     */
    this.description = null;

    /**
     * The store value.
     * @type {?string}
     */
    this.value = null;
};
