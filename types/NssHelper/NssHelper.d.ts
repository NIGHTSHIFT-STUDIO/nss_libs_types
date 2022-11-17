export class NssHelper {
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
}
