# cosmoz-moment

[![Build Status](https://travis-ci.org/Neovici/cosmoz-moment.svg?branch=master)](https://travis-ci.org/Neovici/cosmoz-moment)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

cosmoz-moment is a Polymer component for centralized management of Moment.js with locale change distributed notification

## Usage

### Install

`bower install --save Neovici/cosmoz-moment`

### Add the cosmoz-moment import
```html
<link rel="import" href="bower_components/cosmoz-moment/cosmoz-moment.html" />
```

### Use it inside your element
```html
<cosmoz-moment locale="[[locale]]"></cosmoz-moment>
```

A `cosmoz-moment` will fire `moment-locale-changed` event when `moment.locale` changed according to external `locale` property. You can catch this event by set event listener:
```html
	<cosmoz-moment locale="[[locale]]" on-moment-locale-changed="yourEventHandler"></cosmoz-moment>
```

## Docs

See [docs](http://neovici.github.io/cosmoz-moment) for more details

## License

cosmoz-moment is created under the terms of the [Apache-2.0](https://github.com/Neovici/cosmoz-moment/blob/master/LICENSE) license.