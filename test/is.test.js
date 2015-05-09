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
