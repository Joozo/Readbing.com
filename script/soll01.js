// JavaScript Document

$(function(){
    
	 $(document).on("scroll", function(){
		 
		if($(document).scrollTop()>=10||$(window).width()<=768){
			$("#welink-nav").css({"position":"fixed","background-color":"rgba(246,246,246,1)",'border-bottom':'1px solid rgba(239,239,239,1)'})
	          $(".welin-alink").css({ "background-color":"rgba(0,0,0,0)"});
			
		 $("#welink-nav .active span").css({"color":"#4385f5"});
		 
		    $(".welink_menu ").css({"background-color":"rgba(246,246,246,1)"});
			$(".welink_menu").addClass("welink-sollmenu");
		
			$(".divider").css({"border-bottom":"1px solid #efefef" });
		
			$(".logn-bj").addClass("logn-bj0");
			$(".wek-fot04").css({"opacity":"1","background-color":"rgba(240,240,240,1)"});
			$(".dianhua").addClass("welink-color");
			$(".welink-ico").addClass("welink-ico-lan");
			$(".chaolin-hover").addClass("chaolin-hover0");
			}
			if($(document).scrollTop()>=500){
			$(".tuigauang ").css({"position":"fixed","top":61,"z-index":"9","background-color":"#fff"});
			$(".wenhua-soll01").css({"position":"fixed","top":61,"z-index":"9","background-color":"#fff"});
			$(".wenhua-soll").css({"position":"fixed","top":61});
			
			}
		else if($(document).scrollTop()>=120){
			 $(".wenhua-soll01").css({"position":"","top":0});
			$(".wenhua-soll").css({"position":"","top":0});
			 $(".tuigauang ").css({"position":"","top":0});
			
			}
		if($(window).width()<=768){
			 if($(document).scrollTop()>=200){
			$(".tuigauang").css({"position":"fixed","top":60,"z-index":"9","background-color":"#fff"});
			$(".wenhua-soll01").css({"position":"fixed","top":60,"z-index":"9","background-color":"#fff"});
			$(".wenhua-soll").css({"position":"fixed","top":60})
			}
		else if($(document).scrollTop()>=120){
			 $(".tuigauang").css({"position":"","top":0});
			 $(".wenhua-soll01").css({"position":"","top":0});
			$(".wenhua-soll").css({"position":"","top":0})
			
			}
			}
			
	     else if($(document).scrollTop()==0){	
		   $("#welink-nav").css({"position":"",'background-color':'','border-bottom':'','opacity':'','box-shadow': ''});
		   $(".welin-alink").css({ "background-color":""});
			$(".welink_menu ").css({"background-color":"",'box-shadow': ''});
			$(".welink_menu").removeClass("welink-sollmenu");
			
			$(".divider").css({"border-bottom":"" })
			$(".dropdown-menu").css({ "border":""});
			$(".navbar-nav>.open>a").css({"background-color":""});
		    //$(".navbar-toggle a:hover").css({"background-color":""});
			$(".logn-bj").removeClass("logn-bj0");
			$(".wek-fot04").css({"opacity":"0"});
			$(".dianhua").removeClass("welink-color");
			$(".welink-ico").removeClass("welink-ico-lan");
			$("#welink-nav .active span").css({"color":"#fac343"});
			$(".chaolin-hover").removeClass("chaolin-hover0");
		}
		else{ 
		   return false ;
		   }
		})
	
	
	})