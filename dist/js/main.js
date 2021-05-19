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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/main__content/main__content.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/main__content/main__content.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {// load script
jQuery(document).ready(function ($) {
  "use script"; // header__burger

  $(".burger-js").on("click", function () {
    $(this).toggleClass("active");
    $(".header__bottom").toggleClass("active");
    $("body").toggleClass("overflow");
  });
  $(".header__bottom-menu ul.sub__menu").attr("data-content", "").on("click", function () {
    $(this).children("li.sub__menu-item").toggle("show");
    $(this).toggleClass("active");
  });
  $("li.search-js").on("click", function (e) {
    e.preventDefault();
    $(".header__center-search").toggle("show");
  });
  var prev = "<button type=\"button\" class=\"slick-prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"29.448\" height=\"14.474\" viewBox=\"0 0 29.448 14.474\"> <path id=\"long-arrow-alt-right\" d=\"M8.812,14.867H28.659a.789.789,0,0,1,.789.789v3.681a.789.789,0,0,1-.789.789H8.812v3.028a1.578,1.578,0,0,1-2.693,1.115L.462,18.613a1.577,1.577,0,0,1,0-2.231l5.657-5.657a1.578,1.578,0,0,1,2.693,1.115Z\" transform=\"translate(0 -10.26)\" fill=\"#ebe9e0\"/> </svg></button>";
  var next = "<button type=\"button\" class=\"slick-next\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"29.448\" height=\"14.474\" viewBox=\"0 0 29.448 14.474\"> <path id=\"long-arrow-alt-right\" d=\"M20.636,14.867H.789A.789.789,0,0,0,0,15.656v3.681a.789.789,0,0,0,.789.789H20.636v3.028a1.578,1.578,0,0,0,2.693,1.115l5.657-5.657a1.577,1.577,0,0,0,0-2.231l-5.657-5.657a1.578,1.578,0,0,0-2.693,1.115Z\" transform=\"translate(0 -10.26)\" fill=\"#ebe9e0\"/> </svg></button>";
  $(".slider-js").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: false,
    infinite: false,
    arrows: true,
    prevArrow: prev,
    nextArrow: next,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
  $(".related .product__items").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: false,
    arrows: false,
    infinite: false,
    prevArrow: prev,
    nextArrow: next,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
  $(".main__slider-js").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: false
  }); // mobile settings

  $(window).resize(function () {
    width = $(window).width();

    if (width <= 767) {
      $(document).on('scroll', function () {
        $(".header__bottom").removeClass("fixed");
      });
    }
  }); // webp
  // Проверяем, можно ли использовать Webp формат

  function canUseWebp() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    return false;
  }

  var images = document.querySelectorAll('[data-bg]');

  for (var i = 0; i < images.length; i++) {
    var image = images[i].getAttribute('data-bg');
    images[i].style.backgroundImage = 'url(' + image + ')';
  } // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию


  var isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  var firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0; // Если есть поддержка Webp или браузер Firefox версии больше или равно 65

  if (canUseWebp() || firefoxVer >= 65) {
    var imagesWebp = document.querySelectorAll('[data-bg-webp]');

    for (var _i = 0; _i < imagesWebp.length; _i++) {
      var imageWebp = imagesWebp[_i].getAttribute('data-bg-webp');

      imagesWebp[_i].style.backgroundImage = 'url(' + imageWebp + ')';
    }
  } // first page category


  $("ul.sub-category.js-el").attr("data-content", "").on("click", function () {
    $(this).children("li").toggle("show");
    $(this).toggleClass("active");
  }); // woof settings

  var priceStr = jQuery(".price_label");

  if (priceStr.length) {
    split();
  }

  function split() {
    var priceHtml = priceStr.html().trim().split("").splice(7).join("");
    var newHtml = priceStr.html(priceHtml);
    return newHtml;
  }

  $("button.woof_reset_search_form").text("Zurücksetzen"); // header menu slicky   

  var height = $(window).scrollTop();
  $(document).on('scroll', function () {
    if (height > 300 - 78) {
      $(".header__bottom").addClass("fixed");
    } else {
      $(".header__bottom").removeClass("fixed");
    }
  }); // header__menu
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_main_content_main_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/main__content/main__content */ "./src/blocks/modules/main__content/main__content.js");
/* harmony import */ var _modules_main_content_main_content__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_main_content_main_content__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map