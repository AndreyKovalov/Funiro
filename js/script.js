//Gallery
lightGallery(document.getElementById('lightgallery'))

let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__body');
menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('_active');
   menu.classList.toggle('_active');
})

jQuery('.page').click(function (event) {
   // проверяем находится ли элемент на который кликнули в нашем меню,
   // то есть в контейнере "menu-container"
   var eventInMenu = $(event.target).parents('.menu');

   // если родителя нет, значит клик был вне меню и меню сворачиваем
   if (!eventInMenu.length) {
      $('.menu__btn').removeClass("_active");
      $('.menu__body').removeClass("_active");
      $('.menu__arrow').removeClass("_active");
   }
});

let menuArrow = document.querySelector('.menu__arrow');
menuArrow.addEventListener('click', () => {
   menuArrow.classList.toggle('_active');
})

const handleClick = event => {
   const $target = $(event.target).parent().next()
   $target.toggleClass("menu__sub-list--hide")
   $(".menu__sub-list").each(function () {
      if ($(this)[0] !== $target[0]) {
         $(this).addClass("menu__sub-list--hide")
      }
   })
}

$(".menu__arrow").on("click", handleClick)


jQuery('.page').click(function (event) {
   // проверяем находится ли элемент на который кликнули в нашем меню,
   // то есть в контейнере "menu-container"
   var eventInMenu = $(event.target).parents('.menu__body');

   // если родителя нет, значит клик был вне меню и меню сворачиваем
   if (!eventInMenu.length) {
      $('.menu__sub-list').addClass("menu__sub-list--hide");
   }
});

let searchBtn = document.querySelector('.search-form__icon');
let searchForm = document.querySelector('.search-form__item');
searchBtn.addEventListener('click', () => {
   searchBtn.classList.toggle('__show');
   searchForm.classList.toggle('__show');
})

// slider
const swiper = new Swiper('.slider-main-block', {
   // Optional parameters
   loop: true,
   initialSlide: 1,
   slidesPerView: 2,
   spaceBetween: 30,

   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 1,
         slidesOffsetBefore: 0,
         spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 1,
         slidesOffsetBefore: 0,
         spaceBetween: 10
      },
      767: {
         slidesPerView: 1,
         slidesOffsetBefore: 0,
         spaceBetween: 15
      },
      // when window width is >= 640px
      992: {
         slidesPerView: 1.5,
         slidesOffsetBefore: 200,
         spaceBetween: 35
      },
      1240: {
         slidesPerView: 1.7,
         slidesOffsetBefore: 430,
         spaceBetween: 35
      },
      1440: {
         slidesPerView: 2,
         slidesOffsetBefore: 630,
         spaceBetween: 35
      }
   },

   autoplay: {
      delay: 4000,
      disableOnInteraction: true
   },

   speed: 1800,

   // If we need pagination
   pagination: {
      el: '.slider-main-block__pagination',
      type: 'bullets',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.body-main-block__arrow--next',
      prevEl: '.body-main-block__arrow--prev',
   },

});

// slider rooms
if (document.querySelector('.body-rooms-slider')) {
   new Swiper('.body-rooms-slider', {
      // Optional parameters
      loop: true,
      initialSlide: 0,
      spaceBetween: 24,
      watchOverflow: true,
      preloadImages: false,

      autoplay: {
         delay: 4000,
         disableOnInteraction: true
      },

      breakpoints: {
         // when window width is >= 320px
         320: {
            slidesPerView: 1,
            spaceBetween: 10
         },
         // when window width is >= 480px
         480: {
            slidesPerView: 'auto',
            spaceBetween: 24
         },
      },

      speed: 800,

      // If we need pagination
      pagination: {
         el: '.body-rooms-slider__pagination',
         type: 'bullets',
      },

      // Navigation arrows
      navigation: {
         nextEl: '.body-rooms-slider .body-rooms-slider__arrow--next',
         prevEl: '.body-rooms-slider .body-rooms-slider__arrow--prev',
      },

   })
};

// slider trickstips
if (document.querySelector('.body-tipstricks-slider')) {
   new Swiper('.body-tipstricks-slider', {
      // Optional parameters
      loop: true,
      initialSlide: 1,
      preloadImages: false,

      autoplay: {
         delay: 4000,
         disableOnInteraction: true
      },

      breakpoints: {
         // when window width is >= 320px
         320: {
            slidesPerView: 1,
            spaceBetween: 0
         },
         // when window width is >= 480px
         580: {
            slidesPerView: 2,
            spaceBetween: 26,
            centeredSlides: false
         },
         997: {
            slidesPerView: 3,
            spaceBetween: 26,
            centeredSlides: true
         },
      },

      speed: 800,

      // If we need pagination
      pagination: {
         el: '.body-tipstricks-slider__pagination',
         type: 'bullets',
      },

      // Navigation arrows
      navigation: {
         nextEl: '.body-tipstricks .body-tipstricks-slider__arrow--next',
         prevEl: '.body-tipstricks .body-tipstricks-slider__arrow--prev',
      },

   })
};

//подгрузить еще по кнопке, если все элемнты подгружены, скрывает кнопку
$(window).on('load', function () {
   initTwenty();
});

$(document).ready(function () {
   var list = $(".products__items .item-products");
   var numToShow = 8; //сколько показывать элементов
   if ($(window).width() > 767) {
      numToShow = 8;
   } else {
      numToShow = 4;
   }
   var button = $(".products__button");
   var numInList = list.length;
   list.hide();
   if (numInList > numToShow) {
      button.show();
   }
   list.slice(0, numToShow).show();
   button.click(function () {
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
         button.hide();
      }
      initTwenty();
   });
});



