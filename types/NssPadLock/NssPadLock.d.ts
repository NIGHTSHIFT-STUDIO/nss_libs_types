/**
 * @extends {NssUiComponent}
 */
export class NssPadLock extends NssUiComponent {
    /**
     * @param {string} code
     */
    constructor(code: string);
    CSS_OPEN_LOCK: string;
    CSS_VISIBLE: string;
    CSS_SLIDE_IN: string;
    CSS_SLIDE_OUT: string;
    CSS_CAROUSEL: string;
    CSS_ERROR: string;
    /**
     * @type {string}
     * @private
     */
    private _code;
    /**
     * @type {number}
     * @private
     */
    private _code_length;
    /**
     * @type {number}
     * @private
     */
    private _number_length;
    /**
     * @type {number}
     * @private
     */
    private _deg_per_number;
    /**
     * @type {HTMLDivElement[]}
     * @private
     */
    private _rollers;
    /**
     * @type {NssButtons}
     * @private
     */
    private _btn_generator;
    /**
     * @type {NssPadLock~onNewCode}
     * @private
     */
    private _on_new_code_cb;
    /**
     * @type {NssPadLock~onOpen}
     * @private
     */
    private _on_open_cb;
    /**
     * @type {boolean}
     * @private
     */
    private _is_closable;
    /**
     * @type {string}
     * @private
     */
    private _audio_path;
    /**
     * @type {NssAudio}
     * @private
     */
    private _audio_player;
    /**
     * @type {number}
     * @private
     */
    private _time_penalty_in_ms;
    /**
     * @type {string}
     * @private
     */
    private _translation_unlock;
    /**
     * @type {string}
     * @private
     */
    private _translation_lock;
    /**
     * @type {boolean}
     * @private
     */
    private _is_automation_disabled;
    /**
     * @param {string} new_translation
     * @return {NssPadLock}
     */
    setTranslationUnlock(new_translation: string): NssPadLock;
    /**
     * @param {string} new_translation
     * @return {NssPadLock}
     */
    setTranslationLock(new_translation: string): NssPadLock;
    /**
     * For dev usage only.
     * @param {string} path
     * @return {NssPadLock}
     */
    setAudioPath(path: string): NssPadLock;
    /**
     * @private
     */
    private _generateDom;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private _el;
    _inner_el: HTMLDivElement;
    /**
     * @type {number}
     * @private
     */
    private _slide_in_out_anim_dur_in_ms;
    /**
     * @type {number}
     * @private
     */
    private _error_anim_dur_in_ms;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private _closer_el;
    /**
     * @type {number}
     * @private
     */
    private _closer_animation_dur_in_ms;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private _rollers_body_el;
    _rollers_el: HTMLDivElement;
    /**
     * @type {NssButton}
     * @private
     */
    private _unlock_btn;
    /**
     * @type {HTMLDivElement}
     * @private
     */
    private _unlock_btn_container_el;
    /**
     * @return {NssPadLock}
     */
    disableAutomation(): NssPadLock;
    /**
     * @private
     */
    private _resetAnimTimeoutId;
    /**
     * @private
     */
    private _resetShowHideTimeouts;
    /**
     * @return {Promise<void>}
     */
    show(): Promise<void>;
    _show_hide_tick_timeout_id: number;
    _show_hide_timeout_id: number;
    /**
     * @return {Promise<void>}
     */
    hide(): Promise<void>;
    destroy(): void;
    /**
     * @return {Promise<void>}
     */
    shake(): Promise<void>;
    /**
     * @return {NssPadLock}
     */
    disableButtons(): NssPadLock;
    /**
     * @return {NssPadLock}
     */
    enableButtons(): NssPadLock;
    /**
     * @return {Promise<void>}
     */
    wrongCode(): Promise<void>;
    /**
     * @param {number} duration_in_ms
     * @return {NssPadLock}
     */
    setTimePenalty(duration_in_ms: number): NssPadLock;
    /**
     * @return {Promise<void>}
     */
    reset(): Promise<void>;
    /**
     * @return {boolean}
     */
    isOpen(): boolean;
    /**
     * @private
     */
    private _handleClosable;
    /**
     * @return {boolean}
     */
    isClosable(): boolean;
    /**
     * @return {NssPadLock}
     */
    setClosable(): NssPadLock;
    /**
     * @return {NssPadLock}
     */
    setNotClosable(): NssPadLock;
    /**
     * @return {Promise<void>}
     */
    openLock(): Promise<void>;
    _anim_timeout_id: number;
    /**
     * @return {Promise<void>}
     */
    closeLock(): Promise<void>;
    /**
     * @private
     */
    private _addSeparator;
    /**
     * @param {HTMLDivElement} target_el
     * @return {HTMLDivElement}
     * @private
     */
    private _generateRoller;
    /**
     * @param {HTMLElement} roller_el
     * @param {HTMLElement} carousel_el
     * @param {number} deg
     * @return {NssPadLock}
     * @private
     */
    private _setCarouselDeg;
    /**
     * @param {HTMLElement} roller_el
     * @private
     */
    private _determineValue;
    /**
     * @private
     */
    private _addDragAndScroll;
    /**
     * @return {string}
     */
    getCode(): string;
    /**
     * @param {NssPadLock~onNewCode} callback
     * @return {NssPadLock}
     */
    onNewCode(callback: any): NssPadLock;
    /**
     * @param {NssPadLock~onOpen} callback
     * @return {NssPadLock}
     */
    onOpen(callback: any): NssPadLock;
    /**
     * @private
     */
    private _playAudioOpen;
    /**
     * @private
     */
    private _playAudioClick;
}
import { NssUiComponent } from "../NssUiComponent.js";
