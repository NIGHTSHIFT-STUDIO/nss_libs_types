/**
 * @extends {NssUiComponent}
 */
export class NssSimpleTextEditor extends NssUiComponent {
    /**
     * @param {HTMLElement|Node|Element} target_el
     */
    constructor(target_el: HTMLElement | Node | Element);
    /**
     * @type {HTMLElement|Node|Element}
     * @private
     */
    private _target_el;
    /**
     * @type {NssSimpleTextEditorSection[]}
     * @private
     */
    private _sections;
    /**
     * @type {string}
     * @private
     */
    private _placeholder_text;
    /**
     * @return NssSimpleTextEditor
     */
    start(): NssSimpleTextEditor;
    /**
     * @param {string} text
     * @return NssSimpleTextEditor
     */
    setPlaceholderText(text: string): NssSimpleTextEditor;
    /**
     * @return {string}
     */
    getPlaceholderText(): string;
    /**
     * @private
     */
    private _createDom;
    /**
     * @type {HTMLElement}
     * @private
     */
    private _container_el;
    /**
     * @param {HTMLElement} new_el
     * @param {HTMLElement} reference_el
     * @private
     */
    private _insertAfter;
    /**
     * @param {HTMLElement} new_el
     * @param {HTMLElement} reference_el
     * @private
     */
    private _insertInto;
    /**
     * @param {NssSimpleTextEditorSection} [parent_section]
     * @return {NssSimpleTextEditorSection}
     */
    addSection(parent_section?: NssSimpleTextEditorSection): NssSimpleTextEditorSection;
    /**
     * @param {NssSimpleTextEditorSection} section
     */
    removeSection(section: NssSimpleTextEditorSection): void;
    /**
     * @private
     */
    private _handleRemoveButtons;
    /**
     * @return {NssSimpleTextEditorSection[]}
     */
    getSectionsComputed(): NssSimpleTextEditorSection[];
    /**
     * @return {boolean}
     */
    isErrorHandlingSuccessful(): boolean;
}
import { NssUiComponent } from "../NssUiComponent.js";
import { NssSimpleTextEditorSection } from "./NssSimpleTextEditorSection.js";
