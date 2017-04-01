//重置banner高度
var heig = $(window).height();
var banImg = document.getElementById("banner");
banImg.style.height = heig + "px";
$(function() {
	//nav点击事件
	$("nav ul li").click(function(){
	  $("nav ul li").removeClass('nav-ate');
	  $(this).addClass('nav-ate');
	})
	

})

$(window).scroll(function() {
	//鼠标滚动切换第二屏
	var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; //滚轮滚动的距离
	var heig = $(window).height();
	if(top < 1) {
		$(".banner").css("margin-top", "0px");
		$(".share").css("display","none");
	};
	if(top > 1) {
		$(".banner").css("margin-top", -heig + "px")
		$(".share").css("display","block");
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