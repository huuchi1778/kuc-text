import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {TextboxStyle} from './TextboxStyle';

@customElement('kuc-text')
export class KucText extends LitElement {
  @property({type: String}) className = '';
  @property({type: String}) id = '';
  @property({type: String}) placeholder = '';
  @property({type: String}) value = '';
  @property({type: Boolean}) disabled = false;
  @property({attribute: false}) newValue = null;
  @property({attribute: false}) oldValue = null;

  static styles = css`${TextboxStyle}`;

  protected _handleChange(e: {target: HTMLInputElement}) {
    this.newValue = e.target.value;
    this.dispatchEvent(new CustomEvent('kuc:onchange', {
      detail: {
        value: this.newValue,
        oldValue: this.oldValue
      },
      bubbles: true,
      composed: false
    }));
    this.oldValue = this.newValue;
  }

  protected _handleFocus(e: {target: HTMLInputElement}) {
    this.dispatchEvent(new CustomEvent('kuc:focus', {
      detail: {
        value: e.target.value,
      },
      bubbles: true,
      composed: false
    }));
  }

  render() {
    return html`
      <input 
        type="text" 
        placeholder=${this.placeholder} 
        class=${this.className}
        id=${this.id}
        value=${this.value}
        ?disabled="${this.disabled}"
        @input="${this._handleChange}"
        @focus="${this._handleFocus}"
      >
    `;
  }
}