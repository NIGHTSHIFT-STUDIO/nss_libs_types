export class NssClientLoadingIndicator {
    /**
     * @static
     * @type {string[]}
     */
    static XHR_EVENT_NAMES: string[];
    /**
     * @param {HTMLElement} target_el
     * @param {number} [delay_in_ms=500]
     */
    constructor(target_el: HTMLElement, delay_in_ms?: number);
    /**
     * @type {number}
     * @private
     */
    private _delay_in_ms;
    /**
     * @type {Object.<string,{xhr:XMLHttpRequest, on_load_event:function}>}
     * @private
     */
    private _active_requests;
    /**
     * @type {HTMLElement}
     * @private
     */
    private _target_el;
    /**
     * @type {NssLoadingIndicator|null}
     * @private
     */
    private _loading_indicator;
    /**
     * @type {number|null}
     * @private
     */
    private _show_timeout;
    /**
     * @param {XMLHttpRequest} xhr
     */
    add(xhr: XMLHttpRequest): void;
    /**
     * @param {XMLHttpRequest} xhr
     */
    remove(xhr: XMLHttpRequest): void;
    /**
     * @private
     */
    private _resetShowTimeout;
    hide(): void;
    show(): void;
    /**
     * @return {boolean}
     */
    hasActiveRequests(): boolean;
    /**
     * @param {XMLHttpRequest} xhr
     * @param {function} on_load_event
     */
    rememberActiveRequest(xhr: XMLHttpRequest, on_load_event: Function): void;
    /**
     * @param {XMLHttpRequest} xhr
     */
    forgetActiveRequest(xhr: XMLHttpRequest): void;
}
