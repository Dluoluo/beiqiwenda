var myWendaSwiper = new Swiper('.swiper-wenda', {
    // 垂直
    direction: 'vertical',
    // 不重复
    loop: false,
    
    onInit: function (swiper) {
        slide = swiper.slides.eq(0);
        slide.addClass('ani-slide');
    }, onTransitionStart: function (swiper) {
        for (i = 0; i < swiper.slides.length; i++) {
            slide = swiper.slides.eq(i);
            slide.removeClass('ani-slide');
        }
    }, onTransitionEnd: function (swiper) {
        slide = swiper.slides.eq(swiper.activeIndex);
        slide.addClass('ani-slide');

    },

}) 
$('.rankings-list').mCustomScrollbar({
    axis: "y",
    setWidth:"548px",
    setHeight:"450px",
    scrollbarPosition: "outside",
    scrollButtons: { enable: true }
})