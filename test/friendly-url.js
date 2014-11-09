var assert = require('assert')
  , friendlyUrl = require('../lib/friendly-url')

it('Résumé', function () {

  // arrange
  var title = 'Résumé'
    , expected = 'resume'

  // act
  var actual = friendlyUrl(title)

  // assert
  assert.strictEqual(actual, expected)

})

// stackoverflow.com/questions/134845/href-attribute-for-javascript-links-or-javascriptvoid0
it('Href attribute for JavaScript links: “#” or “javascript:void(0)”?', function () {

  // arrange
  var title = 'Href attribute for JavaScript links: “#” or “javascript:void(0)”?'
    , expected = 'href-attribute-for-javascript-links-or-javascriptvoid0'

  //act
  var actual = friendlyUrl(title)

  //assert
  assert.strictEqual(actual, expected)

})

// stackoverflow.com/questions/292357/what-are-the-differences-between-git-pull-and-git-fetch
it('What\'s the difference between \'git pull\' and \'git fetch\'?', function () {

  // arrange
  var title = 'What\'s the difference between \'git pull\' and \'git fetch\'?'
    , expected = 'whats-the-difference-between-git-pull-and-git-fetch'

  //act
  var actual = friendlyUrl(title)

  //assert
  assert.strictEqual(actual, expected)

})

// stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname
it('var functionName = function() {} vs function functionName() {}', function () {

  // arrange
  var title = 'var functionName = function() {} vs function functionName() {}'
    , expected = 'var-functionname-function-vs-function-functionname'

  //act
  var actual = friendlyUrl(title)

  //assert
  assert.strictEqual(actual, expected)

})

// stackoverflow.com/questions/359494/does-it-matter-which-equals-operator-vs-i-use-in-javascript-comparisons
it('Does it matter which equals operator (== vs ===) I use in JavaScript comparisons?', function () {

  // arrange
  var title = 'Does it matter which equals operator (== vs ===) I use in JavaScript comparisons?'
    , expected = 'does-it-matter-which-equals-operator-vs-i-use-in-javascript-comparisons'

  //act
  var actual = friendlyUrl(title)

  //assert
  assert.strictEqual(actual, expected)

})

// stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
it('What does “use strict” do in JavaScript, and what is the reasoning behind it?', function () {

  // arrange
  var title = 'What does “use strict” do in JavaScript, and what is the reasoning behind it?'
    , expected = 'what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it'

  //act
  var actual = friendlyUrl(title)

  //assert
  assert.strictEqual(actual, expected)

})

// stackoverflow.com/questions/1642028/what-is-the-name-of-the-operator
it('What is the name of this operator: “-->”?', function () {

  // arrange
  var title = 'What is the name of this operator: “-->”?'
    , expected = 'what-is-the-name-of-this-operator'

  //act
  var actual = friendlyUrl(title)

  //assert
  assert.strictEqual(actual, expected)

})

// stackoverflow.com/questions/6430448/why-doesnt-gcc-optimize-aaaaaa-to-aaaaaa
it('Why doesn\'t GCC optimize a*a*a*a*a*a to (a*a*a)*(a*a*a)?', function () {

  // arrange
  var title = 'Why doesn\'t GCC optimize a*a*a*a*a*a to (a*a*a)*(a*a*a)?'
    , expected = 'why-doesnt-gcc-optimize-aaaaaa-to-aaaaaa'

  //act
  var actual = friendlyUrl(title)

  //assert
  assert.strictEqual(actual, expected)

})

// stackoverflow.com/questions/6841333/why-is-subtracting-these-two-times-in-1927-giving-a-strange-result
it('Why is subtracting these two times (in 1927) giving a strange result?', function () {

  // arrange
  var title = 'Why is subtracting these two times (in 1927) giving a strange result?'
    , expected = 'why-is-subtracting-these-two-times-in-1927-giving-a-strange-result'

  //act
  var actual = friendlyUrl(title)

  //assert
  assert.strictEqual(actual, expected)

})

