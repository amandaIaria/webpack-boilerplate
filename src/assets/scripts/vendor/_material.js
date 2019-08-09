// import * as ponyfill       from '@material/dom/ponyfill';
// import {MDCComponent, MDCFoundation} from '@material/base';
// import {MDCSwitch}         from '@material/switch/index';
// import {MDCTabBar}         from '@material/tab-bar/index';
// import { MDCLineRipple } from '@material/line-ripple';

import { MDCRipple } from '@material/ripple';

const buttons = document.querySelectorAll('.dlu-ripple');
buttons.forEach(button => MDCRipple.attachTo(button));
