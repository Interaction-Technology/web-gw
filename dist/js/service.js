$(function() {

    var $node1 = $('.line-node-1');
    var $node2 = $('.line-node-2');
    var $node3 = $('.line-node-3');
    var $node4 = $('.line-node-4');
    var $node5 = $('.line-node-5');
    $flowInfo = $('.flow-info');

    $node1.mouseenter(function() {
        $(this).addClass('on');
        $('.flow-1').addClass('onn');
    });
    $node2.mouseenter(function() {
        $(this).addClass('on');
        $('.flow-2').addClass('onn');
    });
    $node3.mouseenter(function() {
        $(this).addClass('on');
        $('.flow-3').addClass('onn');
    });
    $node4.mouseenter(function() {
        $(this).addClass('on');
        $('.flow-4').addClass('onn');
    });
    $node5.mouseenter(function() {
        $(this).addClass('on');
        $('.flow-5').addClass('onn');
    });





    $(window).scroll(function() {

    //鼠标滚动
    var $top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; //滚轮滚动的距离
    
    var $node1 = $('.line .line-node-1');
    var $node2 = $('.line .line-node-2');
    var $node3 = $('.line .line-node-3');
    var $node4 = $('.line .line-node-4');
    var $node5 = $('.line .line-node-5');

    var $flowInfo = $('.flow .flow-info');

    if ($top > 1000) {

        $node1.addClass('on');
        $node2.addClass('on');
        $node3.addClass('on');
        $node4.addClass('on');
        $node5.addClass('on');       

        $flowInfo.addClass('onn')
    };
});
});
