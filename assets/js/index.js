$(function() {
    var qiniuBaseUrl = "http://owntjivne.bkt.clouddn.com/";
    var $swiperWrap = $(".swiper-wrapper");
    var dateArray = ["2017-08-28", "2017-09-01", "2017-09-03", "2017-09-09", "2017-09-10", "2017-09-16", "2017-09-17"];
    for (var i = 0, len = dateArray.length; i < len; i++) {
        var date = dateArray[i];
        $swiperWrap.append('<div class="swiper-slide"><img data-src="' + qiniuBaseUrl + date + '.jpg" class="swiper-lazy" width="100%"><p class="swiper-desc">' + date + '</p></div>')
    }
    var swiper = new Swiper('.swiper-container', {
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazyLoading: true,
        loop: true,
        autoplay: 3000
    });
});
