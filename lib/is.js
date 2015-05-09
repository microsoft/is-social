var util = require('./util');

/**
 * Twitter tests.
 */
(function () {
    var handle = '\\w{1,15}';
    define({
        fn: 'twitter.handle',
        re: new RegExp('^@?' + handle + '$'),
        after: function (data, options) {
            if (options.at == null) {
                return true;
            }

            // js, y u no have xor ;(
            return (options.at && data[0] === '@') || (!options.at && data[0] !== '@');
        }
    });
    define({
        fn: 'twitter.profile',
        re: url('twitter\\.com\\/' + handle)
    });
})();


/*
 * Player.me tests.
 */
(function () {
    var name = '[\\w-]{3,100}';
    console.log(url('player\\.me\\/' + name));
    define({
        fn: 'player.name',
        re: new RegExp('^' + name + '$')
    });
    define({
        fn: 'player.url',
        re: url('player\\.me\\/' + name)
    });
})();


/**
 * Facebook tests.
 */
(function () {
    var identifier = '[a-z0-9\\.]{5,50}';
    define({
        fn: 'facebook.name',
        re: new RegExp('^' + identifier + '$', 'i')
    });
    define({
        fn: 'facebook.profile',
        re: url('facebook\\.com\\/(pages\\/)?' + identifier)
    });
})();


/**
 * Youtube tests.
 */
(function () {
    var identifier = '[a-z0-9]{1,100}';
    define({
        fn: 'youtube.name',
        re: new RegExp('^' + identifier + '$', 'i')
    });
    define({
        fn: 'youtube.url',
        re: url('youtube\\.com\\/(channel\\/|user\\/)' + identifier)
    });
})();


/**
 * Creates a regex for a url.
 * @param  {String} subpattern
 * @return {RegExp}
 */
function url (subpattern) {
    return new RegExp('^https?:\\/\\/(www\\.)?' + subpattern + '(\\?.*)?$', 'i');
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
function define (options) {
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
    var target = exports;
    while (path.length > 1) {
        var next = path.shift();
        target = (target[next] = target[next] || {});
    }

    target[path[0]] = fn;
}
