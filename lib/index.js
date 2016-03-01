/**
 * Expose hasClass
 */

module.exports = hasClass

/**
 * hasClass
 */

function hasClass (className, element) {
  if (element.classList) return element.classList.contains(className)

  var re = new RegExp('(?:^|\s)' + className + '(?:\s|$)', 'i')
  return re.test(element.className)
}
