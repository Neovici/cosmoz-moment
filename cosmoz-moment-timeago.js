import { momentAware } from './cosmoz-moment';
import { html } from '@polymer/polymer/lib/utils/html-tag';
import { PolymerElement } from '@polymer/polymer/polymer-element';
const LOCALE = 'en';

/**
 * @polymer
 * @customElement
 * @extends PolymerElement
 * @appliesMixin momentAware
 */
class CosmozMomentTimeago extends momentAware(PolymerElement) {
	static get template() {
		return html`
<span>[[ timeago(date, locale, _kicker) ]]</span>
`;
	}

	static get is() {
		return 'cosmoz-moment-timeago';
	}

	static get properties() {
		return {
			date: {
				type: Date,
				value: () => new Date()
			},
			_intervalId: {
				type: Number,
				value: null
			},
			refreshInterval: {
				type: Number,
				value: 60000,
				observer(refreshInterval) {
					this.set('_intervalId', window.setInterval(() => {
						this._kicker += 1;
					}, refreshInterval));
				}
			},
			_kicker: {
				type: Number,
				value: 0
			},
			locale: {
				type: String,
				readOnly: true,
				value: () => LOCALE
			}
		};
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		window.clearInterval(this._intervalId);
	}
}
customElements.define(CosmozMomentTimeago.is, CosmozMomentTimeago);
