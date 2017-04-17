$(function() {
    // 顶部导航
    var url = window.location.href;

    $('nav li').removeClass('nav-ate');

    if(url.indexOf('index.html') >= 0 ){
        $('nav li').eq(0).addClass('nav-ate');
    };
    if(url.indexOf('service.html') >= 0 ){
        $('nav li').eq(1).addClass('nav-ate');
    };
    if(url.indexOf('achievements.html') >= 0 ){
        $('nav li').eq(2).addClass('nav-ate');
    };
    if(url.indexOf('ours.html') >= 0 ){
        $('nav li').eq(3).addClass('nav-ate');
    };
    if(url.indexOf('class.html') >= 0 ){
        $('nav li').eq(4).addClass('nav-ate');
    };

    //合作弹窗
    $('.collaboration').click(function() {
        $('.cooperation').removeClass('cooperation-hide animatedHide')
        $('.cooperation').show().addClass('cooperation-show animatedShow');
        return false;
    })

    $('.close').click(function() {
        $('.cooperation').removeClass('cooperation-show animatedShow');
        $('.cooperation').addClass('cooperation-hide animatedHide');
        return false;
    });





    //map 呼吸灯   
    $('.ours-addr-node li').click(function() {
        $('.ours-addr-node li').removeClass('atcive');
        $(this).addClass('atcive')
    })

    $('#cale li').click(function() {
        var cls = $(this).attr('type'); //获取attr
        var e = $('#address,#cale-img').find('.' + cls);
        //地址详细侧样式
        $('#address dl').css({
            'margin-top': '40px',
            'opacity': '0',

        });
        $('#cale-img li').css({
            // 'margin-top': '50px',
            'opacity': '0',

        });
        e.css({
                'margin-top': '0px',
                'opacity': '1',
            })
            //地址右侧
        // var text = $(this).children().text();
        // $(this).siblings().children().show();
        // $(this).children().hide();

        var text = $(this).children().text();
        $(this).siblings().children().css("display","block");
        $(this).children().css("display","none");

    });


    //侧边栏弹窗
    $('.share li').click(function() {
        $('.share li').children('dl').hide();
        $(this).children('dl').show();
    });
    $('.share li .w-close').click(function() {
        $(this).parent().parent().hide();
        return false;
    });
})
