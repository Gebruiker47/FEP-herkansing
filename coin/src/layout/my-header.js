import { LitElement, css, html } from "lit";

export class MyHeader extends LitElement {

  static get properties() {
    return {
      title: {type: String, attirbute: 'my-title'},
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.title;
  }
  render() {
    return html `
      ${this.title
        ? html`
        <div>
          <h1>${this.title}</h1>
        </div>
      `
        : html``} 
      `
  }

  static get styles() {
    return css `
      h1 {
        width: 98%;
        padding: 10px;
        background-color: purple;
        color: white;
        text-align: center;
      }

    `
  }
}
window.customElements.define('my-header', MyHeader)