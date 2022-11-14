let loader  = document.querySelector('.preloader');
window.addEventListener("load", function(){
    loader.style.display = "none"
})
AOS.init({
    duration: 2000,
});

// share btton
let share_btn = document.querySelector('#share-btn');
let social_popup = document.querySelector('.social_page');
let swiper_section = document.querySelector('.mySwiper').swiper;

share_btn.addEventListener('click', function(){
    social_popup.style.visibility='visible';
    social_popup.style.cursor = "crosshair";
})
social_popup.addEventListener('click', function(e){
    social_popup.style.visibility='hidden';
    social_popup.style.cursor = 'pointer';
})

// full screen  btton
let footer_navbar = document.querySelector('#footernavbar');
let view_full_screen = document.querySelector('.full_page_view');
let full_screen = document.querySelector('#full-screen-btn');
full_screen.addEventListener('click', function(){
    $("#footernavbar").hide();
    view_full_screen.style.visibility='visible';
    $(".full_page_view").click(function() {
        $("#footernavbar").show();
      });
     
})

