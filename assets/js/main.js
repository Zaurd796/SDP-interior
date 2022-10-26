window.addEventListener("DOMContentLoaded", function() {
  const firstBlock = document.querySelector(".site-main__first");
  
  window.addEventListener("resize", () => {
    if(window.innerWidth >= 1440) {
      firstBlock.style.background = 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), url("/assets/images/bg-desktop.jpg") center/cover no-repeat var(--color-gallery)';
    } else {
      firstBlock.style.background = 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), url("/assets/images/bg-mobile.jpg") center/cover no-repeat var(--color-gallery)';
    }
  });

  const productsFilterSlider = new Swiper('.products-filter', {
    loop: true,
    navigation: {
      nextEl: '.products__arrow',
    },
    slidesPerView: 3,
    spaceBetween: 10,

    breakpoints: {
      500: {
        slidesPerView: 5
      },
      1440: {
        slidesPerView: 7
      }
    }
  });

  const productsSlider = new Swiper(".products__slider", {
    loop: true,
    navigation: {
      nextEl: ".products__slider-arrow",
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3
      },
      1110: {
        slidesPerView: 4
      },
      1380: {
        slidesPerView: 5
      },
    }
  });

  const specialsSlider = new Swiper(".specials__slider", {
    loop: true,
    navigation: {
      nextEl: ".specials__slider-arrow",
    },
    breakpoints: {
      500: {
        slidesPerView: 2
      },
      730: {
        slidesPerView: 3
      },
      1060: {
        slidesPerView: 4
      },
      1440: {
        slidesPerView: 3
      },
    }
  });

  const storesSlider = new Swiper(".stores__slider", {
    loop: true,
    navigation: {
      nextEl: ".stores__slider-arrow",
    },
    breakpoints: {
      500: {
        slidesPerView: 1.5
      },
      660: {
        slidesPerView: 2
      },
      1300: {
        slidesPerView: 3
      },
      1440: {
        slidesPerView: 4
      },
    },
  
  });

  
});