$(function() {
	
    // 核心成员切换
    var $tab = $('#core-member-list > li');
    var $coreMember = $('#core-member-info > li');

    $coreMember.hide();
    $coreMember.eq(0).show();

    $tab.on('click', function() {

        var $this = $(this);
        var $t = $this.index();

        $tab.removeClass('list-on');
        $(this).addClass('list-on');
        $coreMember.hide().removeClass('info-on');
        $coreMember.eq($t).show().addClass('info-on');
    });


    // 发展流程
    var $dev = $('#development > div');
    // 鼠标滑入
    $dev.mouseenter(function(event) {

        // 隐藏第一个
        $dev.eq(0).removeClass('show');
        // 显示当前
        $(this).addClass('show');
        // 鼠标离开
    }).mouseleave(function(event) {
        // 隐藏当前
        $(this).removeClass('show');
        // 显示第一个
        $dev.eq(0).addClass('show');
    });

})
