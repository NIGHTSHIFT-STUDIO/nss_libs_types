/**
 * @implements {NssUiComponentInterface}
 */
export class NssResponsive extends NssUiComponentInterface implements NssUiComponentInterface {
    /**
     * @type {Function}
     */
    updateScreenWidthFactorDebounceClocked: Function;
    updateScreenWidthFactor(): void;
    /**
     * @param {function} callback
     * @param {number} interval_in_ms
     * @return {(function(): void)|*}
     */
    debounceClocked(callback: Function, interval_in_ms: number): (() => void) | any;
    /**
     * @return {boolean}
     * @private
     */
    private _isInitializedBefore;
    initialize(): void;
}
import { NssUiComponentInterface } from "../NssUiComponentInterface.js";
