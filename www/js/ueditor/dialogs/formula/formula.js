/**
 * @author z.mofei bh-lay
 * 
 */
;(function(){
	var formula = {};
	var math_tool = {}
	var doc = $(editor.document);
	
	(function(ex){
		var math=$('#formula_val');
		math.mathquill('editable');
		
		function add(){
			dialog.onok = function () {
				var content = [
					'<span class="formula_cnt formula_val mathquill-rendered-math" contenteditable="false" data-formula="',
						math.mathquill('latex'),
					'">',
						math.mathquill('html'),
					'</span>'
				].join('');
				editor.execCommand("insertHTML", content);
			};
		}		
		function edit(dom) {
			if(!dom){
				return
			}
			math.mathquill("write", dom.attr('data-formula'));
			
			dialog.onok = function () {
				dom.attr({'data-formula':math.mathquill('latex')})
				.html(math.mathquill('html'));
			};
		}
		function right_slide(){
			var right_body = $('.formula_header_r_body');
			var delay;
			$('.formula_header_r').on('mouseover',function(){
				clearTimeout(delay);
				delay = setTimeout(function(){
					right_body.css({height:'auto'});
				},100);
			}).on('mouseleave',function(){
				clearTimeout(delay);
				delay = setTimeout(function(){
					right_body.css({height:'100%'});
				},300);
			});
		}
		
		var init = function(){
			var txt = txt;
			
			$('.math_ico').on('click','span',function(){
				var txt = $(this).attr('data-latex');
				math.mathquill('write','\\'+txt);
			});
			
			var formula_cnt_active = doc.find('.formula_cnt_active');
			
			if(formula_cnt_active.length){
				edit(formula_cnt_active);
				formula_cnt_active.removeClass('formula_cnt_active');
			}else{
				add();
			}
			right_slide();
		};
		ex.init = init;
	})(math_tool);

// all start
	$(function(){
	
		math_tool.init();

	});
})();