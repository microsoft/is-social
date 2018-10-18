# is-social [![Build Status](https://img.shields.io/travis/mixer/is-social.svg?style=flat-square)](https://travis-ci.org/mixer/is-social) [![](https://img.shields.io/coveralls/MCProHosting/is-social.svg?style=flat-square)](https://coveralls.io/r/MCProHosting/is-social)

This provides utilities for validating and parsing social media links, with lovely BDD-style assertions.

```js
var is = require('is-social').is;

is.twitter.profile('https://twitter.com/ConnorPeet'); // => true
is.twitter.handle('@ConnorPeet'); // => true
// see more usage below
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
      * url (player.me url)
      * name (player.me profile name)
    * [steam](https://steamcommunity.com)
      * name (steam user name)
      * id (steam profile 64 bit ID)
      * accountName (steam profile URL)
      * accountId (steam ID URL)
    * [instagram](https://instagram.com)
      * name (instagram profile username)
      * url (instagram url)
    * [soundcloud](https://soundcloud.com)
      * name (soundcloud profile name)
      * url (soundcloud url)
    * [spreadshirt](https://spreadshirt.com)
      * name (spreadshirt profile name)
      * url (spreadshirt url)
    * [patreon](https://patreon.com)
      * name (patreon profile name)
      * url (patreon url)
    * [twitch](https://twitch.tv)
      * name (twitch channel name)
      * url (twitch url)
