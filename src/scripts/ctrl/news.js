// news controller

function news() {

    // globals
    var TABLET_BREAKPOINT = Constants.TABLET_BREAKPOINT;
    var DESKTOP_BREAKPOINT = Constants.DESKTOP_BREAKPOINT;

    // responsive options
    var responsiveOptions = {};
    responsiveOptions[TABLET_BREAKPOINT] = {items: 2};
    responsiveOptions[DESKTOP_BREAKPOINT] = {disable: true};

    // slider options
    var options = {container: this, mouseDrag: true, items: 1, gutter: 50, responsive: responsiveOptions, navPosition: 'bottom', controls: false};

    // init slider
    tns(options);
}
