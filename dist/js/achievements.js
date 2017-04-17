$(function(){
	// 成果列表切换
	var $tab = $('#tab > span');
	var $proList = $('#pro-list > ul');

	$proList.hide();
	$proList.eq(0).show();

	$tab.on('click',function(){

		var $this = $(this);
		var $t = $this.index();

		$tab.removeClass('active');
		$(this).addClass('active');
		$proList.hide();
		$proList.eq($t).show();
	})

})