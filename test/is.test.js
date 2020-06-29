var expect = require('chai').expect;

/* eslint-env mocha */

describe('`is`', function () {
    var is = require('../').is;
    var test = {
        'rejects non-strings': {
            fn: 'twitter.handle',
            checkThat: undefined,
            is: false
        },
        'checks valid twitter handle without @ sign': {
            fn: 'twitter.handle',
            checkThat: 'ConnorPeet',
            is: true
        },
        'checks valid twitter handle with @ sign': {
            fn: 'twitter.handle',
            checkThat: '@ConnorPeet',
            is: true
        },
        'checks invalid twitter handle': {
            fn: 'twitter.handle',
            checkThat: 'adsf@adf',
            is: false
        },
        'checks valid twitter handle with @ sign when disallowed': {
            fn: 'twitter.handle',
            checkThat: '@ConnorPeet',
            using: { at: false },
            is: false
        },
        'checks valid twitter handle without @ sign when disallowed': {
            fn: 'twitter.handle',
            checkThat: 'ConnorPeet',
            using: { at: false },
            is: true
        },
        'checks valid twitter handle with @ sign when required': {
            fn: 'twitter.handle',
            checkThat: '@ConnorPeet',
            using: { at: true },
            is: true
        },
        'checks valid twitter handle without @ sign when required': {
            fn: 'twitter.handle',
            checkThat: 'ConnorPeet',
            using: { at: true },
            is: false
        },
        'rejects twitter search url as handle': {
            fn: 'twitter.handle',
            checkThat: 'https://twitter.com/search',
            using: { at: false },
            is: false
        },
        'accepts mobile twitter url as profile': {
            fn: 'twitter.profile',
            checkThat: 'https://mobile.twitter.com/ConnorPeet',
            is: true
        },
        'rejects twitter search url as profile': {
            fn: 'twitter.profile',
            checkThat: 'https://twitter.com/search',
            is: false
        },
        'checks valid facebook name': {
            fn: 'facebook.name',
            checkThat: 'connor.peet',
            is: true
        },
        'checks invalid facebook name': {
            fn: 'facebook.name',
            checkThat: 'connor_peet',
            is: false
        },
        'checks valid facebook url': {
            fn: 'facebook.profile',
            checkThat: 'https://facebook.com/connor.peet',
            is: true
        },
        'checks valid facebook gaming url': {
            fn: 'facebook.gaming',
            checkThat: 'https://facebook.com/gaming/ConnorPeet',
            is: true
        },
        'checks valid fb.gg url': {
            fn: 'facebook.gaming',
            checkThat: 'https://fb.gg/ConnorPeet',
            is: true
        },
        'checks valid facebook gaming url with trailing slash': {
            fn: 'facebook.gaming',
            checkThat: 'https://facebook.com/gaming/ConnorPeet/',
            is: true
        },
        'checks valid fb.gg url with trailing slash': {
            fn: 'facebook.gaming',
            checkThat: 'https://fb.gg/ConnorPeet/',
            is: true
        },
        'checks valid facebook url with dashes': {
            fn: 'facebook.profile',
            checkThat: 'https://facebook.com/connor-peet-association',
            is: true
        },
        'checks valid facebook url with trailing slash': {
            fn: 'facebook.profile',
            checkThat: 'https://facebook.com/connor.peet/',
            is: true
        },
        'checks invalid facebook url': {
            fn: 'facebook.profile',
            checkThat: 'https://facebook.com/connor_peet',
            is: false
        },
        'checks valid player name': {
            fn: 'player.name',
            checkThat: 'connor',
            is: true
        },
        'checks invalid player name': {
            fn: 'player.name',
            checkThat: 'c',
            is: false
        },
        'checks valid player url': {
            fn: 'player.url',
            checkThat: 'https://player.me/connor',
            is: true
        },
        'checks valid player url with underscore': {
            fn: 'player.url',
            checkThat: 'https://player.me/connor_peet',
            is: true
        },
        'checks valid player url with trailing slash': {
            fn: 'player.url',
            checkThat: 'https://player.me/connor/',
            is: true
        },
        'checks invalid player url': {
            fn: 'player.url',
            checkThat: 'https://player.me/c',
            is: false
        },
        'checks valid youtube name': {
            fn: 'youtube.name',
            checkThat: 'qwerty',
            is: true
        },
        'checks valid youtube name with punctuation': {
            fn: 'youtube.name',
            checkThat: 'q-w-e-r-t-y_',
            is: true
        },
        'checks invalid youtube name': {
            fn: 'youtube.name',
            checkThat: 'qwert.y',
            is: false
        },
        'checks valid youtube url': {
            fn: 'youtube.url',
            checkThat: 'https://youtube.com/user/qwerty',
            is: true
        },
        'checks valid youtube url with trailing slash': {
            fn: 'youtube.url',
            checkThat: 'https://youtube.com/user/qwerty/',
            is: true
        },
        'checks valid youtube short url': {
            fn: 'youtube.url',
            checkThat: 'https://youtube.com/u/qwerty/',
            is: true
        },
        'checks valid youtube short url with trailing slash': {
            fn: 'youtube.url',
            checkThat: 'https://youtube.com/u/qwerty/',
            is: true
        },
        'checks valid youtube channel short url': {
            fn: 'youtube.url',
            checkThat: 'https://youtube.com/c/qwerty/',
            is: true
        },
        'checks valid youtube channel short url with trailing slash': {
            fn: 'youtube.url',
            checkThat: 'https://youtube.com/c/qwerty/',
            is: true
        },
        'checks invalid youtube url': {
            fn: 'youtube.url',
            checkThat: 'https://youtube.come/qwerty',
            is: false
        },
        'checks valid steam profile name': {
            fn: 'steam.name',
            checkThat: 'abcdefgh123',
            is: true
        },
        'checks invalid steam profile name': {
            fn: 'steam.name',
            checkThat: ' ',
            is: false
        },
        'checks valid steam profile id': {
            fn: 'steam.id',
            checkThat: '1234567890123456',
            is: true
        },
        'checks invalid steam profile id': {
            fn: 'steam.id',
            checkThat: 'x',
            is: false
        },
        'checks valid steam profile url': {
            fn: 'steam.profileUrl',
            checkThat: 'http://steamcommunity.com/profiles/12345678901234567',
            is: true
        },
        'checks valid steam profile id with trailing slash': {
            fn: 'steam.profileUrl',
            checkThat: 'http://steamcommunity.com/profiles/12345678901234567/',
            is: true
        },
        'checks invalid steam profile url': {
            fn: 'steam.profileUrl',
            checkThat: 'http://steamcommunity.com/profiles/abcdefgh123',
            is: false
        },
        'checks valid steam name': {
            fn: 'steam.customUrl',
            checkThat: 'http://steamcommunity.com/id/abcdefgh123',
            is: true
        },
        'checks valid steam name with trailing slash': {
            fn: 'steam.customUrl',
            checkThat: 'http://steamcommunity.com/id/abcdefgh123/',
            is: true
        },
        'checks invalid steam name': {
            fn: 'steam.customUrl',
            checkThat: 'http://steamcommunity.com/id/',
            is: false
        },
        'checks valid instagram name': {
            fn: 'instagram.name',
            checkThat: 'qwerty',
            is: true
        },
        'checks valid instagram name with punctuation': {
            fn: 'instagram.name',
            checkThat: 'q-w-e-r-t.y_',
            is: true
        },
        'checks invalid instagram name': {
            fn: 'instagram.name',
            checkThat: 'qwert.y~',
            is: false
        },
        'checks valid instagram url': {
            fn: 'instagram.url',
            checkThat: 'https://instagram.com/qwerty',
            is: true
        },
        'checks valid instagram url with punctuation': {
            fn: 'instagram.url',
            checkThat: 'https://instagram.com/qwert.y_',
            is: true
        },
        'checks valid instagram url with trailing slash': {
            fn: 'instagram.url',
            checkThat: 'https://instagram.com/qwerty/',
            is: true
        },
        'checks invalid instagram url': {
            fn: 'instagram.url',
            checkThat: 'https://instagram.co/qwerty',
            is: false
        },
        'checks valid soundcloud name': {
            fn: 'soundcloud.name',
            checkThat: 'qwerty',
            is: true
        },
        'checks invalid soundcloud name': {
            fn: 'soundcloud.name',
            checkThat: 'qwert.y',
            is: false
        },
        'checks valid soundcloud url': {
            fn: 'soundcloud.url',
            checkThat: 'https://soundcloud.com/qwerty',
            is: true
        },
        'checks valid soundcloud url with trailing slash': {
            fn: 'soundcloud.url',
            checkThat: 'https://soundcloud.com/qwerty/',
            is: true
        },
        'checks invalid soundcloud url': {
            fn: 'soundcloud.url',
            checkThat: 'https://soundcloud.come/qwerty',
            is: false
        },
        'checks valid spreadshirt name': {
            fn: 'spreadshirt.name',
            checkThat: 'qwerty',
            is: true
        },
        'checks invalid spreadshirt name': {
            fn: 'spreadshirt.name',
            checkThat: 'qwert.y',
            is: false
        },
        'checks valid spreadshirt url': {
            fn: 'spreadshirt.url',
            checkThat: 'https://spreadshirt.com/user/qwerty',
            is: true
        },
        'checks valid spreadshirt shop url': {
            fn: 'spreadshirt.shop',
            checkThat: 'https://shop.spreadshirt.com/qwerty',
            is: true
        },
        'checks valid spreadshirt url with trailing slash': {
            fn: 'spreadshirt.url',
            checkThat: 'https://spreadshirt.com/user/qwerty/',
            is: true
        },
        'checks invalid spreadshirt url': {
            fn: 'spreadshirt.url',
            checkThat: 'https://spreadshirt.com/qwerty',
            is: false
        },
        'checks invalid spreadshirt shop url': {
            fn: 'spreadshirt.shop',
            checkThat: 'https://spreadshirt.com/qwerty',
            is: false
        },
        'checks valid patreon name': {
            fn: 'patreon.name',
            checkThat: 'qwerty',
            is: true
        },
        'checks invalid patreon name': {
            fn: 'patreon.name',
            checkThat: 'qwert.y',
            is: false
        },
        'checks valid patreon url': {
            fn: 'patreon.url',
            checkThat: 'https://patreon.com/qwerty',
            is: true
        },
        'checks valid patreon url with trailing slash': {
            fn: 'patreon.url',
            checkThat: 'https://patreon.com/qwerty/',
            is: true
        },
        'checks invalid patreon url': {
            fn: 'patreon.url',
            checkThat: 'https://patreon.come/qwerty',
            is: false
        },
        'checks valid twitch name': {
            fn: 'twitch.name',
            checkThat: 'qwerty',
            is: true
        },
        'checks invalid twitch name': {
            fn: 'twitch.name',
            checkThat: 'qwert.y',
            is: false
        },
        'checks valid twitch url': {
            fn: 'twitch.url',
            checkThat: 'https://twitch.tv/qwerty',
            is: true
        },
        'checks valid twitch url with trailing slash': {
            fn: 'twitch.url',
            checkThat: 'https://twitch.tv/qwerty/',
            is: true
        },
        'checks invalid twitch url': {
            fn: 'twitch.url',
            checkThat: 'https://twitch.ttv/qwerty',
            is: false
        },
        'checks valid Medium handle': {
            fn: 'medium.handle',
            checkThat: '@davidebest',
            is: true
        },
        'checks valid (without @) Medium handle': {
            fn: 'medium.handle',
            checkThat: 'davidebest',
            is: true
        },
        'checks valid (without @, expecting @) Medium handle': {
            fn: 'medium.handle',
            checkThat: 'davidebest',
            is: false,
            using: { at: true}
        },
        'checks valid (with @, expecting no @) Medium handle': {
            fn: 'medium.handle',
            checkThat: '@davidebest',
            is: false,
            using: { at: false}
        },
        'checks invalid (too long) Medium handle': {
            fn: 'medium.handle',
            checkThat: 'abcdefghijklmnopqrstuvwxyz._.hi',
            is: false
        },
        'checks invalid (bad chars) Medium handle': {
            fn: 'medium.handle',
            checkThat: '#;drop@@tables;%',
            is: false
        },
        'checks invalid (non ascii) Medium handle': {
            fn: 'medium.handle',
            checkThat: 'ßÍll_gÅtes',
            is: false
        },
        'checks invalid (spaces) Medium handle': {
            fn: 'medium.handle',
            checkThat: '@bill gates',
            is: false
        },
        'checks invalid (empty with @) Medium handle': {
            fn: 'medium.handle',
            checkThat: '@',
            is: false
        },
        'checks invalid (empty without @) Medium handle': {
            fn: 'medium.handle',
            checkThat: '',
            is: false
        },
        'checks valid Medium url': {
            fn: 'medium.profile',
            checkThat: 'https://medium.com/@cdixon',
            is: true
        },
        'checks invalid (no @) Medium url': {
            fn: 'medium.profile',
            checkThat: 'https://medium.com/cdixon',
            is: false
        },
        'checks invalid (bad handle) Medium url': {
            fn: 'medium.profile',
            checkThat: 'https://medium.com/@ßÍll_gÅtes',
            is: false
        },
        'checks invalid (empty handle) Medium url': {
            fn: 'medium.profile',
            checkThat: 'https://medium.com/',
            is: false
        },
        'checks invalid (empty handle with @) Medium url': {
            fn: 'medium.profile',
            checkThat: 'https://medium.com/@',
            is: false
        },
        'checks invalid (misspelled url) Medium url': {
            fn: 'medium.profile',
            checkThat: 'https://meddium.com/@cdixon',
            is: false
        }
    };

    Object.keys(test).forEach(function (t) {
        it(t, function () {
            expect(reach(is, test[t].fn)(test[t].checkThat, test[t].using)).to.equal(test[t].is);
        });
    });
});

function reach (obj, path) {
    path = path.split('.');
    while (path.length) {
        obj = obj[path.shift()];
    }

    return obj;
}
