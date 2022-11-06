/**
 * @implements {NssUiComponentInterface}
 */
export class NssConfirm extends NssUiComponentInterface implements NssUiComponentInterface {
    static TEMPLATE_MODAL: string;
    static TEMPLATE_DIALOG: string;
    /**
     * @private
     * @param {string} message
     * @param {string} yes_label
     * @param {string} [no_label='']
     * @param {boolean} [danger=false]
     * @return {Promise}
     */
    private static _factory;
    /**
     * @param {string} message
     * @param {string} yes_label
     * @param {string} no_label
     * @param {boolean} [danger=false]
     * @return {Promise}
     */
    static confirm(message: string, yes_label: string, no_label: string, danger?: boolean): Promise<any>;
    /**
     * @param {string} message
     * @param {string} yes_label
     * @param {boolean} [danger=false]
     * @return {Promise}
     */
    static alert(message: string, yes_label: string, danger?: boolean): Promise<any>;
    /**
     * @type {string}
     * @private
     */
    private _message;
    /**
     * @type {string}
     * @private
     */
    private _yes_label;
    /**
     * @type {string}
     * @private
     */
    private _no_label;
    /**
     * @type {function}
     * @private
     */
    private _yes_cb;
    /**
     * @type {function}
     * @private
     */
    private _no_cb;
    /**
     * @type {boolean}
     * @private
     */
    private _is_danger;
    /**
     * @return {NssConfirm}
     */
    setDanger(): NssConfirm;
    _createModal(): void;
    /**
     * @type {HTMLElement}
     * @private
     */
    private _modal_el;
    _createDialog(): void;
    /**
     * @type {HTMLElement}
     * @private
     */
    private _dialog_el;
    /**
     * @type {HTMLButtonElement}
     * @private
     */
    private _yes_btn;
    /**
     * @type {HTMLButtonElement}
     * @private
     */
    private _no_btn;
    /**
     * @return {number}
     */
    getAnimDuration(): number;
    /**
     * @return {NssConfirm}
     */
    show(): NssConfirm;
    /**
     * @private
     */
    private _onYesClick;
    /**
     * @private
     */
    private _onNoClick;
    /**
     * @param {string} message
     * @return {NssConfirm}
     */
    setMessage(message: string): NssConfirm;
    /**
     * @param {string} label
     * @param {function} cb
     * @return {NssConfirm}
     */
    setYesLabel(label: string, cb: Function): NssConfirm;
    /**
     * @param {string} label
     * @param {function} cb
     * @return {NssConfirm}
     */
    setNoLabel(label: string, cb: Function): NssConfirm;
    /**
     * @return {Promise}
     */
    hide(): Promise<any>;
    /**
     * @private
     */
    private _destroy;
}
import { NssUiComponentInterface } from "../NssUiComponentInterface.js";
