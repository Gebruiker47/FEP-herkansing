import {LitElement, html, css} from 'lit-element';

class MySelectOption extends LitElement {

  static get properties() {
    return {
      value: {type: String},
      emptyValue: {type: String},
      options: {type: Array},
      selectedCoinItem: {type: String}
    }
  }
  
  constructor() {
    super()
    this.value = "";
    this.emptyValue = "";
    this.options = [];
    this.selectedCoinItem = '';
  }
  renderCoin() {
    return html `
      <div>
        <p>My Select Option</p>
        <select @change=${this._coinHandler} size=5>
          <option .value="${this.value}">${this.value || ''}</option>
          </select>
      </div>
    `
  }

  _coinHandler(e) {
    this.selectedCoinItem = e.target.value;
    this.dispatchEvent(new CustomEvent('change-coin', {
      detail:  {
        selectedItem : this.selectedCoinItem,
        value: this.value,
        emptyValue: this.emptyValue,
        options: this.options =[]
      }
    }));
  }

  static get styles() {
    return css `
      select { background: #333;}
      div{ background: #333; padding: 10px; margin: 10px; }
    `
  }

}

customElements.define('my-select-option', MySelectOption);