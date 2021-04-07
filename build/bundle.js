/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/assets/sliderNav.js":
/*!************************************!*\
  !*** ./src/js/assets/sliderNav.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sliderNavInit; });\nfunction sliderNavInit(slider, _ref) {\n  var prev = _ref.prev,\n      next = _ref.next;\n  $(prev).on('click', function (e) {\n    e.preventDefault();\n    $(slider).slick('slickPrev');\n  });\n  $(next).on('click', function (e) {\n    e.preventDefault();\n    $(slider).slick('slickNext');\n  });\n}\n;\n\n//# sourceURL=webpack:///./src/js/assets/sliderNav.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/js/modules/menu.js\");\n/* harmony import */ var _modules_heroSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/heroSlider */ \"./src/js/modules/heroSlider.js\");\n/* harmony import */ var _modules_surfSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/surfSlider */ \"./src/js/modules/surfSlider.js\");\n/* harmony import */ var _modules_travelSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/travelSlider */ \"./src/js/modules/travelSlider.js\");\n/* harmony import */ var _modules_locationMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/locationMap */ \"./src/js/modules/locationMap.js\");\n/* harmony import */ var _modules_sleepSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sleepSlider */ \"./src/js/modules/sleepSlider.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  'use strict';\n\n  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_modules_heroSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_modules_surfSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_modules_travelSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(_modules_locationMap__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  Object(_modules_sleepSlider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/heroSlider.js":
/*!**************************************!*\
  !*** ./src/js/modules/heroSlider.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return headerSlider; });\nfunction previewNavigate(preview, map) {\n  preview.forEach(function (nav, slide) {\n    if (slide.classList.contains('slick-active')) nav.classList.add('preview-active');else nav.classList.remove('preview-active');\n  });\n  map.forEach(function (location, slide) {\n    if (slide.classList.contains('slick-active')) {\n      mapLocation.className = \"map-location \".concat(location[0].toLowerCase());\n      mapLocationTitle.textContent = mapLocation.textContent.replace(/\\w+ /i, \"\".concat(location[0], \" \"));\n      lines.forEach(function (item) {\n        return item.classList.remove('snake-line');\n      });\n      location[1].classList.add('snake-line');\n    }\n  });\n}\n\nvar slides = Array.from($('.slider-item'));\nvar previews = Array.from($('.hero-slider-preview-box'));\nvar mapLocation = document.querySelector('.map-location');\nvar mapLocationTitle = mapLocation.querySelector('#map-total-location');\nvar orientation = ['North', 'South', 'West', 'East'];\nvar lines = document.querySelectorAll('path.line');\nvar preview = new Map();\nvar map = new Map();\nfunction headerSlider() {\n  $('.slider-item-link').on('click', function (e) {\n    e.preventDefault();\n  });\n  $('.hero-slider').slick({\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    fade: true,\n    arrows: false\n  });\n  slides.forEach(function (item, n) {\n    preview.set(item, previews[n]);\n    map.set(item, [orientation[n], lines[n]]);\n\n    if (item.classList.contains('slick-active')) {\n      previews[n].classList.add('preview-active');\n      lines[n].classList.add('snake-line');\n    }\n  });\n  $('.hero-slider-next').on('click', function () {\n    $('.hero-slider').slick('slickNext');\n    previewNavigate(preview, map);\n  });\n  $('.hero-slider-prev').on('click', function () {\n    $('.hero-slider').slick('slickPrev');\n    previewNavigate(preview, map);\n  });\n}\n/* arrowsScrollDown */\n\nvar arrows = document.querySelector('.hero-section .scroll-down');\nvar direction = 1;\n\nvar animateScrollDownArrows = function animateScrollDownArrows(direction) {\n  return arrows.style.transform = \"translateY(\".concat(direction * 20, \"px)\");\n};\n\narrows.addEventListener('click', function (e) {\n  e.preventDefault();\n  document.querySelector('.surf-section').scrollIntoView({\n    behavior: 'smooth'\n  });\n});\narrows.addEventListener('transitionend', function () {\n  direction = direction > 0 ? 0 : 1;\n  requestAnimationFrame(function () {\n    return animateScrollDownArrows(direction);\n  });\n});\nif (arrows) requestAnimationFrame(function () {\n  return animateScrollDownArrows(direction);\n});\n/* ^ arrowsScrollDown */\n\n//# sourceURL=webpack:///./src/js/modules/heroSlider.js?");

/***/ }),

/***/ "./src/js/modules/locationMap.js":
/*!***************************************!*\
  !*** ./src/js/modules/locationMap.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return locationMap; });\nfunction locationMap() {\n  function show(item) {\n    item.classList.toggle('active');\n    var infoBlock = item.querySelector('.info-block');\n    infoBlock.style.display = 'block';\n    setTimeout(function () {\n      return infoBlock.style.opacity = 1;\n    }, 0);\n  }\n\n  ;\n\n  function hide(target) {\n    var item = target.closest('.world-map-item');\n    var infoBlock = item.querySelector('.info-block');\n    item.classList.remove('active');\n    infoBlock.style.opacity = 0;\n    setTimeout(function () {\n      return infoBlock.style.display = 'none';\n    }, 500);\n  }\n\n  function hideAll() {\n    infoBlocks.forEach(function (item) {\n      return item.removeAttribute('style');\n    });\n    items.forEach(function (item) {\n      return item.classList.remove('active');\n    });\n  }\n\n  ;\n\n  var showActiveItem = function showActiveItem(e) {\n    var target = e.target;\n\n    if (target.matches('.dot')) {\n      var mapItem = target.closest('.world-map-item');\n      show(mapItem);\n    } else if (target.matches('.icon-drop')) {\n      hide(target);\n    }\n  };\n\n  var map = document.querySelector('.world-map');\n  var items = map.querySelectorAll('.world-map-item');\n  var infoBlocks = map.querySelectorAll('.info-block');\n  map.addEventListener('click', showActiveItem);\n  map.addEventListener('dblclick', hideAll);\n}\n\n//# sourceURL=webpack:///./src/js/modules/locationMap.js?");

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return menu; });\nfunction menu() {\n  var menu = document.querySelector('.menu');\n  menu.addEventListener('click', function (e) {\n    var target = e.target;\n    var newTarget = target.closest('.menu-list-item');\n\n    if (newTarget) {\n      e.preventDefault();\n      document.querySelector(newTarget.firstElementChild.hash).scrollIntoView({\n        behavior: 'smooth'\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/js/modules/menu.js?");

/***/ }),

/***/ "./src/js/modules/sleepSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/sleepSlider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sleepSlider; });\nfunction sleepSlider() {\n  function changeValues(slide) {\n    slide = slide.closest('.sleep-slider-slide');\n    return function (e) {\n      function calculation() {\n        var sumVal = Math.floor(nums.nights * 2 * nums.guests * 30 / (nums.nights + nums.guests));\n        nights.textContent = nums.nights;\n        guests.textContent = nums.guests;\n        sum.textContent = sumVal;\n      }\n\n      var nights = slide.querySelector('.nights-val');\n      var guests = slide.querySelector('.guests-val');\n      var sum = slide.querySelector('.sleep-sum');\n      var nums = {\n        nights: +nights.textContent || 1,\n        guests: +guests.textContent || 1\n      };\n      var target = e.target;\n\n      if (target.matches('.nights-minus')) {\n        if (nums.nights <= 1) return;\n        nights.parentNode.style.transform = 'scale(1.1)';\n        setTimeout(function () {\n          return nights.parentNode.style.transform = 'scale(1)';\n        }, 200);\n        nums.nights--;\n        calculation();\n      }\n\n      if (target.matches('.nights-plus')) {\n        if (nums.nights >= 9) return;\n        nums.nights++;\n        nights.parentNode.style.transform = 'scale(1.1)';\n        setTimeout(function () {\n          return nights.parentNode.style.transform = 'scale(1)';\n        }, 200);\n        calculation();\n      }\n\n      if (target.matches('.guests-minus')) {\n        if (nums.guests <= 1) return;\n        guests.parentNode.style.transform = 'scale(1.1)';\n        setTimeout(function () {\n          return guests.parentNode.style.transform = 'scale(1)';\n        }, 200);\n        nums.guests--;\n        calculation();\n      }\n\n      if (target.matches('.guests-plus')) {\n        if (nums.guests >= 5) return;\n        guests.parentNode.style.transform = 'scale(1.1)';\n        setTimeout(function () {\n          return guests.parentNode.style.transform = 'scale(1)';\n        }, 200);\n        nums.guests++;\n        calculation();\n      }\n    };\n  }\n\n  var nights = document.querySelectorAll('.nights');\n  var guests = document.querySelectorAll('.guests');\n  nights.forEach(function (item) {\n    return item.addEventListener('click', throttle(changeValues(item), 500));\n  });\n  guests.forEach(function (item) {\n    return item.addEventListener('click', throttle(changeValues(item), 500));\n  });\n  $('.sleep-slider').slick({\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    arrows: false,\n    fade: true\n  });\n  $('.sleep-slider-prev').on('click', function (e) {\n    e.preventDefault();\n    $('.sleep-slider').slick('slickPrev');\n  });\n  $('.sleep-slider-next').on('click', function (e) {\n    e.preventDefault();\n    $('.sleep-slider').slick('slickNext');\n  });\n}\n\nfunction throttle(fn, ms) {\n  var isThrottled = false;\n\n  var _this = this;\n\n  return function (e) {\n    if (!isThrottled) {\n      fn.call(this, e);\n      isThrottled = true;\n      setTimeout(function () {\n        return isThrottled = false;\n      }, ms);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/js/modules/sleepSlider.js?");

/***/ }),

/***/ "./src/js/modules/surfSlider.js":
/*!**************************************!*\
  !*** ./src/js/modules/surfSlider.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return surfSlider; });\n/* harmony import */ var _assets_sliderNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sliderNav */ \"./src/js/assets/sliderNav.js\");\n\nfunction surfSlider() {\n  $('.surf-slider').slick({\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    infinite: true,\n    arrows: false\n  });\n  Object(_assets_sliderNav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.surf-slider', {\n    prev: '.surf-slider-prev',\n    next: '.surf-slider-next'\n  });\n}\n\n//# sourceURL=webpack:///./src/js/modules/surfSlider.js?");

/***/ }),

/***/ "./src/js/modules/travelSlider.js":
/*!****************************************!*\
  !*** ./src/js/modules/travelSlider.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return travelSlider; });\n/* harmony import */ var _assets_sliderNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sliderNav */ \"./src/js/assets/sliderNav.js\");\n\nfunction travelSlider() {\n  $('.travel-slider').slick({\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    arrows: false,\n    fade: true\n  });\n  Object(_assets_sliderNav__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.travel-slider', {\n    prev: '.travel-slider-prev',\n    next: '.travel-slider-next'\n  });\n}\n\n//# sourceURL=webpack:///./src/js/modules/travelSlider.js?");

/***/ })

/******/ });