import { LitElement, html, css } from 'lit'

export class MyButton extends LitElement {

  static get properties() {
    return {
      label: {type: String},
      disabled: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.label = 'custom button name';
    // this.disabled = false;
  }

  render() {
    return html `
    <button 
      @click=${this._handleClick} 
      ?disabled="${this.disabled}">
      ${this.label}
    </button>
    `
  }

  _handleClick(e) {
    this.disabled = true;
    const event = new CustomEvent('custom-click', {
      detail: {
        label: this.label,
        disabled: this.disabled = !this.disabled,
        bubbles: true,
        composed: true,
        cancelable: true
      }
    });
    this.dispatchEvent(event);
  }

  static get styles() {
    return css ` 
      button {
        font-family: Google Sans, Roboto, Helvetica, Arial, sans-serif;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: .25px;
        padding: 11px 23px;
        vertical-align: baseline;
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
        background: var(--btn-secundary);
        box-shadow: var(--btn-shadow);
        color: #fff;
        border: none;
        margin: 5px 0;
      }
    
      button:disabled{
        cursor: not-allowed;
        filter: grayscale(100%);
        opacity: 0.6;
      }
    `
  }
}
window.customElements.define('custom-button', MyButton)