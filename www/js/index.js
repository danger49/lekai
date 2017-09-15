var inon = {
	mp3path: '/mp3s/',
	init: function() {
		
		if($('#homepage-quotes li').length > 1) {
			$('#homepage-quotes ul').cycle({timeout: 3000});
		}

		$('#scroll-to-player').click(function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $("#music-player").offset().top
			}, 500);
		});

		$('#scroll-to-video-player2').click(function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $("#video-cta").offset().top
			}, 500);
		});		
		inon.audioplayer();
	},
	audioplayer: function() {
		if($('#jquery_jplayer_1').length > 0 && typeof playermp3s != undefined) {
			new jPlayerPlaylist({
				jPlayer: "#jquery_jplayer_1",
				cssSelectorAncestor: "#jp_container_1"
			}, playermp3s, {
				swfPath: "http://www.inonzur.com/wp-content/themes/inon-zur/js/jplayer/Jplayer.swf",
				supplied: "mp3",
				wmode: "window",
				smoothPlayBar: true,
				keyEnabled: true,
				playlistOptions: {
					enableRemoveControls: false
				}
			});
		}
	}
};


$(function() {  
	//音频播放	   
	inon.init();
	
	//页面跳转
	var _href = document.location.toString();
	var _hrefSplit = _href.split("#");
	var _hrefShow = _hrefSplit[1];

	var keyIndex=_href.indexOf("#");
	if(keyIndex == -1){
		menu () 
	}else{
		var _hrefShowTop = $($("#"+_hrefShow)).offset().top - 100;
		$("html,body").stop().animate({scrollTop:_hrefShowTop},500);
	}
	menu ();
	
	//服务图标放大
	var thumbnail = {
		imgIncrease : 13, /* 增加图像像素（变焦） */
		effectDuration : 300, /* 效果的持续时间（变焦和标题） */
		
		imgWidth : $('.serviceList dd .serviceImg').find('img').width(), 
		imgHeight : $('.serviceList dd .serviceImg').find('img').height()
	};

	//当鼠标移到列表项...
	$('.serviceList dd .serviceImg').hover(function(){
		$(this).find('img').stop().animate({
			/* 变焦效果，提高图像的宽度 */
			width: parseInt(thumbnail.imgWidth) + thumbnail.imgIncrease,
			left: thumbnail.imgIncrease/2*(-1),
			top: thumbnail.imgIncrease/2*(-1)
		},{ 
			"duration": thumbnail.effectDuration,
			"queue": false
		});
		//当鼠标离开...
	}, function(){
	
		//发现图像和动画...
		$(this).find('img').animate({
			/* 回原来的尺寸（缩小） */
			width: thumbnail.imgWidth,
			/* 左侧和顶部位置恢复正常 */
			left: 0,
			top: 0

		}, thumbnail.effectDuration);
	});
	
})

//顶部导航
function menu () {
$(".menu dd a").click(function(){
	var hr = $(this).attr("href");
	var anh = $(hr).offset().top - 100;
	if(!$(this).hasClass("current")) {
		$(".menu dd a").removeClass("current");
		$(this).addClass("current");
	}
	$(".header").animate({opacity:0.9},500);
	if($(".menu dd.m1 a").hasClass("current")) {
		$(".header").animate({opacity:1},300);
	}
	
	$("html,body").stop().animate({scrollTop:anh},500);
	return false
})
}