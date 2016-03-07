# :grinning: friendly-url

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][version-img]][version]

A friendly url function made and used by Stack Exchange on their various websites ([1]&nbsp;[2]).

[build]:               https://travis-ci.org/tallesl/node-friendly-url
[build-img]:           https://travis-ci.org/tallesl/node-friendly-url.svg
[coverage]:            https://coveralls.io/r/tallesl/node-friendly-url?branch=master
[coverage-img]:        https://coveralls.io/repos/tallesl/node-friendly-url/badge.svg?branch=master
[dependencies]:        https://david-dm.org/tallesl/node-friendly-url
[dependencies-img]:    https://david-dm.org/tallesl/node-friendly-url.svg
[devdependencies]:     https://david-dm.org/tallesl/node-friendly-url#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/node-friendly-url/dev-status.svg
[version]:             https://www.npmjs.com/package/friendly-url
[version-img]:         https://badge.fury.io/js/friendly-url.svg
[1]:                   http://stackoverflow.com/a/25486
[2]:                  http://meta.stackoverflow.com/a/7696

## Usage

```js
$ npm install friendly-url
(...)
$ node
> var friendlyUrl = require('friendly-url')
undefined
friendlyUrl('What does “use strict” do in JavaScript, and what is the reasoning behind it?')
'what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it'
```

