import { LitElement, html } from "lit";

class CustomSelect extends LitElement {
    static get properties()  {
        return {
            options: { type: Array },
            selectedCoinItem: { type: String },
            // value: {type: String}
        };
    }
    constructor() {
        super();
        this.options = [];
        // this.value = ''
    }

   
    render() {
      return html`
        <select @change="${this._coinHandler}">
          ${this.options.map((option) => html`
              <option .value="${option}">
                ${option}
              </option>
          `)}
        </select>
      `;
    }
    
    _coinHandler(e) {
      this.selectedCoinItem = e.target.value;
      this.dispatchEvent(new CustomEvent('change-coin', {
        detail:  {
          selectedItem : this.selectedCoinItem,
          // value: this.value,
          // options: this.options
        }
      }));
    }
}

customElements.define('custom-select', CustomSelect);