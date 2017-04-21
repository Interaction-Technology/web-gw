$(function() {
    // 顶部导航
    var url = window.location.href;
    /*// 载入页面后清除高亮样式
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
    };*/

    switch (true) {
        case url.indexOf('index.html') >= 0:
            $('#nav li').eq(0).addClass('nav-ate')
            break;
        case url.indexOf('service.html') >= 0:
            $('#nav li').eq(1).addClass('nav-ate')
            break;
        case url.indexOf('achievements.html') >= 0:
            $('#nav li').eq(2).addClass('nav-ate')
            break;
        case url.indexOf('ours.html') >= 0:
            $('#nav li').eq(3).addClass('nav-ate')
            break;
        case url.indexOf('class.html') >= 0:
            $('#nav li').eq(4).addClass('nav-ate')
            break;
        case url.indexOf('details.html') >= 0:
            $('#nav li').eq(2).addClass('nav-ate')
            break;
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
        setTimeout(function() {
            $('.cooperation').hide();
            $('#btn-submit').val('提交');
        }, 1000);
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


    // 我要合作表单验证

    function submit() {
        var name = /^[\u4e00-\u9fa5_a-zA-Z]+$/; //用户名
        var mobile = /^1(3|4|5|7|8)\d{9}$/; //移动电话
        // var tel = /^([0-9]{3,4}-)?[0-9]{7,8}$/;  //固定电话
        // var mobile = /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^0?[1][358][0-9]{9}$)/; //手机和固话

        var name_str = $("#username").val();
        var mobile_str = $("#phone").val();
        // var tel_str = $("#phone").val();
        var need_str = $('#need').val();
        var data = { name: null, mobile: null, need: null };
        // 验证称呼
        if (name.test(name_str) && name_str.length >= 2 && name_str.length <= 15) {
            data.name = mobile_str;
        } else {
            $("#username").attr('placeholder', '名字请填写中文或字母');
            $("#username").val('');
        };
        // 验证手机号
        if (mobile.test(mobile_str) && mobile_str.length >= 11) {
            data.mobile = mobile_str
        } else {
            $("#phone").attr('placeholder', '请填写正确的联系方式');
            $("#phone").val('');
        };
        // 验证固定电话号
        /*if (tel.test(tel_str) && tel_str.length >= 11 && tel_str.length <= 13) {
            data.tel = tel_str
        } else {
            $("#phone").attr('placeholder', '请填写正确的联系方式');
            $("#phone").val('');
        };*/
        // 验证需求字段长度不少于10个字
        /*if (need_str.length >= 10 && need_str.length <= 150) {
            data.need = need_str
        } else {
            $('#need').attr('placeholder', '请最少输入10个字');
            $("#need").val('');
        };*/
        // 提示提交是否成功
        if (data.name && data.mobile && data.need) {
            $(this).val('提交成功！');
            // 清除显示动画
            $('.cooperation').removeClass('cooperation-show animatedShow');
            // 添加隐藏动画
            $('.cooperation').addClass('cooperation-hide animatedHide');
            // return false;
            setTimeout(function() {
                // 1秒后隐藏
                $('.cooperation').hide();
                // 清空各表单数据
                $("#username").val('');
                $("#phone").val('');
                $("#need").val('');
                // 按钮文字恢复为‘提交’
                $('#btn-submit').val('提交');
            }, 1000);

        } else {
            $(this).val('提交失败！');
        };

        return false;

    };

    $('#btn-submit').click(submit);




    $(window).scroll(function() {
        var $top = document.body.scrollTop;

        if ($top > 10) {

            $('.header').addClass('header-bg');

        }else{
            $('.header').removeClass('header-bg');            
        }
    });
});
