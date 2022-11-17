export class NssUiApi {
    static NssButtons: string;
    static NssConfirm: string;
    static NssResponsive: string;
    static NssSimpleTextEditor: string;
    static NssSvgReplacer: string;
    static NssTextBox: string;
    static NssTip: string;
    static NssPadLock: string;
    /**
     * @param {string} resource_name
     */
    constructor(resource_name: string);
    /**
     * @type {string}
     * @private
     */
    private _resource_name;
    /**
     * @param {string} component_name
     * @return {Promise<NssUiComponentInterface>}
     * @private
     */
    private _loadComponents;
    /**
     * @param {string[]} component_names
     * @return {Promise<NssUiComponents>}
     */
    load(component_names: string[]): Promise<NssUiComponents>;
}
