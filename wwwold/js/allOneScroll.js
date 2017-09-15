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
			 controlLeftDom = $(this).find(options.controlLeft),//��ť
			 controlRightDom = $(this).find(options.controlRight),//�Ұ�ť
			 scrollWidth = $(this).find(options.scrollWidth).width(),//�������
			 ulWidth = showConDomLi.length*showConDomLi.width()//ul���ܿ��
			 
		showConDom.css("width",ulWidth);//���ul���ܿ��
		
		//ȡ�ù�������������
		var allNum = Math.ceil(ulWidth/scrollWidth);
		
		//ȡ�ÿ��������������
		var visibleNum = showConDom.parent().width()/showConDomLi.width()
		
		//���Ź���ʱ��num
		if(scrollWidth == showConDomLi.width()){//����ǵ��Ź��� allNum = (allNum -��ʾ���/���Ź������)+1
			allNum = (allNum-visibleNum)+1
		}
		
		//����
		var str = "";
		for(var i =0; i<showConDomLi.length;i++){
			str += "<a href='#'></a>";
		}
		showBox.append("<div class='marqueeScroll_control'>"+ str +"</div>").find("a");//��ӿ��ư�ť
		showBox.append("<div class='marqueeScroll_over'></div>");//������ֲ�
		
		var controlNumDom = jQuery(this).find(options.controlNum);
		controlNumDom.eq(options.showIndex).addClass(options.currentClass);
		controlNumDom.click(function(){
			jQuery(this).addClass(options.currentClass).siblings().removeClass(options.currentClass);
			currentIndex = jQuery(this).index();
			showConDom.animate({"marginLeft":-(scrollWidth*currentIndex)+"px"},600,'easeInOutExpo')
			return false
		})
		
		//�������Ҽ�ͷ ��ʾ״̬
		if(showConDomLi.width()*showConDomLi.length <= showConDom.parent().width()){
				controlLeftDom.hide();
				controlRightDom.hide()
			}else{
				controlLeftDom.show();
				controlRightDom.show()
			}
		
		
		//��������
		function scrollFn() {
			showConDom.animate({"marginLeft":-(scrollWidth*currentIndex)+"px"},600,'easeInOutExpo')
			controlNumDom.eq(currentIndex).addClass(options.currentClass).siblings().removeClass(options.currentClass);
		}
		
		//������ʱ��
		options.timer=setInterval(function(){	
			  scrollFn()
		},options.showTime)
		
		//���ͷ ����
		controlLeftDom.click(function() {
			if(currentIndex == 0){
				return false;
			}else{
				currentIndex--;	
				scrollFn()
			}							  							  
		})
		//�Ҽ�ͷ ����
		controlRightDom.click(function() {	
			if(currentIndex == allNum-1 || showConDomLi.width()*showConDomLi.length < showConDom.parent().width()){
				return false;
			}else{
				currentIndex++;
				scrollFn()
			}					  
		})
		
		//���hoverʱ���ƶ�ʱ���Ŀ���
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
