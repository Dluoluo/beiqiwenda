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

$('.rule-list').mCustomScrollbar({
    theme: "dark",
    axis: "y",
    setWidth: "100%",
    alwaysShowScrollbar: 0 
})

var oUl = document.querySelector('.rule-list');
oUl.addEventListener('touchend',function (e) {
    var oEvent = ev || event;
    oEvent.cancelBubble = true;
    oEvent.stopPropagation();
},false)
oUl.addEventListener('touchstart', function (e) {
    oEvent.cancelBubble = true;
    oEvent.stopPropagation();
}, false)
oUl.addEventListener('touchmove', function (e) {
    oEvent.cancelBubble = true;
    oEvent.stopPropagation();
}, false)