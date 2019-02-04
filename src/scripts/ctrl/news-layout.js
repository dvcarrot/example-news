// news controller

import 'tiny-slider/dist/tiny-slider.css'
import {tns} from 'tiny-slider/src/tiny-slider'
import {TABLET_BREAKPOINT, DESKTOP_BREAKPOINT} from '../settings/breakpoints'

function newsLayout() {

    // responsive options
    let responsiveOptions = {};
    responsiveOptions[TABLET_BREAKPOINT] = {items: 2};
    responsiveOptions[DESKTOP_BREAKPOINT] = {disable: true};

    // slider options
    const options = {container: this, mouseDrag: true, items: 1, gutter: 50, responsive: responsiveOptions, navPosition: 'bottom', controls: false};

    // init slider
    tns(options);
}

export default newsLayout
