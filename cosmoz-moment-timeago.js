import './cosmoz-moment.js';
import { html } from '../@polymer/polymer/lib/utils/html-tag.js';
import { mixinBehaviors } from '../@polymer/polymer/lib/legacy/class.js';
import { PolymerElement } from '../@polymer/polymer/polymer-element.js';
/*global Cosmoz*/
const LOCALE = 'en';

class CosmozMomentTimeago extends mixinBehaviors([
	Cosmoz.MomentBehavior
], PolymerElement) {
	static get template() {
		return html`
<span>[[ timeago(date, locale, _kicker) ]]</span>
`;
	}

	static get is() {
		return 'cosmoz-moment-timeago';
	}

	static get observers() {
		return [
			'refreshIntervalChanged(refreshInterval)'
		];
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
				value: 60000
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

	refreshIntervalChanged(refreshInterval) {
		this.set('_intervalId', window.setInterval(function () {
			this._kicker += 1;
		}.bind(this), refreshInterval));
	}
	timeago(rawDate, locale) {
		return Cosmoz.MomentBehavior.timeago(rawDate, locale);
	}
}
customElements.define(CosmozMomentTimeago.is, CosmozMomentTimeago);
