import { LitElement, html, css } from "lit";

export class AddCoin2 extends LitElement {
  static get properties() {
    return {
      coins: { type: Array },
      label: { type: String },
      error : { type: String }
    }
  }

  constructor() {
    super();
    this.coins = [];
  }

  renderInput() {
    return html `
      <custom-text-input 
        type="text"
        placeholder="Enter coin"
        id="coin-input"
      >
      </custom-text-input>

      <custom-text-input 
        type="number"
        placeholder="Enter amount"
        id="amount-input"
      >
      </custom-text-input>
    `
  }

  renderButton() {
    return html `
      <custom-button 
        label="+" 
        @custom-click=${this.addCoin}
      ></custom-button>
    `
  }

  get _coinInput() {
    return this.renderRoot.querySelector("#coin-input") ?? null
  }
  
  get _amountInput() {
    return this.renderRoot.querySelector("#amount-input")
  }

  render() {
    return html `
      ${this.renderInput()}
      ${this.renderButton()}
      ${this.renderCoinList()}
    `
  }

  renderCoinList() {
    return html `
      <table>
        <tr>
          <th>Coin</th>
          <th>Amaount</th>
        </tr>
      ${this.coins.map(coin => html`
      <tr>
        <td>${coin.myCoin}</td>
        <td>${coin.myAmount}</td>
      </tr>
      `)}
      </table>
    `
  }

  addCoin() {
    if(this._coinInput.value && this._amountInput.value) {
      this.coins = [...this.coins, { 
        myCoin: this._coinInput.value,
        myAmount: this._amountInput.value
      }];
    }
    this._coinInput.value = '';
    this._amountInput.value = '';
  }
}
window.customElements.define('add-coin2', AddCoin2)