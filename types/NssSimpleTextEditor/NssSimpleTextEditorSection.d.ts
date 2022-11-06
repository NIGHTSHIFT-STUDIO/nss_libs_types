export class NssSimpleTextEditorSection {
    static _uid_ctr: number;
    static TYPE_HEADLINE_ID: string;
    static TYPE_TEXT_ID: string;
    static CSS_REMOVE_BTN_DISABLED: string;
    static CSS_ERROR: string;
    /**
     * @type {NssSimpleTextEditorAlign[]}
     */
    static ALIGN_LIST: NssSimpleTextEditorAlign[];
    /**
     * @type {NssSimpleTextEditorType[]}
     */
    static TYPE_LIST: NssSimpleTextEditorType[];
    /**
     * @return {string}
     * @private
     */
    private static _createUniqueID;
    /**
     * @param {NssSimpleTextEditor} editor
     */
    constructor(editor: NssSimpleTextEditor);
    /**
     * @type {NssSimpleTextEditor}
     * @private
     */
    private _editor;
    /**
     * @type {string}
     * @private
     */
    private _id;
    /**
     * @type {string}
     * @private
     */
    private _type;
    /**
     * @type {number}
     * @private
     */
    private _current_align_index;
    /**
     * @type {number}
     * @private
     */
    private _current_type_index;
    /**
     * @type {boolean}
     * @private
     */
    private _was_validated;
    /**
     * @type {boolean}
     * @private
     */
    private _tab_creates_new_sections;
    /**
     * @private
     */
    private _createDom;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private _el;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private _options_el;
    /**
     * @type {HTMLButtonElement}
     * @private
     */
    private _type_btn_el;
    /**
     * @type {HTMLButtonElement}
     * @private
     */
    private _align_btn_el;
    /**
     * @type {HTMLButtonElement}
     * @private
     */
    private _remove_btn_el;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private _text_el;
    _footer_el: HTMLDivElement;
    /**
     * @type {HTMLButtonElement}
     * @private
     */
    private _add_btn_el;
    /**
     * @private
     */
    private _onTypeBtn;
    /**
     * @private
     */
    private _updateType;
    /**
     * @param {number} [index]
     * @return {NssSimpleTextEditorType}
     * @private
     */
    private _getTypeByIndex;
    /**
     * @return {NssSimpleTextEditorType}
     */
    getType(): NssSimpleTextEditorType;
    /**
     * @param {string} id
     * @return {NssSimpleTextEditorType}
     * @private
     */
    private _getTypeById;
    /**
     * @param {string} id
     * @return {number}
     * @private
     */
    private _getTypeIndexById;
    /**
     * @private
     */
    private _onAlignBtn;
    /**
     * @private
     */
    private _updateAlign;
    /**
     * @param {number} [index]
     * @return {NssSimpleTextEditorAlign}
     * @private
     */
    private _getAlignByIndex;
    /**
     * @return {NssSimpleTextEditorAlign}
     */
    getAlign(): NssSimpleTextEditorAlign;
    /**
     * @return {string}
     */
    getText(): string;
    /**
     * @private
     */
    private _onRemoveBtn;
    /**
     * @private
     */
    private _onAddBtn;
    /**
     * @return {HTMLDivElement}
     */
    getEl(): HTMLDivElement;
    /**
     * @return {string}
     */
    getId(): string;
    /**
     * @return {NssSimpleTextEditorSection}
     */
    setHeadline(): NssSimpleTextEditorSection;
    /**
     * @return {NssSimpleTextEditorSection}
     */
    setText(): NssSimpleTextEditorSection;
    destroy(): void;
    /**
     * @return {NssSimpleTextEditorSection}
     */
    enableRemoveBtn(): NssSimpleTextEditorSection;
    /**
     * @return {NssSimpleTextEditorSection}
     */
    disableRemoveBtn(): NssSimpleTextEditorSection;
    /**
     * @return {NssSimpleTextEditorSection}
     */
    focus(): NssSimpleTextEditorSection;
    /**
     * @private
     */
    private _monitorValidationAfterError;
    /**
     * @return {boolean}
     */
    isErrorHandlingSuccessful(): boolean;
    /**
     * @return {boolean}
     */
    isValid(): boolean;
    /**
     * @return {NssSimpleTextEditorSection}
     */
    enableTabCreatesNewSections(): NssSimpleTextEditorSection;
    /**
     * @return {NssSimpleTextEditorSection}
     */
    disableTabCreatesNewSections(): NssSimpleTextEditorSection;
}
import { NssSimpleTextEditor } from "./NssSimpleTextEditor.js";
