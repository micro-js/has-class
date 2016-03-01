
# has-class

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Check whether or not an element has a class

## Installation

    $ npm install @f/has-class

## Usage

```js
var hasClass = require('@f/has-class')

if (hasClass('show', element)) {
  removeClass('show', element)
  addClass('hide', element)
}
```

## API

### hasClass(className, element)

- `className` - The class you want to see if `element` has
- `element` - The element you want to check for `className`

**Returns:** A Boolean value indicating whether or not `element` has `className` in its class list.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/has-class.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/has-class
[git-image]: https://img.shields.io/github/tag/micro-js/has-class.svg?style=flat-square
[git-url]: https://github.com/micro-js/has-class
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/has-class.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/has-class
