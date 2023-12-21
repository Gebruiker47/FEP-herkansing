import { LitElement, html, css } from "lit";

export class CustomTextInput extends LitElement {

  static get properties() {
    return {
      type: {type: String},
      disabled: {type: Boolean},
      placeholder: {},
      value: {},
      id:{},
    }
  }

  render() {
    return html `
      <input 
        .type=${this.type}
        .disabled=${this.disabled}
        .placeholder=${this.placeholder || ''}
        .value=${this.value || ''}
        .id=${this.id}
        @change=${this._changeEvent}
      />
    `
  }

  _changeEvent(e) {
    this.value = e.target.value;
    this.dispatchEvent(new CustomEvent('custom-event', {
      detail: {
        type: this.type,
        placeholder: this.placeholder,
        value : this.value,
        id: this.id
      }
    }));
  }

  static get styles() {
    return css `
    .container {
      display: inline-block;
      vertical-align: top;
      margin-right: 15px;
      letter-spacing: 1px;
   }
    label {word-wrap:break-word;}
    input {
      padding: 6px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      font-size: var(--inputFontSize);
      width: var(--inputWidth);
      vertical-align: middle;
    }

    input[type=checkbox] {
      height: 30px;
      cursor: pointer;
      vertical-align: middle;
      border: 0.15em solid currentColor;
      background: red;
      display: inline-block;
      vertical-align: top;
    }
    `
  }
}
window.customElements.define('custom-text-input', CustomTextInput)