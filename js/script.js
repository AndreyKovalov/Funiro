//Menu
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
      spaceBetween: 26,

      autoplay: {
         delay: 4000,
         disableOnInteraction: true
      },

      breakpoints: {
         // when window width is >= 320px
         320: {
            slidesPerView: 1,
         },
         // when window width is >= 480px
         580: {
            slidesPerView: 2,
            centeredSlides: false
         },
         997: {
            slidesPerView: 3,
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



// ============
// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
   // Получение обычных слойлеров
   const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
      return !item.dataset.spollers.split(",")[0];
   });
   // Инициализация обычных слойлеров
   if (spollersRegular.length > 0) {
      initSpollers(spollersRegular);
   }

   // Получение слойлеров с медиа запросами
   const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
      return item.dataset.spollers.split(",")[0];
   });

   // Инициализация слойлеров с медиа запросами
   if (spollersMedia.length > 0) {
      const breakpointsArray = [];
      spollersMedia.forEach(item => {
         const params = item.dataset.spollers;
         const breakpoint = {};
         const paramsArray = params.split(",");
         breakpoint.value = paramsArray[0];
         breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
         breakpoint.item = item;
         breakpointsArray.push(breakpoint);
      });

      // Получаем уникальные брейкпоинты
      let mediaQueries = breakpointsArray.map(function (item) {
         return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
      });
      mediaQueries = mediaQueries.filter(function (item, index, self) {
         return self.indexOf(item) === index;
      });

      // Работаем с каждым брейкпоинтом
      mediaQueries.forEach(breakpoint => {
         const paramsArray = breakpoint.split(",");
         const mediaBreakpoint = paramsArray[1];
         const mediaType = paramsArray[2];
         const matchMedia = window.matchMedia(paramsArray[0]);

         // Объекты с нужными условиями
         const spollersArray = breakpointsArray.filter(function (item) {
            if (item.value === mediaBreakpoint && item.type === mediaType) {
               return true;
            }
         });
         // Событие
         matchMedia.addListener(function () {
            initSpollers(spollersArray, matchMedia);
         });
         initSpollers(spollersArray, matchMedia);
      });
   }
   // Инициализация
   function initSpollers(spollersArray, matchMedia = false) {
      spollersArray.forEach(spollersBlock => {
         spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
         if (matchMedia.matches || !matchMedia) {
            spollersBlock.classList.add('_init');
            initSpollerBody(spollersBlock);
            spollersBlock.addEventListener("click", setSpollerAction);
         } else {
            spollersBlock.classList.remove('_init');
            initSpollerBody(spollersBlock, false);
            spollersBlock.removeEventListener("click", setSpollerAction);
         }
      });
   }
   // Работа с контентом
   function initSpollerBody(spollersBlock, hideSpollerBody = true) {
      const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
      if (spollerTitles.length > 0) {
         spollerTitles.forEach(spollerTitle => {
            if (hideSpollerBody) {
               spollerTitle.removeAttribute('tabindex');
               if (!spollerTitle.classList.contains('_active')) {
                  spollerTitle.nextElementSibling.hidden = true;
               }
            } else {
               spollerTitle.setAttribute('tabindex', '-1');
               spollerTitle.nextElementSibling.hidden = false;
            }
         });
      }
   }
   function setSpollerAction(e) {
      const el = e.target;
      if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
         const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
         const spollersBlock = spollerTitle.closest('[data-spollers]');
         const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
         if (!spollersBlock.querySelectorAll('._slide').length) {
            if (oneSpoller && !spollerTitle.classList.contains('_active')) {
               hideSpollersBody(spollersBlock);
            }
            spollerTitle.classList.toggle('_active');
            _slideToggle(spollerTitle.nextElementSibling, 500);
         }
         e.preventDefault();
      }
   }
   function hideSpollersBody(spollersBlock) {
      const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
      if (spollerActiveTitle) {
         spollerActiveTitle.classList.remove('_active');
         _slideUp(spollerActiveTitle.nextElementSibling, 500);
      }
   }
}
//=================
//SearchInList
function search_in_list(input) {
   let ul = input.parentNode.querySelector('ul')
   let li = ul.querySelectorAll('li');
   let filter = input.value.toUpperCase();

   for (i = 0; i < li.length; i++) {
      let el = li[i];
      let item = el;
      txtValue = item.textContent || item.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
         el.style.display = "";
      } else {
         el.style.display = "none";
      }
   }
}
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
         target.hidden = true;
         target.style.removeProperty('height');
         target.style.removeProperty('padding-top');
         target.style.removeProperty('padding-bottom');
         target.style.removeProperty('margin-top');
         target.style.removeProperty('margin-bottom');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
      }, duration);
   }
}
// анимированно показывает объект
let _slideDown = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (target.hidden) {
         target.hidden = false;
      }
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
         target.style.removeProperty('height');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
      }, duration);
   }
}
let _slideToggle = (target, duration = 500) => {
   if (target.hidden) {
      return _slideDown(target, duration);
   } else {
      return _slideUp(target, duration);
   }
}
//========================================
//Wrap
function _wrap(el, wrapper) {
   el.parentNode.insertBefore(wrapper, el);
   wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
   for (var i = 0; i < el.length; i++) {
      el[i].classList.remove(class_name);
   }
}
//========================================
//IsHidden
function _is_hidden(el) {
   return (el.offsetParent === null)
}

//SearchInList
function search_in_list(input) {
   let ul = input.parentNode.querySelector('ul')
   let li = ul.querySelectorAll('li');
   let filter = input.value.toUpperCase();

   for (i = 0; i < li.length; i++) {
      let el = li[i];
      let item = el;
      txtValue = item.textContent || item.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
         el.style.display = "";
      } else {
         el.style.display = "none";
      }
   }
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
   gallery_init();
}
function gallery_init() {
   for (let index = 0; index < gallery.length; index++) {
      const el = gallery[index];
      lightGallery(el, {
         counter: false,
         selector: 'a',
         download: false
      });
   }
}

