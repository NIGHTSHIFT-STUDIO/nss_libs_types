export class NssButton {
    colors: {
        white: string;
        grey: string;
        danger: string;
        gold: string;
        success: string;
    };
    glows: {
        green: string;
        gold: string;
        danger: string;
    };
    sizes: {
        very_small: string;
        small: string;
        large: string;
    };
    /**
     * @type {NssPadLock~onClickCallback}
     * @private
     */
    private _on_click_cb;
    /**
     * @type {HTMLButtonElement}
     * @private
     */
    private _btn_el;
    /**
     * @private
     */
    private _generateDom;
    _btn_wraper_el: HTMLDivElement;
    /**
     * @param {string} label
     * @return {NssButton}
     */
    setLabel(label: string): NssButton;
    /**
     * @param {NssPadLock~onClickCallback} cb
     * @return {NssButton}
     */
    onClick(cb: any): NssButton;
    /**
     * @return {NssButton}
     */
    setIcon(): NssButton;
    /**
     * @return {NssButton}
     */
    unsetIcon(): NssButton;
    /**
     * @return {NssButton}
     */
    setBorderless(): NssButton;
    /**
     * @return {NssButton}
     */
    unsetBorderless(): NssButton;
    /**
     * @return {NssButton}
     */
    setDisabled(): NssButton;
    /**
     * @return {NssButton}
     */
    setEnabled(): NssButton;
    /**
     * @return {NssButton}
     */
    enableGlowing(): NssButton;
    /**
     * @return {NssButton}
     */
    setGlowGold(): NssButton;
    /**
     * @return {NssButton}
     */
    setGlowDanger(): NssButton;
    /**
     * @return {NssButton}
     */
    setGlowGreen(): NssButton;
    /**
     * @return {NssButton}
     */
    disableGlowing(): NssButton;
    /**
     * @return {NssButton}
     */
    setDanger(): NssButton;
    /**
     * @return {NssButton}
     */
    setGold(): NssButton;
    /**
     * @return {NssButton}
     */
    setWhite(): NssButton;
    /**
     * @return {NssButton}
     */
    setSuccess(): NssButton;
    /**
     * @return {NssButton}
     */
    setGrey(): NssButton;
    /**
     * @return {NssButton}
     */
    setSizeNormal(): NssButton;
    /**
     * @return {NssButton}
     */
    setSizeVerySmall(): NssButton;
    /**
     * @return {NssButton}
     */
    setSizeSmall(): NssButton;
    /**
     * @return {NssButton}
     */
    setSizeLarge(): NssButton;
    /**
     * @param {string} new_color_class
     * @private
     */
    private _setColor;
    /**
     * @private
     */
    private _resetColors;
    /**
     * @param {string} glow_class
     * @private
     */
    private _setGlow;
    /**
     * @private
     */
    private _resetGlows;
    /**
     * @param {string} size_class
     * @private
     */
    private _setSize;
    /**
     * @private
     */
    private _resetSizes;
    /**
     * @return {HTMLButtonElement}
     */
    getEl(): HTMLButtonElement;
    /**
     * @return {HTMLDivElement}
     */
    getWrapperEl(): HTMLDivElement;
}
