var content = {
	
	// 初始化页面的所有事件
	contentInit : function(){
		
		// 为五张小图片添加事件
		$(".img-small").each(function(){
			$(this).unbind("mouseover");
			$(this).bind("mouseover", function(){
				content.contentEvent.showBig($(this));
			});
		});
		
		// 发表评论按钮事件
		$("#reply").unbind("click");
		$("#reply").bind("click",function(){
			content.contentEvent.reply();
		});
		
	},
	
	// 页面所有的事件
	contentEvent : {
		
		// 显示大图片
		showBig : function(small){
			$("#bigImage").attr("src",  small.attr("src"));
		},
		
		// 发表回复
		reply :  function(){
			/**
			 * <div class="reply-cont font-yahei">
                        <p style="color:#999; text-align:right;">
                            <span class="user-name">网友</span>
                            11/13/2013&nbsp;1:43:08
                        </p>
                        <p class="reply-font">
                            这是回复
                        </p>
                        <p class="reply-button">
                            <a href="javascript:void(0)">回复</a>
                        </p>
                    </div>
			 */
			
			// 1.获取用户输入的内容
			var contents = editor.html();
			// 2.动态生成以上代码
			$div = $("<div/>");
				$div.attr("class","reply-cont font-yahei");
			
			$p1 = $("<p/>");
				$p1.attr("style","color:#999; text-align:right;");
					$span = $("<span/>")
					$span.attr("class","user-name");
					$span.text("网友");
				$p1.text(" 11/13/2013 1:43:08");
				$p1.append($span);
			
			$p2 = $("<p/>");
				$p2.attr("class","reply-font");
				$p2.html(contents);
			
			$p3 = $("<p/>");
				$p3.attr("class","reply-button");
					$a = $("<a/>");
					$a.attr("href","javascript:void(0)");
					$a.text("回复");
				$p3.append($a);
				
			$div.append($p1);
			$div.append($p2);
			$div.append($p3);
			
			$("#showReply").append($div);
			editor.html('');
		}
		
	}
	
	
};

$().ready(function(){
	content.contentInit();
});