"use strict";

// load script
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
  }); // header search mobile

  $("li.search-js").on("click", function (e) {
    e.preventDefault();
    $(".header__center-search").toggle("show");
  }); // sliders

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

  var width = $(window).width();

  if (width <= 767) {
    $(".summary.entry-summary h3").prependTo($("div.product"));
    $(".product_title.entry-title").prependTo($("div.product"));
    $(document).on('scroll', function () {
      var height = $(window).scrollTop();

      if (height > 125) {
        $(".header").addClass("shadow");
      } else {
        $(".header").removeClass("shadow");
      }
    }); // 

    $(".woocommerce-product-gallery__image").children("a img").css({
      "width": "100vw",
      "display": "block",
      "objectFit": "cover"
    });
  } // webp
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
  }); // header menu sticky   

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
});