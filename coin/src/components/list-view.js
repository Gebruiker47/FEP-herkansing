import { LitElement, html, css } from "lit";
// import {Router} from '../router/router.js'

export class ListView extends LitElement{

    // connectedCallback(){
    //     super.connectedCallback()
    // }

    render() {
        return html `
          <ul id="nav">
            <li><a href="/" class="active">Home</a></li>
            <li><a href="./addCoin">Add coin</a></li>
          </ul>
        `;
      }

    static get styles() {
      return css `
      
      a { color: #fff;}
      #nav {
        list-style-type: none;
        margin-bottom: 20px;;
        padding: 20px;
        overflow: hidden;
        background-color: #333333;
      }
      #nav li {
        float: left;
      }
          #nav li a {
            font-family: Google Sans,Roboto,Helvetica,Arial,sans-serif;
            font-weight: 500;
            font-size: 14px;
            letter-spacing: .25px;
            padding: 11px 23px;
            vertical-align: revert;
            border-radius: 4px;
            box-sizing: border-box;
            cursor: pointer;
            background: grey;
            color: #fff;
            border: none;
            margin: 10px;
            text-decoration: none;
          }

      `
    }
}

window.customElements.define('list-view', ListView);
