var car = {
		
		/**
		 * 初始化页面事件
		 */
		carInit : function(){
			// 将商品个数全部初始化为1
			$("input[name='num']").each(function(){
				$(this).val(1);
			}); 
			
			// 所有的复选框全部是不被选中状态
			$("input[name='check']").each(function(){
				$(this).attr("checked", false);
			});
			
			$("#checkAll").attr("checked", false);
			$("#checkAll2").attr("checked", false);
			
			// 上面全选复选框的点击事件
			$("#checkAll").unbind("click");
			$("#checkAll").bind("click",function(){
				car.carEvent.check({
					check1 : $(this),
					check2 : $("#checkAll2")
				});
			});
			
			// 下面全选复选框的点击事件
			$("#checkAll2").unbind("click");
			$("#checkAll2").bind("click",function(){
				car.carEvent.check({
					check1 : $(this),
					check2 : $("#checkAll")
				});
			});
			
			// 数量增加事件
			$("a[name='addNum']").each(function(){
				$(this).unbind("click");
				$(this).bind("click",function(){
					car.carEvent.addNum($(this));
				});
			});
			
			// 数量减少
			$("a[name='subNum']").each(function(){
				$(this).unbind("click");
				$(this).bind("click",function(){
					car.carEvent.subNum($(this));
				});
			});
			
			// 所有的复选框
			$("input[name='check']").each(function(){
				$(this).unbind("click");
				$(this).bind("click",function(){
					car.carEvent.checkOne($(this));
				});
			});
			
			
			// 删除
			$("a[name='del']").each(function(){
				$(this).unbind("click");
				$(this).bind("click",function(){
					// 点击删除之后更新总价格
					$(this).parent().parent().remove();
					if($(this).parent().siblings(":first").children(":first").attr("checked")){
						car.carEvent.getTotal();
					}
				});
			});
			
		},
		carEvent : {
			/**
			 * 单个复选框的点击事件
			 * @param {Object} addNum
			 */
			checkOne : function(checkNode){
				var flag = false;
				if(checkNode.attr("checked")){
					car.carEvent.getTotal();
					// 判断其他商品是否也处于选中状态
					// 如果是，则两个全选按钮也都勾选上
					var checks = document.getElementsByName("check");
					for(var i=0;i<checks.length;i++){
						if(!checks[i].checked){
							flag = false;
							return ;
						} else {
							flag = true;
						}
					}
				} else {
					// 没有选中的时候，判断其他商品是否处于选中状态，是的话，就勾选上全选按钮
					// 获取原来的总价
					var total = parseFloat($("#total").text());
					var price = parseFloat(checkNode.parent().siblings(".car-money").text());
					// 总的商品件数-1
					$("#total").text((total-price)+".00");
					var num = parseInt($("#num").text());
					$("#num").text(num-1);
					
					$("#checkAll").attr("checked",false);
					$("#checkAll2").attr("checked",false);
				}
				
				if(flag){
					$("#checkAll").attr("checked",true);
					$("#checkAll2").attr("checked",true);
				}
				
			},
			
			/**
			 * 商品数量添加
			 * @param {Object} checkJson
			 */
			addNum : function(addNum){
				// 这样就获取到了新增的商品个数
				var num = parseInt(addNum.prev().val())+1;
				addNum.prev().val(num);
				
				// 更新商品价格
				// 获取原来的总价
				var sum = parseInt(addNum.parent().next().text());
				// 获取单价
				var price = parseInt(addNum.parent().prev().text());
				addNum.parent().next().text((sum+price)+".00");
				
				// 如果当前条目是选中的话，修改商品数目，则更新总价
				if(addNum.parent().siblings(":first").children(":first").attr("checked")){
					// 直接修改总价
					car.carEvent.getTotal();
				}
				
				
			},
			
			/**
			 * 商品的减少
			 * @param {Object} checkJson
			 */
			subNum : function(subNum){
				var num = parseInt(subNum.next().val())-1;
				if(num < 0 ){
					alert("不能再减了...");
					return;
				}
				subNum.next().val(num);
				// 更新商品价格
				// 获取原来的总价
				var sum = parseInt(subNum.parent().next().text());
				// 获取单价
				var price = parseInt(subNum.parent().prev().text());
				subNum.parent().next().text((sum-price)+".00");
				if(subNum.parent().siblings(":first").children(":first").attr("checked")){
					// 直接修改总价
					car.carEvent.getTotal();
				}
			},
			
			/**
			 * 全选按钮
			 */
			check : function(checkJson){
				if(checkJson.check1.attr("checked")){
					// 当前选中状态 就将所有的checkbox选中 ，并且在下面显示出所有的价格
					car.carEvent.checkAllOrCancel(true, checkJson.check2);
					// 计算总价
					car.carEvent.getTotal();
				} else {
					// 取消全选，将价格全部归0
					car.carEvent.checkAllOrCancel(false, checkJson.check2);
					$("#total").text("0.00");
					$("#num").text("0");
				}
			},
			/**
			 * 自选框全选或者全部选
			 * @param {Object} opera
			 * @param {Object} check2
			 */
			checkAllOrCancel : function(opera,check2){
				$("input[name='check']").each(function(){
					$(this).attr("checked", opera);
				});
				check2.attr("checked",opera);
			},
			/**
			 * 获取商品总价
			 */
			getTotal : function(){
				// 
				var total  = 0;
				var index = 0;		
				$(".car-money").each(function(){
					// 先判断前面的单选框按钮有没有选择
					if($(this).siblings(":first").children(":first").attr("checked")){
						total += parseFloat($(this).text());
						index++;
					}
				});
				// 显示总价
				$("#total").text(total+".00");
				// 显示商品个数
				$("#num").text(index);
			}
		}
		
};

$().ready(function(){
	car.carInit();
});
