$(function() {
    var dateTime = new Date().getTime();
    var startDayTime = new Date("2017", "7", "28").getTime();
    var days = parseInt((dateTime - startDayTime) / (24 * 60 * 60 * 1000));
    $("#days").html(days + "days");
    var qiniuBaseUrl = "http://owntjivne.bkt.clouddn.com/";
    var $swiperWrap = $(".swiper-wrapper");
    var $swiperStart = $(".icon-start");
    var $swiperPause = $(".icon-pause");
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
        },
        {
            'date': '2017-09-30',
            'desc': '见你，无论风雨多大',
            'distance': '68'
        },
        {
            'date': '2017-10-03',
            'desc': '给你做一辈子',
            'distance': '65'
        },
        {
            'date': '2017-10-04',
            'desc': '有你才是团圆<small>中秋</small>',
            'distance': '65'
        },
        {
            'date': '2017-10-06',
            'desc': '在江桥捏泥巴',
            'distance': '160'
        },
        {
            'date': '2017-10-08',
            'desc': '时光不老，我们不散',
            'distance': '65'
        },
        {
            'date': '2017-10-14',
            'desc': '吃妈妈烧的鹅肉',
            'distance': '65'
        },
        {
            'date': '2017-10-15',
            'desc': '不洗脸不洗头依然美',
            'distance': '65'
        },
        {
            'date': '2017-10-21',
            'desc': '被妈妈暗中凝视了',
            'distance': '40'
        },
        {
            'date': '2017-10-22',
            'desc': '才貌双全的你',
            'distance': '100'
        },
        {
            'date': '2017-10-27',
            'desc': '不开心的时候我都会陪你',
            'distance': '35'
        },
        {
            'date': '2017-10-28',
            'desc': '坐公交、散步回家',
            'distance': '0'
        },
        {
            'date': '2017-10-29',
            'desc': '睡觉怎么都这么可爱',
            'distance': '32'
        },
        {
            'date': '2017-11-04',
            'desc': '见了你的闺蜜',
            'distance': '70'
        },
        {
            'date': '2017-11-05',
            'desc': '“欺负”诺诺',
            'distance': '32'
        },
        {
            'date': '2017-11-08',
            'desc': '饭后特别想和你荡马路<small>金泽</small>',
            'distance': '120'
        },
        {
            'date': '2017-11-11',
            'desc': '一起参加了婚礼',
            'distance': '140'
        },
        {
            'date': '2017-11-12',
            'desc': '去金泽拿地宝',
            'distance': '90'
        },
        {
            'date': '2017-11-15',
            'desc': '看了一部很美的电影',
            'distance': '32'
        },
        {
            'date': '2017-11-16',
            'desc': '从青浦去上班',
            'distance': '36'
        },
        {
            'date': '2017-11-18',
            'desc': '终于满天星',
            'distance': '45'
        },
        {
            'date': '2017-11-19',
            'desc': '黑灯瞎火见了丈母娘',
            'distance': '32'
        },
        {
            'date': '2017-11-24',
            'desc': '下班先回江桥再去青浦',
            'distance': '32'
        },
        {
            'date': '2017-11-25',
            'desc': '看完演唱会凌晨到家',
            'distance': '100'
        },
        {
            'date': '2017-11-26',
            'desc': '打扫卫生累瘫',
            'distance': '15'
        },
        {
            'date': '2017-11-27',
            'desc': '一起出门上班',
            'distance': '32'
        }
    ];
    var totalDistance = 0;
    for (var i = 0, len = dateDescArray.length; i < len; i++) {
        var dateDesc = dateDescArray[i];
        var date = dateDesc.date;
        var desc = dateDesc.desc;
        var distance = parseInt(dateDesc.distance);
        totalDistance += distance;
        $swiperWrap.append('<div class="swiper-slide">' + '<p class="desc">' + desc + '</p><p class="date">' + date + '</p><p class="distance">' + distance + 'km</p><img src="' + qiniuBaseUrl + date + '.jpg?t=' + dateTime + '" width="95%" class="swiper-lazy"></div>')
    }
    console.log("共" + dateDescArray.length + "次，" + totalDistance + "公里")
    var width = $(window).width();
    $(".swiper-container").css("height", width * 0.95 + 85);
    var swiper = new Swiper('.swiper-container', {
        // Enable lazy loading
        // lazyLoading: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true
    });
    $swiperStart.on("click", function() {
        swiper.startAutoplay();
        $swiperStart.hide();
        $swiperPause.show();
    });
    $swiperPause.on("click", function() {
        swiper.stopAutoplay();
        $swiperPause.hide();
        $swiperStart.show();
    });
});
