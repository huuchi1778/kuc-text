import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {TextboxStyle} from './TextboxStyle';

// document.addEventListener('kuc:onchange', e => {
//   console.log('Changing...');
//   // @ts-ignore
//   console.log(e.detail.value);
// });

const leftBox = document.getElementById('this-id');
leftBox.addEventListener('kuc:focus', e => {
  console.log('Focusing on left box');
});

const rightBox = document.getElementById('that-div');
rightBox.addEventListener('kuc:focus', e => {
  console.log('Focusing on right box');
});

@customElement('kuc-text')
export class KucText extends LitElement {
  @property({type: String}) className = '';
  @property({type: String}) id = '';
  @property({type: String}) placeholder = '';
  @property({type: String}) value = '';
  @property({type: Boolean}) disabled = false;

  // error checking for invalid class name
  static styles = css`${TextboxStyle}`;

  protected _handleChange(e) {
    this.dispatchEvent(new CustomEvent('kuc:onchange', {
      detail: {
        value: e.target.value
      },
      bubbles: true,
      composed: true
    }));
  }

  protected _handleFocus(e) {
    this.dispatchEvent(new CustomEvent('kuc:focus', {
      detail: {
        value: e.target.value
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
