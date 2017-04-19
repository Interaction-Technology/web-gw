$(function() {
    // 顶部导航
    var url = window.location.href;
    // 载入页面后清楚高亮样式
    $('#nav li').removeClass('nav-ate');
    // 判断当前页面链接是否包含所需关键词
    if (url.indexOf('index.html') >= 0) { //首页
        // 切换到当前页面所对应标签并高亮
        $('#nav li').eq(0).addClass('nav-ate');
    };
    if (url.indexOf('service.html') >= 0) { //服务
        $('#nav li').eq(1).addClass('nav-ate');
    };
    if (url.indexOf('achievements.html') >= 0) { //成果
        $('#nav li').eq(2).addClass('nav-ate');
    };
    if (url.indexOf('ours.html') >= 0) { //我们
        $('#nav li').eq(3).addClass('nav-ate');
    };
    if (url.indexOf('class.html') >= 0) { //课程
        $('#nav li').eq(4).addClass('nav-ate');
    };

    //合作弹窗
    $('.collaboration').click(function() {
        // 清除隐藏动画
        $('.cooperation').removeClass('cooperation-hide animatedHide');
        // 激活后添加显示动画
        $('.cooperation').show().addClass('cooperation-show animatedShow');
        // return false;
    });

    $('.close').click(function() {
        // 关闭后移除显示动画
        $('.cooperation').removeClass('cooperation-show animatedShow');
        // 添加隐藏动画
        $('.cooperation').addClass('cooperation-hide animatedHide');
        // return false;
    });



    //map 呼吸灯   
    $('.ours-addr-node li').click(function() {
        $('.ours-addr-node li').removeClass('atcive');
        $(this).addClass('atcive');
    });

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
        });
        // 地址右侧
        var text = $(this).children().text();
        $(this).siblings().children().show();
        $(this).children().hide();
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


    // 我要合作表单
    // $('#submitForm').validate({
    //     /**/
    //     /* 设置验证规则 */
    //     rules: {
    //         username: {
    //             required: true,
    //             stringCheck: true,
    //             byteRangeLength: [3, 15]
    //         },
    //         phone: {
    //             required: true,
    //             isPhone: true
    //         },
    //     },

    //     /**/
    //     /* 设置错误信息 */
    //     messages: {
    //         username: {
    //             required: "请填写用户名",
    //             stringCheck: "用户名只能包括中文字、英文字母、数字和下划线",
    //             byteRangeLength: "用户名必须在3-15个字符之间(一个中文字算2个字符)"
    //         },
    //         email: {
    //             required: "请输入一个Email地址",
    //             email: "请输入一个有效的Email地址"
    //         },
    //         phone: {
    //             required: "请输入您的联系电话",
    //             isPhone: "请输入一个有效的联系电话"
    //         },
    //     },

    //     /**/
    //     /* 设置验证触发事件 */
    //     focusInvalid: false,
    //     onkeyup: false,

    //     /**/
    //     /* 设置错误信息提示DOM */
    //     errorPlacement: function(error, element) {
    //         error.appendTo(element.parent());
    //     },

    // });
});
