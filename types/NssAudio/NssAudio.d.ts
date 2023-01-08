/**
 * @implements {NssUiComponentInterface}
 */
export class NssAudio extends NssUiComponentInterface implements NssUiComponentInterface {
    /**
     * @type {NssAudio}
     * @private
     */
    private static _internal_player;
    /**
     * @type {string}
     * @private
     */
    private static _internal_sfx_filepath;
    /**
     * @param {number} [volume]
     * @return {Promise<void>}
     */
    static playSfxBack(volume?: number): Promise<void>;
    /**
     * @param {number} [volume=0.5]
     * @return {Promise<void>}
     */
    static playSfxNext(volume?: number): Promise<void>;
    /**
     * @param {number} [volume=0.25]
     * @return {Promise<void>}
     */
    static playSfxUpDown(volume?: number): Promise<void>;
    /**
     * @param {number} [volume]
     * @return {Promise<void>}
     */
    static playSfxShowMenu(volume?: number): Promise<void>;
    /**
     * @param {number} [volume]
     * @return {Promise<void>}
     */
    static playSfxIndexOpen(volume?: number): Promise<void>;
    /**
     * @param {number} [volume]
     * @return {Promise<void>}
     */
    static playSfxIndexClose(volume?: number): Promise<void>;
    /**
     * @param {number} [volume]
     * @return {Promise<void>}
     */
    static playSfxHideMenu1(volume?: number): Promise<void>;
    /**
     * @param {number} [volume]
     * @return {Promise<void>}
     */
    static playSfxHideMenu2(volume?: number): Promise<void>;
    /**
     * @param {number} [volume]
     * @return {Promise<void>}
     */
    static playSfxHideMenu3(volume?: number): Promise<void>;
    /**
     * @param {string} filename
     * @param {number} [volume=0.5]
     * @param {boolean} [standalone=false]
     * @return {Promise<void>}
     * @private
     */
    private static _playSfx;
    /**
     * @inheritDoc
     */
    static getStyleFilenames(): any[];
    /**
     * @param {string} audio_path
     * @param {number} [volume=0.5]
     */
    constructor(audio_path: string, volume?: number);
    /**
     * @type {string}
     * @private
     */
    private _audio_path;
    /**
     * @type {number}
     * @private
     */
    private _volume;
    /**
     * @type {HTMLAudioElement}
     * @private
     */
    private _audio;
    /**
     * @param {string} audio_path
     * @return {NssAudio}
     */
    setAudioPath(audio_path: string): NssAudio;
    /**
     * @param {number} volume
     * @return {NssAudio}
     */
    setVolume(volume: number): NssAudio;
    /**
     * @param {string} filename
     * @param {boolean} prevent_reset
     * @return {Promise<void>}
     */
    playAudio(filename: string, prevent_reset: boolean): Promise<void>;
    /**
     * @protected
     */
    protected resetAudio(): void;
}
import { NssUiComponentInterface } from "../NssUiComponentInterface.js";
