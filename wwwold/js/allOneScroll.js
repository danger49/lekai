(function($) {
	$.fn.allOneScroll = function(options){
		var defaults = {
			showCon:".marqueeScroll_con ul",
			controlNum:".marqueeScroll_control a",
			controlLeft:".marqueeScroll_control_left a",
			controlRight:".marqueeScroll_control_right a",
			scrollWidth:".marqueeScroll_con ul",
			currentClass: "on",
			showTime:400000,
			showIndex: 0,
			timer:null
		}
		var options = $.extend(defaults,options),
			 currentIndex = 0,
			 showBox = $(this),
			 showConDom = $(this).find(options.showCon),
			 showConDomLi = showConDom.find("li"),
			 controlLeftDom = $(this).find(options.controlLeft),//左按钮
			 controlRightDom = $(this).find(options.controlRight),//右按钮
			 scrollWidth = $(this).find(options.scrollWidth).width(),//滚动宽度
			 ulWidth = showConDomLi.length*showConDomLi.width()//ul的总宽度
			 
		showConDom.css("width",ulWidth);//算出ul的总宽度
		
		//取得滚动的总体数量
		var allNum = Math.ceil(ulWidth/scrollWidth);
		
		//取得可视区域滚动个数
		var visibleNum = showConDom.parent().width()/showConDomLi.width()
		
		//单张滚动时的num
		if(scrollWidth == showConDomLi.width()){//如果是单张滚动 allNum = (allNum -显示宽度/单张滚动宽度)+1
			allNum = (allNum-visibleNum)+1
		}
		
		//数字
		var str = "";
		for(var i =0; i<showConDomLi.length;i++){
			str += "<a href='#'></a>";
		}
		showBox.append("<div class='marqueeScroll_control'>"+ str +"</div>").find("a");//添加控制按钮
		showBox.append("<div class='marqueeScroll_over'></div>");//添加遮罩层
		
		var controlNumDom = jQuery(this).find(options.controlNum);
		controlNumDom.eq(options.showIndex).addClass(options.currentClass);
		controlNumDom.click(function(){
			jQuery(this).addClass(options.currentClass).siblings().removeClass(options.currentClass);
			currentIndex = jQuery(this).index();
			showConDom.animate({"marginLeft":-(scrollWidth*currentIndex)+"px"},600,'easeInOutExpo')
			return false
		})
		
		//控制左右箭头 显示状态
		if(showConDomLi.width()*showConDomLi.length <= showConDom.parent().width()){
				controlLeftDom.hide();
				controlRightDom.hide()
			}else{
				controlLeftDom.show();
				controlRightDom.show()
			}
		
		
		//滚动方法
		function scrollFn() {
			showConDom.animate({"marginLeft":-(scrollWidth*currentIndex)+"px"},600,'easeInOutExpo')
			controlNumDom.eq(currentIndex).addClass(options.currentClass).siblings().removeClass(options.currentClass);
		}
		
		//开启定时器
		options.timer=setInterval(function(){	
			  scrollFn()
		},options.showTime)
		
		//左箭头 方法
		controlLeftDom.click(function() {
			if(currentIndex == 0){
				return false;
			}else{
				currentIndex--;	
				scrollFn()
			}							  							  
		})
		//右箭头 方法
		controlRightDom.click(function() {	
			if(currentIndex == allNum-1 || showConDomLi.width()*showConDomLi.length < showConDom.parent().width()){
				return false;
			}else{
				currentIndex++;
				scrollFn()
			}					  
		})
		
		//外层hover时控制定时器的开关
		showBox.hover(function() {
			clearInterval(options.timer)								  
		},function(){
			options.timer=setInterval(function(){	
			   scrollFn()
			},options.showTime)
		}
		)
		
	}
})(jQuery);
