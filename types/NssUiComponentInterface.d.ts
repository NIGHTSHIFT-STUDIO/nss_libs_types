/**
 * @interface
 */
export class NssUiComponentInterface {
    /**
     * @return {string[]}
     */
    static getStyleFilenames(): string[];
    /**
     * @return {string}
     */
    static getComponentName(): string;
    /**
     * @private
     */
    private static _ensureStyleLoadedRegister;
    /**
     * @param {string} file_path
     * @return {boolean}
     * @private
     */
    private static _isStyleLoaded;
    /**
     * @param {string} file_path
     * @private
     */
    private static _setStyleLoaded;
    static loadStyles(): void;
}
