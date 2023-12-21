import { LitElement, html,css } from 'lit';

class BaseCard extends LitElement {

  render() {
			return html `
				<div class="cardview">
					<slot></slot>
				</div>
			`
    }

    static get styles() {
			return css `

				.cardview {
					border: 1px solid #CCC;
					box-shadow: 1px 1px 1px #CCC;
					padding: 10px;
					margin-right: 0px;
					margin-bottom: 10px;
					box-sizing: border-box;
					display: inline-block;
					width: 48%;
					overflow: hidden;
					background: #fff;
				}
		
				@media only screen and (min-width: 0px) and (max-width: 376px) {
					.cardview {
							width: 100%;
					}
				}
				
				@media only screen and (min-width: 376px) and (max-width: 560px) {
					.cardview {
							width: 49%;
					}
				}
            
        `
    }
}

window.customElements.define('base-card', BaseCard)