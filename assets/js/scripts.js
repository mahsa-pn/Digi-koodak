var swiper = new Swiper(".main_slider .swiper", {
    spaceBetween: 10,
    loop:true,
      autoplay: {
    delay: 5000,
  },
    slidesPerView: 1,
    breakpoints:{
      1000:{
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
      }
    }
  });

  var swiper1 = new Swiper(".toys .swiper", {
    loop:true,
      autoplay: {
    delay: 5000,
  },
    breakpoints: {
      0: {
        slidesPerView: 1,
    spaceBetween: 10,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 6,
        spaceBetween:15,
    navigation: {
      nextEl: '#toys-button-next',
      prevEl: '#toys-button-prev',
    },
      }
    }
  });

  
  var swiper2 = new Swiper(".product-categories .swiper", {
    loop:true,
      autoplay: {
    delay: 5000,
  },
    // pagination: {
    //   el: ".products-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1,
    spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 5,
        spaceBetween:15,
    // navigation: {
    //   nextEl: '#products-button-next',
    //   prevEl: '#products-button-prev',
    // },
      }
    }
  });

  var swiper3 = new Swiper(".middle_banners .swiper", {
    loop:true,
      autoplay: {
    delay: 5000,
  },
    pagination: {
      el: ".products-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
    spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween:15,
    navigation: {
      nextEl: '#products-button-next',
      prevEl: '#products-button-prev',
    },
      }
    }
  });

  var swiper4 = new Swiper(".offer-products .swiper", {
    loop:true,
      autoplay: {
    delay: 5000,
  },
    breakpoints: {
      0: {
        slidesPerView: 1,
    spaceBetween: 10,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 6,
        spaceBetween:15,
    navigation: {
      nextEl: '#offer-button-next',
      prevEl: '#offer-button-prev',
    },
      }
    }
  });

  var swiper5 = new Swiper(".categories .swiper", {
    loop:true,
      autoplay: {
    delay: 5000,
  },
    pagination: {
      el: "#categories-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
    spaceBetween: 10,
      },
      600: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 8,
        spaceBetween:15,
      }
    }
  });

  var swiper6 = new Swiper(".most-sale .swiper", {
    loop:true,
      autoplay: {
    delay: 5000,
  },
    breakpoints: {
      0: {
        slidesPerView: 1,
    spaceBetween: 10,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 6,
        spaceBetween:15,
    navigation: {
      nextEl: '#most-button-next',
      prevEl: '#most-button-prev',
    },
      }
    }
  });

  
  var swiper7 = new Swiper(".home-blog .swiper", {
    loop:true,
      autoplay: {
    delay: 5000,
  },
    pagination: {
      el: ".products-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
    spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween:15,
    navigation: {
      nextEl: '#products-button-next',
      prevEl: '#products-button-prev',
    },
      }
    }
  });



  $(".category-item").on("click", function(){
    var content = $(this).next(".category-content");
    $(".category-item").removeClass("active");
    $(this).addClass("active");
   $(".category-content").removeClass("show");
   $(content).addClass("show");
  })