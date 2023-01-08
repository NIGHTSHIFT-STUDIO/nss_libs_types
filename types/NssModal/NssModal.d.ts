/**
 * ~closeCallback
 */
export type NssModal = (modal: NssModal) => any;
/**
 * @callback NssModal~closeCallback
 * @param {NssModal} modal
 */
/**
 * @extends {NssUiComponent}
 */
export class NssModal extends NssUiComponent {
    static TEMPLATE_MODAL: string;
    static TEMPLATE_CONTENT: string;
    static ANIM_DUR_BUFFER_IN_MS: number;
    static NOT_EDITABLE_INPUT_TYPES: string[];
    /**
     * @type {HTMLElement}
     * @private
     */
    private _modal_el;
    /**
     * @type {HTMLElement}
     * @private
     */
    private _modal_content_el;
    /**
     * @type {HTMLElement}
     * @private
     */
    private _content_el;
    /**
     * @type {boolean}
     * @private
     */
    private _close_on_modal;
    /**
     * @type {NssModal~closeCallback}
     * @private
     */
    private _on_close_callback;
    /**
     * @type {Object.<string,boolean>}
     * @private
     */
    private _close_keys;
    /**
     * @return {NssModal}
     * @private
     */
    private _createModal;
    /**
     * @return {NssModal}
     * @private
     */
    private _createModalContent;
    /**
     * @private
     * @return {number}
     */
    private _getAnimDuration;
    /**
     * @return {Promise<void>}
     * @private
     */
    private _waitForAnim;
    /**
     * @param {MouseEvent} event
     * @private
     */
    private _onModalClick;
    /**
     * @param {NssModal~closeCallback} callback
     * @return {NssModal}
     */
    onClose(callback: any): NssModal;
    /**
     * @return {Promise<void>}
     */
    show(): Promise<void>;
    /**
     * @return {Promise<void>}
     */
    hide(): Promise<void>;
    /**
     * @private
     */
    private _destroy;
    /**
     * @return {NssModal}
     */
    closeOnModal(): NssModal;
    /**
     * @return {NssModal}
     */
    closeOnEscape(): NssModal;
    /**
     * @return {NssModal}
     */
    closeOnBackspace(): NssModal;
    /**
     * @return {boolean}
     * @private
     */
    private _isActiveElementEditable;
    /**
     * @param {string[]|string} keys
     * @return {NssModal}
     */
    closeOnKeys(keys: string[] | string): NssModal;
    _close_key_handler: (event: any) => void;
    /**
     * @return {NssModal}
     * @private
     */
    private _removeCloseOnKeyListener;
    /**
     * @param {HTMLElement} content_el
     * @return {NssModal}
     */
    setContent(content_el: HTMLElement): NssModal;
    /**
     * @return {boolean}
     */
    hasContent(): boolean;
}
import { NssUiComponent } from "../NssUiComponent.js";
