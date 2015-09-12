var $ = require('jquery'),
    _ = require('underscore')

function setup() {
    var height = $(window).height()

    $('#jsParallaxBackground').height(height + 300);

    if (navigator.userAgent.match(/Trident\/7\./) || /Edge\/12./i.test(navigator.userAgent) || (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)) { // if IE
        $('body').on("mousewheel", function() {
            // remove default behavior
            event.preventDefault();

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function() {
            window.location.hash = target;
        });
    });
}

module.exports = setup
