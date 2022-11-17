/**
 * @implements {NssUiComponentInterface}
 */
export class NssResponsive extends NssUiComponentInterface implements NssUiComponentInterface {
    /**
     * @type {Function}
     */
    updateScreenWidthFactorDebounceClocked: Function;
    updateScreenWidthFactor(): void;
    debounceClocked(callback: any, interval_in_ms: any): () => void;
    /**
     * @return {boolean}
     * @private
     */
    private _isInitializedBefore;
    initialize(): void;
}
import { NssUiComponentInterface } from "../NssUiComponentInterface.js";
