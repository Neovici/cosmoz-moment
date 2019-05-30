/**
@license
Copyright (c) 2017 Neovici AB. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
		http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { PolymerElement } from '../@polymer/polymer/polymer-element.js';

import moment from 'moment';
/*global Cosmoz, moment*/

window.Cosmoz = window.Cosmoz || {};

const LOCAL_SHARED_MOMENT = moment(),
	MOMENT_ELEMENTS = [];

/** @polymerBehavior */
Cosmoz.MomentBehavior = {
	properties: {
		locale: {
			type: String
		},
		moment: {
			type: Object,
			value: LOCAL_SHARED_MOMENT
		}
	},
	attached() {
		MOMENT_ELEMENTS.push(this);
	},
	detached() {
		const i = MOMENT_ELEMENTS.indexOf(this);
		if (i >= 0) {
			MOMENT_ELEMENTS.splice(i, 1);
		}
	},
	_ensureDate(date) {
		let dateDate;
		if (date === undefined) {
			return;
		}
		if (date instanceof Date) {
			return date;
		}
		try {
			dateDate = new Date(date);
		} catch (err) {
			return;
		}
		return dateDate;
	},
	timeago(rawDate, locale) {
		const date = this._ensureDate(rawDate);
		if (!date) {
			return '';
		}
		return moment(date).locale(locale).fromNow();
	},
};

/**
 * `<cosmoz-moment>` is a Polymer component for centralized management of Moment.js with locale change distributed notification which very easy to use.
 *
 * `<cosmoz-moment locale="[[locale]]"></cosmoz-moment>`
 * @extends PolymerElement
 * @group Cosmoz Elements
 * @polymer
 * @customElement
 * @demo demo/index.html
 * @homepage github.com/Neovici/cosmoz-moment
 */
class CosmozMoment extends PolymerElement {

	static get is() {
		return 'cosmoz-moment';
	}

	static get observers() {
		return [
			'localeChanged(locale)'
		];
	}

	static get properties() {
		return {
			/**
			* Locale abbreviation for Moment.js locale
			*/
			locale: {
				type: String
			}
		};
	}

	localeChanged(newLocale) {
		let locale = newLocale;
		moment.locale(locale);
		MOMENT_ELEMENTS.forEach(element => element._setLocale(locale));
	}
}
customElements.define(CosmozMoment.is, CosmozMoment);
