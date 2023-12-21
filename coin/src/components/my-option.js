import {LitElement, html, css} from 'lit-element';

class MyOption extends LitElement {
  static get properties() {
    return {
      items:{},
      optionValue : {} 
    }
  }
  constructor() {
    super()
    this.optionValue = "Test"
  }

  renderCoin() {
    return html `
    
      <my-select-option
        <option value="">Option 1</option>
        <option value="option 2">Option 2</option>
          @change-coin=${this.changeCoin}>
      </my-select-option>
    }`
  }

  changeCoin(e) {
    this._myInput.value = e.detail
  }
}

customElements.define('my-option', MyOption);