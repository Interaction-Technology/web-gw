//重置banner高度
var heig = $(window).height();
var banImg = document.getElementById("banner");
banImg.style.height = heig + "px";
$(function() {
	//map 呼吸灯	
	$(".ours-addr-node li").click(function() {
		$(".ours-addr-node li").removeClass("atcive");
		$(this).addClass("atcive")
	})

	//map点击事件

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

	//合作弹窗
	$(".collaboration").click(function() {
		$(".cooperation").css("display", "block");
		return false;
	})

	$(".close").click(function() {
			$(".cooperation").css("display", "none");
			return false;
		})
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

$(window).scroll(function() {
	//鼠标滚动切换第二屏
	var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; //滚轮滚动的距离
	var heig = $(window).height();
	if(top < 1) {
		$(".banner").css("margin-top", "0px")
	};
	if(top > 1) {
		$(".banner").css("margin-top", -heig + "px")
			//局部刷新
		$(".map").load(location.href + " .map");
	};
	if(top = heig) {
		$(".cnt-service ul li").css({
			"margin-top": "0px",
			"opacity": "1",

		})
	};
});