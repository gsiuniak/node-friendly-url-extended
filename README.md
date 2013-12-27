# friendly url [![Build Status](https://travis-ci.org/tallesl/node-friendly-url.png)](https://travis-ci.org/tallesl/friendly-url) [![NPM version](https://badge.fury.io/js/friendly-url.png)](http://badge.fury.io/js/friendly-url)

transforms the given url portion to a user-friendly form

## usage

there's just a `doIt` function in the module, a synchronous function that receives a text and returns it transformed to a user-friendly one

    var friendlyUrl = require('friendly-url')

    var url = 'What does “use strict” do in JavaScript, and what is the reasoning behind it?'
    var friendly = friendlyUrl.doIt(url)
    console.log(friendly) // prints 'what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it'

## dependencies

none

## npm

    npm install friendly-url

[npmjs.org/package/friendly-url](http://npmjs.org/package/friendly-url)

## implementation

adapted from the one used at stackoverflow [[1]](http://stackoverflow.com/a/25486 "How does Stack Overflow generate its SEO-friendly URLs?") [[2]](http://meta.stackoverflow.com/a/7696 "Non US-ASCII characters dropped from full (profile) URL")

