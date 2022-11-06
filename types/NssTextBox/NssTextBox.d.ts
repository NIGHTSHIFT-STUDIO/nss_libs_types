/**
 * @implements {NssUiComponentInterface}
 */
export class NssTextBox extends NssUiComponentInterface implements NssUiComponentInterface {
    static CSS_VISIBLE: string;
    static CSS_TEXT_SMALL: string;
    static CSS_TEXT_DEFAULT: string;
    static CSS_TEXT_MEDIUM: string;
    static CSS_TEXT_LARGE: string;
    static CSS_NO_WRAP: string;
    /**
     * @constructor
     * @param {HTMLElement} target_el
     */
    constructor(target_el: HTMLElement);
    /**
     * @type {string}
     * @private
     */
    private _text;
    /**
     * @type {HTMLElement}
     * @private
     */
    private _target_el;
    /**
     * @type {string}
     * @private
     */
    private _size_css_cls;
    /**
     * @type {boolean}
     * @private
     */
    private _no_wrap;
    /**
     * @private
     */
    private _createDom;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private _container_el;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private _text_before_el;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private _text_el;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private _text_after_el;
    /**
     * @return {boolean}
     * @private
     */
    private _isInDom;
    /**
     * @return {NssTextBox}
     */
    setNoWrap(): NssTextBox;
    /**
     * @return {NssTextBox}
     */
    setWrap(): NssTextBox;
    /**
     * @param {boolean} [new_value]
     * @return {NssTextBox}
     * @private
     */
    private _updateNoWrap;
    /**
     * @return {NssTextBox}
     */
    setTextSizeDefault(): NssTextBox;
    /**
     * @return {NssTextBox}
     */
    setTextSizeSmall(): NssTextBox;
    /**
     * @return {NssTextBox}
     */
    setTextSizeMedium(): NssTextBox;
    /**
     * @return {NssTextBox}
     */
    setTextSizeLarge(): NssTextBox;
    /**
     * @param {string} [new_size]
     * @return {NssTextBox}
     * @private
     */
    private _updateTextSize;
    /**
     * @private
     */
    private _update;
    /**
     * @return {NssTextBox}
     */
    show(): NssTextBox;
    /**
     * @return {NssTextBox}
     */
    hide(): NssTextBox;
    /**
     * @return {NssTextBox}
     */
    removeDom(): NssTextBox;
    /**
     * @private
     * @return {NssTextBox}
     */
    private _updateText;
    /**
     * @return {string}
     */
    getText(): string;
    /**
     * @param {string} value
     * @return {NssTextBox}
     */
    setText(value: string): NssTextBox;
}
import { NssUiComponentInterface } from "../NssUiComponentInterface.js";
