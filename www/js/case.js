
function detail(obj,type, caseId){
	var getid = caseId;	
	$.ajax({
		type: "GET",
		url:"./case/detail/",
		data:{id:getid},
		dataType:'json',
		success:function(response){
            if(response.code && response.code != undefined && response.code != null && response.code != '' && response.code=='200'){
            	$("#case"+type+" .caseInfro_aTit").html(response.rep.caseInfo.name);
            	$("#case"+type+" .caseInfro_aSty").html(response.rep.caseInfo.client+' '+response.rep.caseInfo.lable);
            	$("#case"+type+" .caseInfro_description").html(response.rep.caseInfo.description);

				$("#jquery_jplayer_"+type).jPlayer("destroy");//重置视频
				//视频
				new jPlayerPlaylist({
					jPlayer: "#jquery_jplayer_"+type,
					cssSelectorAncestor: "#jp_container_"+type
				}, response.rep.list, {
					swfPath: 'lib',
					supplied: "webmv, ogv, m4v, oga, mp3",
					useStateClassSkin: true,
					autoBlur: false,
					smoothPlayBar: true,
					keyEnabled: true,
					audioFullScreen: true
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