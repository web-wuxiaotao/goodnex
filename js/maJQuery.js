$(document).ready(function(){
	//	导航栏下拉框
	function fixnav(){
		$(".fix-header .nav > li").hover(function(){
			$(this).children("a").css({"background-color":"#79BE0B","color":"#fff"})
			$(this).children("ul").show(100)
		},function(){
			$(this).children("a").css({"background-color":"transparent","color":"#1e1e1e"})
			$(this).children("ul").hide(100)
		})
		$(".header .col .menu .nav > li").hover(function(){
			$(this).children("a").css({"background-color":"#79BE0B","color":"#fff"})
			$(this).children("ul").show(100)
		},function(){
			$(this).children("a").css({"background-color":"transparent","color":"#1e1e1e"})
			$(this).children("ul").hide(100)
		})
	}
	fixnav()

    //	fix-header
    function fixHeader(){
    	$(window).on("scroll",function(){
    		var top=$(window).scrollTop()
    		if(top>100){
    			$(".fix-header").css("display","block")
    			$(".fix-header").animate({top:0},500)
    		}
    		if(top<=100){
    			$(".fix-header").css("display","none")
    			$(".fix-header").animate({top:-70},500)
    		}
    	})
    }
    fixHeader()
    
    
    //选项卡
    function xuan(){
    	var flag=true
    	$(".two-third .clearfix li").click(function(){
    		var index=$(this).index()
    		if(!flag){
    			return
    		}
    		flag=false
    		$(".tabs-container .tab-content").css("display","none")
    		$(".tabs-container .tab-content").eq(index).css("display","block")
    		$(".two-third .clearfix li").css("border-top-color","#ebebeb")
    		$(".two-third .clearfix li").eq(index).css("border-top-color","#79be0b")
    		flag=true
    	})
    }
    xuan()
    
    
    //  banner效果
    $(".ls-layer").css("display","none").eq(0).css("display","block");
	var T=setInterval(active,3000);
	var Now=0;
	var Next=0;
	function active(){
	    Next++;
	    if(Next>=$(".ls-layer").length){
	        Next=0;
	    }
	    $(".ls-layer").css("display","none").eq(Next).css("display","block");
	    Now=Next;
	}
	function activeL(){
	    Next--;
	    if(Next<0){
	        Next=$(".ls-layer").length-1;
	    }
	    $(".ls-layer").css("display","none").eq(Next).css("display","block");
	    Now=Next;
	}
	//移入移出
	$("#banslider").mouseover(function(){
	    clearInterval(T);
	    $(".banzf").css("opacity",1);
	    $(".banyf").css("opacity",1);
	})
	$("#banslider").mouseout(function(){
	    T=setInterval(active,3000);
	    $(".banzf").css("opacity",0);
	    $(".banyf").css("opacity",0);
	})
	
	
	
	$(".banzf").click(function(){
	    activeL();
	})
	$(".banyf").click(function(){
	    active();
	})
	if($(".ls-layer1").css("display")){
	}
})





































