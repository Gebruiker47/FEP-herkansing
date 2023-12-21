import { LitElement, html, css } from "lit";
import { styleMap} from 'lit/directives/style-map.js';

export class AddCoin extends LitElement {
  static get properties() {
    return {
      label: {type: String},
      items: {type: Array},
      hidden: {type: Boolean},
    }
  }
  constructor() {
    super();
    this.label = '';
    this.items = [];
    this.hidden = false;
  }

  render() {
    const display = {
      display: this.hidden ? 'block' : 'none',
    }

    return html `
      <div>
        <label>Coin</label>    
        <custom-text-input
          type="number"  
          id="coinID"
          placeholder="Enter a number"
        >
        </custom-text-input>
        
        <custom-button label="Add Coin" @custom-click="${this.addCoin}"></custom-button>
        <p style=${styleMap(display)}>${this.label}</p>
        
        ${this.getRenderTable()}
      </div>
    `
  }

  get _inputValue() {
    return this.renderRoot.querySelector("#coinID") ?? null
  }

  renderTable() {
    return html `
      <table>
        <tr>
          <th>Price</th>
        </tr>
          ${this.items.map((item) => html `
              <tr><td>${item.coin}</td></tr>
          `)}
        </table>
    `
  }

  getRenderTable() {
    this.hidden = true;
    if(this.items.length > 0) {
      return this.renderTable()
    } else {
      return html `<p class="error">No data available</p>`
    }
  }
  addCoin() {
    if(this._inputValue.value && this._inputValue.value != null) {
      this.items = [...this.items, {
        coin: this._inputValue.value
      }]
      this.hidden = false;
    } else if(this._inputValue.value == null) {
       this.label = "Vul iets in"
       this.hidden = true;
    } else if(!this._inputValue.value && this._inputValue.value != null) {
      this.label = "sdsds sdsd"
      this.hidden = true;
    }
    this._inputValue.value = ''
  }
  static get styles() {
    return css `
    :root {color: black;}
      div {
        background: light-gray;
        width: 70%;
        border-radius: 8px;
        border: 2px solid #333;
        overflow: hidden;
        padding: 10px;
      }
      p {color: #333;}

      table tr, th, td {border: 1px solid #333;}
      .error { color: red;}
    `
  }
}
window.customElements.define('add-coin', AddCoin)