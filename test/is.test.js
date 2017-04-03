var expect = require('chai').expect;

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
        'checks valid steam profile id': {
            fn: 'steam.profileUrl',
            checkThat: 'https://steamcommunity.com/profiles/1234567890123456',
            is: true
        },
        'checks invalid steam profile id': {
            fn: 'steam.profileUrl',
            checkThat: 'https://steamcommunity.com/profiles/abcdefgh123',
            is: false
        },
        'checks valid steam name': {
            fn: 'steam.customUrl',
            checkThat: 'https://steamcommunity.com/id/abcdefgh123',
            is: true
        },
        'checks invalid steam name': {
            fn: 'steam.customUrl',
            checkThat: 'https://steamcommunity.com/id/',
            is: false
        },
        'checks valid instagram name': {
            fn: 'instagram.name',
            checkThat: 'qwerty',
            is: true
        },
        'checks invalid instagram name': {
            fn: 'instagram.name',
            checkThat: 'qwert.y',
            is: false
        },
        'checks valid instagram url': {
            fn: 'instagram.url',
            checkThat: 'https://instagram.com/qwerty',
            is: true
        },
        'checks invalid instagram url': {
            fn: 'instagram.url',
            checkThat: 'https://instagram.com/qwert.y',
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
        'checks invalid spreadshirt url': {
            fn: 'spreadshirt.url',
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
        'checks invalid patreon url': {
            fn: 'patreon.url',
            checkThat: 'https://patreon.come/qwerty',
            is: false
        },
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
