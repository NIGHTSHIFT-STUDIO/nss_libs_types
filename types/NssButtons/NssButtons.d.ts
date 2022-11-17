/**
 * @implements {NssUiComponentInterface}
 */
export class NssButtons extends NssUiComponentInterface implements NssUiComponentInterface {
    /**
     * @private
     */
    private _initializeOtherComponents;
    /**
     * @param {string} label
     * @return {NssButton}
     */
    create(label: string): NssButton;
}
import { NssUiComponentInterface } from "../NssUiComponentInterface.js";
import { NssButton } from "./NssButton.js";
