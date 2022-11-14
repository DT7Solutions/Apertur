var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop:true,
    autoplay: true,
    effect: "fade",
    disableOnInteraction: true,
    speed: 100,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // .swiper-button-next
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay: {
        delay: 5000,
        },

  });
  swiper.setTransition(this, 5.5);

  let playSwiper = document.querySelector('.mySwiper').swiper
  let  play_btn =  document.querySelector('.play')
  let  paus_btn =  document.querySelector('.paus')
          $(".paus").click(function() {
            playSwiper.autoplay.stop();
            $(this).hide();
            $('.play').show();
          });
        
          $(".play").click(function() {
            playSwiper.autoplay.start();
            $('.play').hide();
            $('.paus').show();
          });

