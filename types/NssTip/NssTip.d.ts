/**
 * @implements {NssUiComponentInterface}
 */
export class NssTip extends NssUiComponentInterface implements NssUiComponentInterface {
    static POSITIONS: {
        TOP_LEFT: string;
        TOP_CENTER: string;
        TOP_RIGHT: string;
        CENTER_LEFT: string;
        CENTER_CENTER: string;
        CENTER_RIGHT: string;
        BOTTOM_LEFT: string;
        BOTTOM_CENTER: string;
        BOTTOM_RIGHT: string;
    };
    static ANIM_IN_OUT_DURATION_IN_MS: number;
    /**
     * @param {string} message
     */
    constructor(message: string);
    /**
     * @type {string}
     * @private
     */
    private _message;
    /**
     * @type {number}
     * @private
     */
    private _duration_in_ms;
    /**
     * @type {string}
     * @private
     */
    private _position;
    /**
     * @param {number} new_duration_in_ms
     * @return {NssTip}
     */
    setDuration(new_duration_in_ms: number): NssTip;
    /**
     * @return {NssTip}
     */
    setTopLeft(): NssTip;
    /**
     * @return {NssTip}
     */
    setTopCenter(): NssTip;
    /**
     * @return {NssTip}
     */
    setTopRight(): NssTip;
    /**
     * @return {NssTip}
     */
    setCenterLeft(): NssTip;
    /**
     * @return {NssTip}
     */
    setCenterCenter(): NssTip;
    /**
     * @return {NssTip}
     */
    setCenterRight(): NssTip;
    /**
     * @return {NssTip}
     */
    setBottomLeft(): NssTip;
    /**
     * @return {NssTip}
     */
    setBottomCenter(): NssTip;
    /**
     * @return {NssTip}
     */
    setBottomRight(): NssTip;
    /**
     * @return {Promise}
     */
    show(): Promise<any>;
}
import { NssUiComponentInterface } from "../NssUiComponentInterface.js";
