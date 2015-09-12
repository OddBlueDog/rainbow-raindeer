
var skrollr = require('skrollr'),
s = skrollr.init(),
setupResizeEvents =  require('./resize-events'),
setupParallaxBackground = require('./background-parallax')


setupResizeEvents()
setupParallaxBackground()
