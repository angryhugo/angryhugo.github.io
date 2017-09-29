$(function() {
    function initPic() {
        var dateTime = new Date().getTime();
        var qiniuBaseUrl = "http://owntjivne.bkt.clouddn.com/";
        var $swiperWrap = $(".swiper-wrapper");
        var dateDescArray = [{
                'date': '2017-08-28',
                'desc': '七夕“再”一起',
                'distance': '130'
            },
            {
                'date': '2017-09-01',
                'desc': '蓦然回首你在身边',
                'distance': '73'
            },
            {
                'date': '2017-09-03',
                'desc': '高中一样陪你做题',
                'distance': '73'
            },
            {
                'date': '2017-09-09',
                'desc': '躺在阁楼的吊床上',
                'distance': '68'
            },
            {
                'date': '2017-09-10',
                'desc': '去了个“假”植物园',
                'distance': '108'
            },
            {
                'date': '2017-09-16',
                'desc': '在家看我拍牌',
                'distance': '68'
            },
            {
                'date': '2017-09-17',
                'desc': '说我拍照技术差',
                'distance': '68'
            },
            {
                'date': '2017-09-23',
                'desc': '暗中观察爸爸',
                'distance': '68'
            },
            {
                'date': '2017-09-24',
                'desc': '在地下车库抓狂',
                'distance': '85'
            },
            {
                'date': '2017-09-28',
                'desc': '渐渐离不开你<small>1month</small>',
                'distance': '130'
            }
        ];
        for (var i = 0, len = dateDescArray.length; i < len; i++) {
            var dateDesc = dateDescArray[i];
            var date = dateDesc.date;
            var desc = dateDesc.desc;
            var distance = dateDesc.distance;
            $swiperWrap.append('<div class="swiper-slide">' + '<p class="desc">' + desc + '</p><p class="date">' + date + '</p><p class="distance">' + distance + 'km</p><img src="' + qiniuBaseUrl + date + '.jpg?t='+ dateTime +'" width="95%" class="swiper-lazy"></div>')
        }
    }
    initPic();
    var width = $(window).width();
    $(".swiper-container").css("height", width * 0.95 + 85);
    var swiper = new Swiper('.swiper-container', {
        // Enable lazy loading
        // lazyLoading: true,
        loop: true
    });
});
