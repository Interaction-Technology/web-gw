$(function(){
	//合作弹窗
	$(".collaboration").click(function() {
		$(".cooperation").css("display", "block");
		return false;
	})

	$(".close").click(function() {
			$(".cooperation").css("display", "none");
		return false;
		})
	
	//map 呼吸灯	
	$(".ours-addr-node li").click(function() {
		$(".ours-addr-node li").removeClass("atcive");
		$(this).addClass("atcive")
	})

	$('#cale li').click(function() {
		var cls = $(this).attr('type');//获取attr
		var e = $('#address,#cale-img').find('.' + cls);
		//地址详细侧样式
		$('#address dl').css({
			"margin-top": "40px",
			"opacity": "0",

		});
		$('#cale-img li').css({
			"margin-top": "50px",
			"opacity": "0",

		});
		e.css({
			"margin-top": "0px",
			"opacity": "1",
		})
		//地址右侧
		var text = $(this).children().text();
		$(this).siblings().children().css("display","block");
		$(this).children().css("display","none");
		
	});

	
		//侧边栏弹窗
	$(".share li").click(function() {
		$(".share li").children('dl').css("display", "none");
		$(this).children('dl').css("display", "block");
	});
	$(".share li .w-close").click(function() {
		$(this).parent().parent().css("display", "none");
		return false;
	});
})