import menu from './modules/menu';

import headerSlider from './modules/heroSlider'
import surfSlider from './modules/surfSlider'
import travelSlider from './modules/travelSlider'
import locationMap from './modules/locationMap'

import sleepSlider from './modules/sleepSlider'
import shopSlider from './modules/shopSlider'

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  menu();
  headerSlider();
  surfSlider();
  travelSlider();
  locationMap();

  sleepSlider();
  shopSlider();
});