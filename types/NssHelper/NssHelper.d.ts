export class NssHelper {
    /**
     * @type {number}
     * @private
     */
    private static _unique_id;
    /**
     * @param {HTMLElement} target
     * @param {string} property_name
     * @param {number} [default_duration_in_ms=500]
     * @return {number}
     */
    static getAnimDuration(target: HTMLElement, property_name: string, default_duration_in_ms?: number): number;
    /**
     * @return {boolean}
     */
    static isCfxBrowser(): boolean;
    /**
     * @return {string}
     */
    static getUniqueId(): string;
}
