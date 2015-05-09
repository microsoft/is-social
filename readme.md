# is-social [![Build Status](https://img.shields.io/travis/MCProHosting/is-social.svg?style=flat-square)](https://travis-ci.org/MCProHosting/is-social) [![](https://img.shields.io/coveralls/MCProHosting/is-social.svg?style=flat-square)](https://coveralls.io/r/MCProHosting/is-social)

This provides utilities for validating and parsing social media links, with lovely BDD-style assertions.

```js
var is = require('is-social').is;

is.twitter.profile.url('https://twitter.com/ConnorPeet'); // => true
// Some linters want to make sure that you actually have an operative
// expression. In that case, you can end with .url();
```

## API

  * `is` runs validations on the input. There are nested functions, which take the input as the first argument and an optional second `options` object.
    * [twitter](https://twitter.com)
      * profile (twitter profile URL)
      * handle (twitter handle). Takes an option `at`, which is `true` to require the "@" symbol, `false` to disallow it, and undefined to not care either way. Defaults to undefined.
    * [facebook](https://facebook.com)
      * profile (validates URLs for both profiles and pages)
      * name (validates names for both profiles and pages)
    * [youtube](https://youtube.com)
      * url (channel or user URL)
      * name (channel or user name)
    * [player](https://player.me)
      * url
      * name
