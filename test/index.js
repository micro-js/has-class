/**
 * Imports
 */

var hasClass = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(hasClass('test', $('<div class="test"></div>')))
  t.notOk(hasClass('other', $('<div class="test"></div>')))

  t.end()
})

/**
 * Helpers
 */

function $ (html) {
  document.body.innerHTML = html
  return document.body.firstChild
}
