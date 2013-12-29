var friendlyUrl = require('./friendly-url')

exports.doIt = function (test) {
  // stackoverflow's actual questions titles and urls
  test.equal(
    friendlyUrl.doIt('What is the name of this operator: “-->”?'),
    'what-is-the-name-of-this-operator'
  )
  test.equal(
    friendlyUrl.doIt('What\'s the difference between \'git pull\' and \'git fetch\'?'),
    'whats-the-difference-between-git-pull-and-git-fetch'
  )
  test.equal(
    friendlyUrl.doIt('Why is subtracting these two times (in 1927) giving a strange result?'),
    'why-is-subtracting-these-two-times-in-1927-giving-a-strange-result'
  )
  test.equal(
    friendlyUrl.doIt('What does “use strict” do in JavaScript, and what is the reasoning behind it?'),
    'what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it'
  )
  test.equal(
    friendlyUrl.doIt('Does it matter which equals operator (== vs ===) I use in JavaScript comparisons?'),
    'does-it-matter-which-equals-operator-vs-i-use-in-javascript-comparisons'
  )
  test.equal(
    friendlyUrl.doIt('Href attribute for JavaScript links: “#” or “javascript:void(0)”?'),
    'href-attribute-for-javascript-links-or-javascriptvoid0'
  )
  test.equal(
    friendlyUrl.doIt('var functionName = function() {} vs function functionName() {}'),
    'var-functionname-function-vs-function-functionname'
  )
  test.equal(
    friendlyUrl.doIt('Why doesn\'t GCC optimize a*a*a*a*a*a to (a*a*a)*(a*a*a)?'),
    'why-doesnt-gcc-optimize-aaaaaa-to-aaaaaa'
  )
  test.done()
}

