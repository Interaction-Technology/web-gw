$(function(){
	$(".ours-addr-node li").click(function(){
	$(".ours-addr-node li").removeClass("atcive")
	$(this).addClass("atcive")
	})
	
	$(".collaboration").click(function(){
		$(".cooperation").css("display","block")
		return false;
	})
	
	$(".close").click(function(){
		$(".cooperation").css("display","none")
		return false;
	})
})
