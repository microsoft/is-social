var util = require('./util');

/**
 * Twitter tests.
 */
(function () {
    var handle = '\\w{1,15}';
    def({
        fn: 'twitter.handle',
        re: new RegExp('^@?' + handle + '$'),
        after: function (data, options) {
            if (options.at == null) {
                return true;
            }

            return options.at === (data[0] === '@');
        }
    });
    def({
        fn: 'twitter.profile',
        re: url('(mobile\\.)?twitter\\.com\\/' + handle),
        after: function(data) {
          // avoid special twitter urls that aren't profiles
          if(data.endsWith('/search')) {
            return false;
          }

          return true;
        }
    });
})();


/*
 * Player.me tests.
 */
(function () {
    var name = '[\\w-]{3,100}';
    def({
        fn: 'player.name',
        re: new RegExp('^' + name + '$')
    });
    def({
        fn: 'player.url',
        re: url('player\\.me\\/' + name)
    });
})();


/**
 * Facebook tests.
 */
(function () {
    var identifier = '[a-z0-9\\.-]{5,50}';
    def({
        fn: 'facebook.name',
        re: new RegExp('^' + identifier + '$', 'i')
    });
    def({
        fn: 'facebook.profile',
        re: url('facebook\\.com\\/(pages\\/)?' + identifier)
    });
    def({
        fn: 'facebook.gaming',
        re: url('(facebook\\.com\\/(gaming\\/)|fb\\.gg\\/)' + identifier)
    });
})();


/**
 * Youtube tests.
 */
(function () {
    var identifier = '[a-z0-9\\_-]{1,100}';
    def({
        fn: 'youtube.name',
        re: new RegExp('^' + identifier + '$', 'i')
    });
    def({
        fn: 'youtube.url',
        re: url('youtube\\.com\\/.+' + identifier)
    });
})();

/**
 * Steam tests.
 */
(function () {
    var name = '[\\w-]{2,32}';
    var id = '[0-9]{16,18}';

    def({
        fn: 'steam.name',
        re: new RegExp('^' + name + '$', 'i')
    });
    def({
        fn: 'steam.id',
        re: new RegExp('^' + id + '$', 'i')
    });
    def({
        fn: 'steam.profileUrl',
        re: url('steamcommunity\\.com\\/profiles\\/' + id)
    });
    def({
        fn: 'steam.customUrl',
        re: url('steamcommunity\\.com\\/id\\/' + name)
    });
})();

/**
 * Instagram tests.
 */
(function () {
    var identifier = '[\\w._-]{1,100}';
    def({
        fn: 'instagram.name',
        re: new RegExp('^' + identifier + '$', 'i')
    });
    def({
        fn: 'instagram.url',
        re: url('instagram\\.com\\/' + identifier)
    });
})();

/**
 * SoundCloud tests.
 */
(function () {
    var identifier = '[\\w-]{3,100}';
    def({
        fn: 'soundcloud.name',
        re: new RegExp('^' + identifier + '$', 'i')
    });
    def({
        fn: 'soundcloud.url',
        re: url('soundcloud\\.com\\/' + identifier)
    });
})();

/**
 * Spreadshirt tests.
 */
(function () {
    var identifier = '[\\w-]{3,100}';
    def({
        fn: 'spreadshirt.name',
        re: new RegExp('^' + identifier + '$', 'i')
    });
    def({
        fn: 'spreadshirt.url',
        re: url('spreadshirt\\.com\\/user\\/' + identifier)
    });
    def({
        fn: 'spreadshirt.shop',
        re: url('shop\\.spreadshirt\\.com\\/' + identifier)
    });
})();

/**
 * Patreon tests.
 */
(function () {
    var identifier = '[\\w-]{1,100}';
    def({
        fn: 'patreon.name',
        re: new RegExp('^' + identifier + '$', 'i')
    });
    def({
        fn: 'patreon.url',
        re: url('patreon\\.com\\/' + identifier)
    });
})();

/**
 * Twitch tests.
 */
(function () {
    var name = '[a-z0-9]\\w{3,24}';
    def({
        fn: 'twitch.name',
        re: new RegExp('^' + name + '$', 'i')
    });
    def({
        fn: 'twitch.url',
        re: url('twitch\\.tv\\/' + name)
    });
})();

/**
 * Medium tests.
 */
(function () {
    var handle = '[\\w.]{1,30}';
    def({
        fn: 'medium.handle',
        re: new RegExp('^@?' + handle + '$'),
        after: function (data, options) {
            if (options.at == null) {
                return true;
            }

            return options.at === (data[0] === '@');
        }
    });

    def({
        fn: 'medium.profile',
        re: url('medium\\.com\\/@' + handle)
    });
})();

/**
 * Creates a regex for a url.
 * @param  {String} subpattern
 * @return {RegExp}
 */
function url (subpattern) {
    return new RegExp('^https?:\\/\\/(www\\.)?' + subpattern + '/?(\\?.*)?$', 'i');
}

/**
 * Defines an exported validator using a set of options.
 * @param  {Object} options
 * @param  {String} options.fn
 *         The path in dot notation of the exported function.
 * @param  {RegExp} [options.re]
 *         The regular expression match.
 * @param  {Function} [options.after]
 *         An "after" function that runs when the regex check
 *         passes. Should return true/false. Takes parameters
 *         (data, options)
 */
function def (options) {
    var fn = function (data, opts) {
        if (!util.isString(data)) {
            return false;
        }

        if (options.re) {
            options.re.lastIndex = 0;
            if (!options.re.test(data)) {
                return false;
            }
        }

        return options.after ? options.after(data, opts || {}) : true;
    };

    var path = options.fn.split('.');
    var target = module.exports;
    while (path.length > 1) {
        var next = path.shift();
        target = (target[next] = target[next] || {});
    }

    target[path[0]] = fn;
}
