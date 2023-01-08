/**
 * @extends {NssUiComponent}
 */
export class NssButtons extends NssUiComponent {
    /**
     * @param {string} label
     * @return {NssButton}
     */
    create(label: string): NssButton;
}
import { NssUiComponent } from "../NssUiComponent.js";
import { NssButton } from "./NssButton.js";
