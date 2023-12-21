import { LitElement, html, css } from "lit";

export class MyContainer extends LitElement {

  static get properties() {
    return {
      myItems: {type: Array},
      label: {type: String}
    }
  }

  constructor() {
    super();
    this.myItems = [
      {name: "Persoon 1", type: "2"},
      {name: "Persoon 2", type: "1"},
      {name: "Persoon 3", type: "1"}
    ];
    this.label = '';

    // [1, 'Foo', 'Connected' ],
    // [2, 'Bar', 'Connected' ],
    // [3, 'Xy', 'Connected' ],
    // [4, 'Ze', 'Not connected' ],
  }

  changeMyCoin(e) { this._inputValue.value = e.detail }
  renderSelectOption() {
    return html `
      <my-select-option @change-coin="${this.changeMyCoin}">
        <option value="">Kies een item</option>
        ${this.myItems.map((item) => html `
        <option value="${item.name}">${item.name} - ${item.type}</option>
        `)}
      </my-select-option>
    `
  }

  renderDropDown() {
    return html `
    <drop-down 
      title="Chose your language" 
      value="German" 
      closed="true" 
      options='["German","English","France","Espanol"]'>
    </drop-down>
    `
  }

  renderModal() {
    return html `
      <custom-modal>
        <span slot="heading">User Details</span>
        <p>Lorem ipsum...</p>
      </custom-modal>
      <button id="launch-dialog">Launch dialog</button>
    `
  }
  render() {
    return html `
      <div>
          <h1>List of coin</h1>
          Selected Language: ${this.label}
          <my-option></my-option>

          <custom-select @selectionChanged=${this.changeCoin}
            ${this.myItems.map((item) => html`
            options="${item.name}"
          `)}
        ></custom-select>
          
        <custom-select @change-coin="${this.changeMyCoin}">
          <option value="">Option 2</option>
          ${this.myItems.map((item) => html `
            <option value="${item.type}">${item.name}</option>
          `)}
        </custom-select>


          ${this.renderSelectOption()}
          ${this.renderDropDown()}
          ${this.renderModal()}
      </div>
    `
  }

  changeCoin(e) {
    this.label = e.detail
  }
}
window.customElements.define('my-container', MyContainer)

