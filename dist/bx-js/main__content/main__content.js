"use strict";
// load script
"use script";

jQuery(document).ready(function ($) {
  // header__burger
  $(".header__burger").on("click", function () {
    $(this).toggleClass("active");
    $(".header__mobile-menu").toggleClass("active");
    $("body").toggleClass("overflow");
  }); // page__phone 

  $(".page__phone").on("mouseenter", function () {
    $(this).addClass("active"), $(this).on("mouseleave", function () {
      $(this).removeClass("active");
    });
  }); // mobile settings

  $(window).resize(function () {
    width = $(window).width();

    if (width <= 767) {}
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
  } // Оптимизация Скриптов для googlepagespeed


  window.addEventListener('scroll', userEventsInit);
  window.addEventListener('mousemove', userEventsInit);
  window.addEventListener('touchstart', userEventsInit);

  function userEventsInit() {
    window.removeEventListener('scroll', userEventsInit);
    window.removeEventListener('mousemove', userEventsInit);
    window.removeEventListener('touchstart', userEventsInit);
    var url = window.location.origin; // loadScript(`${url}/wp-content/themes/mkey/assets/libs/jquery.min.js`, "jquery", function () { })
    // загрузка скрипта

    function loadScript(src, srcId, callback) {
      var script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.id = srcId;
      script.onload = callback;
      document.body.append(script);
    }
  }

  $(".woocommerce-product-gallery__trigger").html("<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"search\" class=\"svg-inline--fa fa-search fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\"></path></svg>"); // tx-cart__totop

  $(".tx-cart__totop").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });
});