export class NssClient extends NssUiComponentInterface {
    /**
     * @static
     * @type {string}
     */
    static XHR_TYPE_POST: string;
    /**
     * @static
     * @type {Object.<string,NssClient~responseCallback>}
     * @private
     */
    private static _response_type_cb_list;
    /**
     * @inheritDoc
     */
    static getStyleFilenames(): any[];
    /**
     * @param {string} resource_name
     * @constructor
     */
    constructor(resource_name: string);
    /**
     * @type {string}
     * @private
     */
    private _resource_name;
    /**
     * @type {NssLoadingIndicator|null}
     * @private
     */
    private _loading_indicator;
    /**
     * @type {number}
     * @private
     */
    private _loading_indicator_delay_in_ms;
    /**
     * @type {NssClientLoadingIndicatorByRet}
     * @private
     */
    private _loading_indicator_by_ret;
    /**
     * @param {number} delay_in_ms
     * @return {NssClient}
     */
    setLoadingIndicatorDelay(delay_in_ms: number): NssClient;
    /**
     * @param {string} event_name
     * @param {*} [data]
     * @param {function} [cb]
     * @param {HTMLElement|false|null} [loading_indicator_target_el=document.body]
     * @return {NssClient}
     */
    post(event_name: string, data?: any, cb?: Function, loading_indicator_target_el?: HTMLElement | false | null): NssClient;
    /**
     * @return {NssClient}
     */
    close(): NssClient;
    /**
     * @param {function} cb
     * @return {string}
     * @private
     */
    private _uniqueResponseType;
    /**
     * @param {string} event_name
     * @param {NssClientMessageRequest} [data]
     * @param {NssClient~responseCallback} [cb]
     * @param {string} [method]
     * @param {HTMLElement|false|null} [loading_indicator_target_el=document.body]
     * @private
     */
    private _xhr;
    /**
     * @param {XMLHttpRequest} xhr
     * @param {string} response_event_type
     * @param {HTMLElement|null|false} [target_el=document.body]
     * @private
     */
    private _showLoadingIndicator;
    /**
     * @private
     */
    private _setupClientEventListener;
    /**
     * @param {string} event_name
     * @param {NssClient~responseCallback} cb
     * @return {NssClient}
     */
    on(event_name: string, cb: any): NssClient;
    /**
     * @param {MessageEvent} event
     * @protected
     */
    protected _onClientMessage(event: MessageEvent): void;
}
import { NssUiComponentInterface } from "../NssUiComponentInterface.js";
