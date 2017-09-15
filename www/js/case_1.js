function jpAudio(id,cssSelector,caseDetail) {
	var caseMp3 = 'http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3';
	if (caseDetail != null) {
		if (caseDetail.src != undefined && caseDetail.src != '' && caseDetail.src != null) {
			caseMp3 = caseDetail.src;
		}
	}
	$(id).jPlayer({
		ready: function(event) {
			$(this).jPlayer('setMedia', {
				mp3: caseMp3
			});
		},
		play: function() {
			$(this).jPlayer('pauseOthers');
		},
		cssSelectorAncestor: cssSelector,
		swfPath: 'lib',
		supplied: 'mp3',
		smoothPlayBar: true,
		keyEnabled: true,
		wmode: 'window'
	});
}
//jplayer - 视频
function jpVideo(id,cssSelector,caseInfo) {
	var videosrc = 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v';
	var poster = 'http://www.lkmusic.cn/jplayer/case/Big_Buck_Bunny_Trailer_480x270.png'
	if (caseInfo != null) {
		if (caseInfo.video != undefined && caseInfo.video != '' && caseInfo.video != null) {
			videosrc = caseInfo.video;
		}
		if (caseInfo.img != undefined && caseInfo.img != '' && caseInfo.img != null) {
			poster = caseInfo.img;
		}
	}
	$(id).jPlayer({
		ready: function(event) {
			$(this).jPlayer('setMedia', {
				m4v: videosrc,
				poster: poster
			});
		},
		play: function() {
			$(this).jPlayer('pauseOthers');
		},
		size: {
			width: "490px",
			height: "285px"
		},
		cssSelectorAncestor: cssSelector,
		swfPath: 'lib',
		supplied: 'm4v',
		smoothPlayBar: true,
		keyEnabled: true
	});
}

function detail(type, caseId){
	var getid = caseId;
	$.ajax({
		type: "GET",
		url:"http://www.lkmusic.cn/case/detail/",
		data:{id:getid},
		dataType:'json',
		success:function(response){
            if(response.code && response.code != undefined && response.code != null && response.code != '' && response.code=='200'){
            	$("#case"+type+" .caseCon .casePlay .caseInfro_aTit").html(response.rep.caseInfo.name);
            	$("#case"+type+" .caseCon .casePlay .caseInfro_aSty").html(response.rep.caseInfo.client+' '+response.rep.caseInfo.lable);
            	$("#case"+type+" .caseCon .casePlay .caseInfro_description").html(response.rep.caseInfo.description);
            	var list = response.rep.list;
            	for(var i in list){
            		$("#case"+type+" .jp-audio").attr("id","jp_gui_audio_"+i);	
            		$("#case"+type+" .jp-audio").parent().find(".jp-jplayer").attr("id","jplayer_audio_"+i);
            		
            		jpAudio("#jplayer_audio_"+i,"#jp_gui_audio_"+i, list[i]);
            	}
            	jpVideo("#jplayer_video_"+type,"#jp_gui_video_"+type, response.rep.caseInfo);
            }else{
            }
        }
	});
}
$(function() {     
	$("#scroll01").allOneScroll({scrollWidth:".marqueeScroll_con ul"});
	$("#scroll02").allOneScroll({scrollWidth:".marqueeScroll_con ul"});
	$("#scroll03").allOneScroll({scrollWidth:".marqueeScroll_con ul"});
	$("#scroll04").allOneScroll({scrollWidth:".marqueeScroll_con ul"});
	$("#scroll05").allOneScroll({scrollWidth:".marqueeScroll_con ul"});
	$(".marqueeScroll_con li a").hover(function() {
		$(this).addClass("current");
	},function() {
		$(this).removeClass("current");
	}
	);
	
	//jplayer - 音频调用
	$(".jp-audio").each(function(i) {
		$(this).attr("id","jp_gui_audio_"+i);	
		$(this).parent().find(".jp-jplayer").attr("id","jplayer_audio_"+i);
		jpAudio("#jplayer_audio_"+i,"#jp_gui_audio_"+i, null);
	 })
	
	//jplayer - 视频调用
	jpVideo("#jplayer_video_1","#jp_gui_video_1", null);
	jpVideo("#jplayer_video_2","#jp_gui_video_2", null);
	jpVideo("#jplayer_video_3","#jp_gui_video_3", null);
	jpVideo("#jplayer_video_4","#jp_gui_video_4", null);
	jpVideo("#jplayer_video_5","#jp_gui_video_5", null);

})