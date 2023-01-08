/**
 * @extends {NssUiComponent}
 */
export class NssLoadingIndicator extends NssUiComponent {
    /**
     * @param {HTMLElement} [target_el]
     */
    constructor(target_el?: HTMLElement);
    CSS_SHOW: string;
    CSS_HIDE: string;
    CSS_HIDDEN: string;
    STATUS_VISIBLE: string;
    STATUS_HIDDEN: string;
    /**
     * @type {HTMLElement}
     * @private
     */
    private _target_el;
    /**
     * @type {string}
     * @private
     */
    private _status;
    /**
     * @return {boolean}
     * @private
     */
    private _isVisible;
    /**
     * @private
     */
    private _createDom;
    _el: HTMLDivElement;
    _loader_el: HTMLDivElement;
    /**
     * @private
     */
    private _resetTimeout;
    _timeout: any;
    /**
     * @return {Promise<void>}
     */
    show(): Promise<void>;
    /**
     * @return {Promise<void>}
     */
    hide(): Promise<void>;
    /**
     * @return {Promise<void>}
     */
    destroy(): Promise<void>;
}
import { NssUiComponent } from "../NssUiComponent.js";
