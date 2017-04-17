//重置banner高度
var heig = $(window).height();
var banImg = document.getElementById("banner");
banImg.style.height = heig + "px";

// $(function() {
//     //nav点击事件
//     $("nav ul li").click(function() {
//         $("nav ul li").removeClass('nav-ate');
//         $(this).addClass('nav-ate');
//     })
// });

$(window).scroll(function() {
    //鼠标滚动切换第二屏
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; //滚轮滚动的距离
    var heig = $(window).height();
    if (top < 1) {
        $(".banner").css("margin-top", "0px");
        $(".share").hide();
    };
    if (top > 1) {
        $(".banner").css("margin-top", -heig + "px")
        $(".share").show();
        //局部刷新
        $(".map").load(location.href + " .map");
    };
    if (top = heig) {
        $(".cnt-service ul li").css({
            // "margin-top": "0px",
            "top": "0",
            "opacity": "1",
        })
    };
});


//banner动画效果
var MX, MY, WW, WH, X, Y, OX, OY, HWW, HWH, RX, RY, S = 0.7,
    t = 0;
getW();

function getW() {
    WW = $(window).width();
    WH = $(window).height();
    HWW = WW / 2;
    HWH = WH / 2;
};

$(window).resize(function() {
    getW();
});

$(document).mousemove(function(e) {
    MX = e.pageX;
    MY = e.pageY;
    OX = X;
    OX = Y;
    X = (HWW - MX) / 2;
    Y = (HWH - MY) / 2;

    if (MY < HWH) {
        S = MY / 1000 + 0.3;
        RX = (HWH - MY) * 0.03;
        SRX = (HWH - MY) * 0.06;
    } else {
        S = (WH - MY) / 1000 + 0.1;
        RX = '-' + (MY - HWH) * 0.03;
        SRX = '-' + (MY - HWH) * 0.06;

    };
    if (MX < HWW) {
        RY = '-' + (HWW - MX) / 50;
    } else {
        RY = (MX - HWW) / 50;
    };
    moveDiv(X, Y, S, RX, RY);
});

function moveDiv(X, Y, S, RX, RY) {
    var ban = $("#banner-gif");
    var banText = $("#banner-gif2");
    var banCss = 'translate(' + X / 4 + 'px,' + Y / 4 + 'px) rotateX(' + RX + 'deg)';
    var banTextCss = 'translate(' + X / 2 + 'px,' + Y / 2 + 'px) rotateX(' + SRX + 'deg)';
    ban.css("transform", banCss);
    banText.css("transform", banTextCss);
    return false;
};

// 成果轮播图
// 轮播参考：（http://www.superslide2.com/demo.html）- 2.焦点图／幻灯片
jQuery("#projects").slide({
    // 获取节点
    mainCell: ".bd ul",
    // 向左循环滚动
    effect: "leftLoop",
    // 自动播放
    autoPlay: true,
    // 滚动效果（参考：http://www.superslide2.com/otherDemo/T2.1/easing.html）
    easing: "easeInQuad",
    // 滚动经历时间
    delayTime: 500,
    // 间隔时间
    interTime: 5000
});

// 合作伙伴动效

$(window).scroll(function() {
    var $top = document.body.scrollTop;

    if ($top > 1200) {

        $('#partner').show().addClass('partner animated');

    }
});
/*$(function() {
    // Tip: avoid this ton of code using AniJS ;)
    var element = $('#cnt-partner #partner');
    // when mouseover execute the animation
    element.mouseover(function() {
        // the animation starts
        element.stop().addClass('partner animated');
        // do something when animation ends
        element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
            // trick to execute the animation again
            $(e.target).stop().removeClass('partner animated');
        });
    });
})*/
