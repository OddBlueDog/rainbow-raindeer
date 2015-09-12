var setupParallaxBackground = require('./background-parallax'),
    _ = require('underscore'),
    $ = require('jquery')

var setup = function() {

    function lazyResizeEvents() {
        setupParallaxBackground()
    }

    var lazyResize = _.debounce(lazyResizeEvents, 300)
    $(window).resize(lazyResize)
}

module.exports = setup
