export class NssUiApi {
    /**
     * @param {string} resource_name
     * @param {string} relative_path_to_nss_libs
     */
    constructor(resource_name: string, relative_path_to_nss_libs: string);
    NssButtons: string;
    NssConfirm: string;
    NssResponsive: string;
    NssSimpleTextEditor: string;
    NssSvgReplacer: string;
    NssTextBox: string;
    NssTip: string;
    /**
     * @type {string}
     * @private
     */
    private _resource_name;
    /**
     * @type {string}
     * @private
     */
    private _relative_path_to_nss_libs;
    _initialized_components: {};
    /**
     * @return {boolean}
     * @private
     */
    private _isCitizenFX;
    /**
     * @param {string} component_name
     * @return {boolean}
     * @private
     */
    private _isComponentInitialized;
    /**
     * @param {NssUiComponentInterface} component
     * @private
     */
    private _addStyleToDom;
    /**
     * @return {Promise<NssConfirm>}
     */
    getNssConfirm(): Promise<NssConfirm>;
    /**
     * @return {Promise<NssButtons>}
     */
    getNssButtons(): Promise<NssButtons>;
    /**
     * @return {Promise<NssResponsive>}
     */
    getNssResponsive(): Promise<NssResponsive>;
    /**
     * @return {Promise<NssSimpleTextEditor>}
     */
    getNssSimpleTextEditor(): Promise<NssSimpleTextEditor>;
    /**
     * @return {Promise<NssSvgReplacer>}
     */
    getNssSvgReplacer(): Promise<NssSvgReplacer>;
    /**
     * @return {Promise<NssTextBox>}
     */
    getNssTextBox(): Promise<NssTextBox>;
    /**
     * @return {Promise<NssTip>}
     */
    getNssTip(): Promise<NssTip>;
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
