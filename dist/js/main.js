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
  }); // subcategory menu

  $("ul.sub-category.js-el").attr("data-content", "").on("click", function () {
    $(this).children("li").toggle("show");
    $(this).toggleClass("active");
  });
  $(".header__bottom-menu ul.sub__menu").attr("data-content", "").on("click", function () {
    $(this).children("li.sub__menu-item").toggle("show");
    $(this).toggleClass("active");
    $(".header__bottom-menu").addClass("active");
  }); // header search mobile

  $("li.search-js").on("click", function (e) {
    e.preventDefault();
    $(".header__center-search").toggle("show");
  }); // sliders

  var prev = "<button type=\"button\" class=\"slick-prev\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"29.448\" height=\"14.474\" viewBox=\"0 0 29.448 14.474\"> <path id=\"long-arrow-alt-right\" d=\"M8.812,14.867H28.659a.789.789,0,0,1,.789.789v3.681a.789.789,0,0,1-.789.789H8.812v3.028a1.578,1.578,0,0,1-2.693,1.115L.462,18.613a1.577,1.577,0,0,1,0-2.231l5.657-5.657a1.578,1.578,0,0,1,2.693,1.115Z\" transform=\"translate(0 -10.26)\" fill=\"#ebe9e0\"/> </svg></button>";
  var next = "<button type=\"button\" class=\"slick-next\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"29.448\" height=\"14.474\" viewBox=\"0 0 29.448 14.474\"> <path id=\"long-arrow-alt-right\" d=\"M20.636,14.867H.789A.789.789,0,0,0,0,15.656v3.681a.789.789,0,0,0,.789.789H20.636v3.028a1.578,1.578,0,0,0,2.693,1.115l5.657-5.657a1.577,1.577,0,0,0,0-2.231l-5.657-5.657a1.578,1.578,0,0,0-2.693,1.115Z\" transform=\"translate(0 -10.26)\" fill=\"#ebe9e0\"/> </svg></button>";
  $(".slider-js").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
    infinite: false,
    arrows: true,
    prevArrow: prev,
    nextArrow: next,
    mobileFirst: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    }] // responsive: [{
    //     breakpoint: 767,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //     }
    // }]

  });
  $(".related .product__items,.up-sells .product__items").slick({
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

  var width = $(window).width();

  if (width <= 767) {
    $(".summary.entry-summary h3").prependTo($("div.product"));
    $(".product_title.entry-title").prependTo($("div.product"));
    $("div[id^='product-'] div.onsale, div[id^='product-'] div.discount, div[id^='product-'] div.sale").prependTo($(".woocommerce-product-gallery"));
    $(document).on('scroll', function () {
      var height = $(window).scrollTop();

      if (height > 125) {
        $(".header").addClass("shadow");
      } else {
        $(".header").removeClass("shadow");
      }
    });
  } // woof settings


  var priceStr = jQuery(".price_label");

  if (priceStr.length) {
    split();
  }

  function split() {
    var priceHtml = priceStr.html().trim().split("").splice(7).join("");
    var newHtml = priceStr.html(priceHtml);
    return newHtml;
  }

  $("button.woof_reset_search_form").text("Zurücksetzen");
  var svgBtn = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"9.88\" height=\"9.88\" viewBox=\"0 0 9.88 9.88\"><path id=\"filter\" d=\"M9.416,0H.463A.464.464,0,0,0,.136.791L3.7,4.36V8.336a.463.463,0,0,0,.2.379L5.446,9.8a.463.463,0,0,0,.729-.379V4.36L9.744.79A.463.463,0,0,0,9.416,0Z\" transform=\"translate(0)\"/></svg>\n  ";
  $(".woof_sid_auto_shortcode").prepend("<span class='mobile__visible woof__mobile__btn'><span class='icon'>".concat(svgBtn, "</span>Filterm\xF6glichkeiten</span>"));
  $(".woof__mobile__btn").on("click", function () {
    $(".woof_redraw_zone").toggle("show");
  }); // end woof settings
  // header menu sticky   

  $(document).on('scroll', function () {
    var height = $(window).scrollTop();

    if (height > 220) {
      $(".header__bottom").addClass("fixed");
    } else {
      $(".header__bottom").removeClass("fixed");
    }
  }); //card__product description

  $("div.product__description--top .item").on("click", function () {
    $(this).children("p").toggle("show");
    $(this).toggleClass("active");
  }); // contacts

  $(".questions__item").on("click", "h4", function () {
    $(this).next().toggle("show");
    $(this).parent().toggleClass("active");
  });
  var contactFormBtn = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"29.448\" height=\"14.474\" viewBox=\"0 0 29.448 14.474\"><path id=\"long-arrow-alt-right\" d=\"M20.636,14.867H.789A.789.789,0,0,0,0,15.656v3.681a.789.789,0,0,0,.789.789H20.636v3.028a1.578,1.578,0,0,0,2.693,1.115l5.657-5.657a1.577,1.577,0,0,0,0-2.231l-5.657-5.657a1.578,1.578,0,0,0-2.693,1.115Z\" transform=\"translate(0 -10.26)\" fill=\"#fff\"></path></svg>";
  $(".form__control-submit span.icon").append("".concat(contactFormBtn));
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