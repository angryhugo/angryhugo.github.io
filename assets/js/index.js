$(function() {
    function initPic() {
        var qiniuBaseUrl = "http://owntjivne.bkt.clouddn.com/";
        var $swiperWrap = $(".swiper-wrapper");
        var dateDescArray = [
            { 'date': '2017-08-28', 'des': '第一个七夕' },
            { 'date': '2017-09-01', 'des': '居然停在一起' },
            { 'date': '2017-09-03', 'des': '高中一样陪你做题' },
            { 'date': '2017-09-09', 'des': '躺在阁楼的吊床上' },
            { 'date': '2017-09-10', 'des': '去了个"假的"植物园' },
            { 'date': '2017-09-16', 'des': '在家看我拍牌' },
            { 'date': '2017-09-17', 'des': '说我拍照技术差' },
            { 'date': '2017-09-23', 'des': '暗中观察爸爸' },
            { 'date': '2017-09-24', 'des': '在地下车库抓狂 '}
        ];
        for (var i = 0, len = dateDescArray.length; i < len; i++) {
            var dateDesc = dateDescArray[i];
            var date = dateDesc.date;
            $swiperWrap.append('<div class="swiper-slide"><img data-src="' + qiniuBaseUrl + date + '.jpg" width="100%" class="swiper-lazy"><p class="swiper-desc">' + date + '</p></div>')
        }
    }
    initPic();
    var swiper = new Swiper('.swiper-container', {
        // Enable lazy loading
        lazyLoading: true,
        loop: true
    });
});
