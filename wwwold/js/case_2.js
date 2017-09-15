
function detail(obj,type, caseId){
	var getid = caseId;	
	$.ajax({
		type: "GET",
		url:"http://192.168.1.200/case/detail/",
		data:{id:getid},
		dataType:'json',
		success:function(response){
            if(response.code && response.code != undefined && response.code != null && response.code != '' && response.code=='200'){
            	$("#case"+type+" .caseCon .casePlay .caseInfro_aTit").html(response.rep.caseInfo.name);
            	$("#case"+type+" .caseCon .casePlay .caseInfro_aSty").html(response.rep.caseInfo.client+' '+response.rep.caseInfo.lable);
            	$("#case"+type+" .caseCon .casePlay .caseInfro_description").html(response.rep.caseInfo.description);

				$("#jplayer_video_"+type).jPlayer("destroy");//重置视频
				$("#jquery_jplayer_"+type).jPlayer("destroy");//重置音频
	
				//视频
				$("#jplayer_video_"+type).jPlayer({ready: function () { 
					$(this).jPlayer('setMedia', {
						m4v:response.rep.caseInfo.video,
						poster: response.rep.caseInfo.img,
						title:response.rep.caseInfo.name
					});
					},
					play: function() {
						$(this).jPlayer('pauseOthers');
					},
					size: {
						width: "490px",
						height: "285px"
					},
					cssSelectorAncestor: "#jp_gui_video_"+type,
					swfPath: 'lib',
					supplied: 'm4v',
					smoothPlayBar: true,
					keyEnabled: true
				});
				
				//音频列表
				new jPlayerPlaylist({
					jPlayer: "#jquery_jplayer_"+type,
					cssSelectorAncestor: "#jp_container_"+type
				}, response.rep.list,
				{
					swfPath: 'lib',
					supplied: "mp3",
					wmode: "window",
					useStateClassSkin: true,
					autoBlur: false,
					smoothPlayBar: true,
					keyEnabled: true
				});

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
	
	//音频 视频 初始化
	detail(this,1, 1)
	detail(this,2, 4)
	detail(this,3, 5)
	detail(this,4, 6)
	detail(this,5, 7)
})