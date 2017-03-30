$(function(){
	$(".ours-addr-node li").click(function(){
	$(".ours-addr-node li").removeClass("atcive");
	$(this).addClass("atcive")
	})
	
	//合作弹窗
	$(".collaboration").click(function(){
		$(".cooperation").css("display","block");
		return false;
	})
	
	$(".close").click(function(){
		$(".cooperation").css("display","none");
		return false;
	})
	//侧边栏弹窗
	 $(".share li").click(function(){
	 	$(".share li").children('dl').css("display","none");
	 	$(this).children('dl').css("display","block");
	 })
	  $(".share li .w-close").click(function(){
	  	$(this).parent().parent().css("display","none");
	  	return false;
	  })
	 
	 
	  
})

 
 
