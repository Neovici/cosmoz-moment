# cosmoz-moment

[![Build Status](https://travis-ci.org/Neovici/cosmoz-moment.svg?branch=master)](https://travis-ci.org/Neovici/cosmoz-moment)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

`cosmoz-moment` is a Polymer component for centralized management of Moment.js with locale change distributed notification

## Example

<!---
```
<custom-element-demo>
	<template>
		<script src="../webcomponentsjs/webcomponents-lite.js"></script>
		<link rel="import" href="../neon-animation/web-animations.html">
		<link rel="import" href="../paper-dropdown-menu/paper-dropdown-menu.html">
		<link rel="import" href="../paper-listbox/paper-listbox.html">
		<link rel="import" href="../paper-item/paper-item.html">
		<link rel="import" href="cosmoz-moment.html">
		<link rel="import" href="cosmoz-moment-timeago.html">

		<next-code-block></next-code-block>
	</template>
</custom-element-demo>
```
-->
```html
<template is="dom-bind">
	<paper-dropdown-menu label="Locale" value="{{ locale }}">
		<paper-listbox class="dropdown-content" selected="0">
			<paper-item>en</paper-item>
			<paper-item>fr</paper-item>
			<paper-item>sv</paper-item>
		</paper-listbox>
	</paper-dropdown-menu>
	<cosmoz-moment locale="[[ locale ]]"></cosmoz-moment>
	<div class="message">
		<div><b>Page was loaded</b> <cosmoz-moment-timeago></cosmoz-moment-timeago><br/></div>
		<div><b>Polymer was created</b> <cosmoz-moment-timeago date="2015-05-27"></cosmoz-moment-timeago><br/></div>
	</div>
</template>
```

## Usage

### Install

`bower install --save Neovici/cosmoz-moment`

### Add the cosmoz-moment import
```html
<link rel="import" href="bower_components/cosmoz-moment/cosmoz-moment.html" />
<link rel="import" href="bower_components/cosmoz-moment/cosmoz-moment-timeago.html" />
```

### Use it inside your element

`cosmoz-moment` should only be used once per app to manage the locale and moment.js.

`cosmoz-moment-timeago` can be used within elements, or directly in the app, multiple times.

```html
<cosmoz-moment locale="[[locale]]"></cosmoz-moment>
<cosmoz-moment-timeago date="2017-06-15"></cosmoz-moment-timeago>
```

## Docs

See [docs](http://neovici.github.io/cosmoz-moment) for more details

## License

cosmoz-moment is created under the terms of the [Apache-2.0](https://github.com/Neovici/cosmoz-moment/blob/master/LICENSE) license.