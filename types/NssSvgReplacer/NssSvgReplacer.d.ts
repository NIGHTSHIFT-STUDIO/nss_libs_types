/**
 * @implements {NssUiComponentInterface}
 */
export class NssSvgReplacer extends NssUiComponentInterface implements NssUiComponentInterface {
    static getStyleFilenames(): any[];
    setupImageObserver(): void;
    loadSvg(url: any, img_el: any): void;
}
import { NssUiComponentInterface } from "../NssUiComponentInterface.js";
