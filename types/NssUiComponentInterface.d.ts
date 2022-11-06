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
}
