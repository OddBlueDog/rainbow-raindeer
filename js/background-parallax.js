var $ = require('jquery'),
    _ = require('underscore')

function setup() {
    var height = $(window).height()

    $('#jsParallaxBackground').height(height + 300);

    if(navigator.userAgent.match(/Trident\/7\./) || /Edge\/12./i.test(navigator.userAgent) || (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)) { // if IE
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault();

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }
}

module.exports = setup
