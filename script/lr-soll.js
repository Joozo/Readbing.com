var w1=$(window).outerWidth();
$(function(){
   if(w1<=768){
	 $(".huandong-nav").outerWidth(w1);	
     var  w=$(".huandong-nav li").eq(0).outerWidth();
	$("#ul1").outerWidth(w*$(".huandong-nav li").length+"px");
/*	 $(document).on('touchmove',function(ev){
		ev.originalEvent.preventDefault();
	
		})*/
		var downX=0;
		var disLeft=0;
		var iNow=0;
		var Timdate=0;
		
		var Byd=true;
		$("#ul1").on("touchstart",function(ev){
			var touch=ev.originalEvent.changedTouches[0];
			
			downX=touch.pageX;
			disLeft=$(this).offset().left;
			Timdate = Date.now();
			
			$("#ul1").on("touchmove",function(ev){
				var touch=ev.originalEvent.changedTouches[0];
				  
		      if($(this).offset().left>=0){
				  if(Byd){
					 Byd=false;
					  downX=touch.pageX;
					  }
				  
				 $(this).css("left",(touch.pageX - downX)/3 + 'px')
				  }
				 else if($(this).offset().left<=$(".huandong-nav ").width()-$("#ul1").width()){
					  if(Byd){
					   Byd=false;
					  downX=touch.pageX;
					  }
					//alert(($(".huandong-nav").width()-$("#ul1").width())+ 'px')
                     $(this).css("left",(touch.pageX - downX)/3+($(".huandong-nav").width()-$("#ul1").width())+ 'px')
				        }
					 else{
						$(this).css("left",(touch.pageX - downX)+ disLeft + 'px') 
						 
						 }
	                  })
				 
		$("#ul1").on('touchend',function(){
				var touch=ev.originalEvent.changedTouches[0];
		        if (touch.pageX<downX)
				    {  
					 if(iNow != $(".huandong-nav li").length-1){
						//alert($(".huandong-nav li").width());
						 if(downX - touch.pageX>=(Date.now() - Timdate < 100 &&downX - touch.pageX >10)){
							  iNow++;
							 }
			              }
					  $("#ul1").animate({left: - iNow *$(".huandong-nav li").width()},400 , 'linear');
			           }
					else{
						   if(iNow !=0){
							  if(touch.pageX-downX >= (Date.now() - Timdate < 100 &&touch.pageX-downX >10)){
								 iNow--;
								  }
							   }
						    $("#ul1").animate({left: - iNow *$(".huandong-nav li").width()},400 ,'linear');
						   }
					$(this).on('touchmove') = null;
			       $(this).on('touchend') = null;
				})	
	
				
			})
	}
	})
// JavaScript Document