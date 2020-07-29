var validate = {
	// 用来初始化操作
	initEvent : function(){
		// 登录注册的切换
		$(".log-title, .log-title-a").click(function(){
			$("#log-border").removeClass("display-none").addClass("display-block");
			$("#reg-border").removeClass("display-block").addClass("display-none");
		});
		
		$(".reg-title, .reg-title-a").click(function(){
			$("#log-border").removeClass("display-block").addClass("display-none");
			$("#reg-border").removeClass("display-none").addClass("display-block");
		});
		
		
		// 注册按钮的点击事件
		$(".reg-btn").click(function(){
			if(validate.register.checkName() && validate.register.checkPsw() && 
				validate.register.confirmPsw() && validate.register.checkPhone() && validate.register.checkEmail()){
				alert("注册成功...");
				// submit 
				return true;
			} else {
				alert("请继续填写...");
				return false;
			}
		});
		
		// 统一的为页面上的文本框添加失去焦点事件
		$("input").each(function(){
			if($(this).attr("name") == "rname"){
				$(this).blur(function(){
					// 检查用户名是否符合规范
					validate.register.checkName();
				});
			}
			
			// 密码
			if($(this).attr("name") == "psw"){
				$(this).blur(function(){
					validate.register.checkPsw();
				});
			}
			// 再次输入密码
			if($(this).attr("name") == "repsw"){
				$(this).blur(function(){
					validate.register.confirmPsw();
				});
			}
			// 出生日期
			if($(this).attr("name") == "borndate"){
				$(this).blur(function(){
				});
			}
			// 手机号码
			if($(this).attr("name") == "phone"){
				$(this).blur(function(){
					validate.register.checkPhone();
				});
			}
			// 电子邮件
			if($(this).attr("name") == "email"){
				$(this).blur(function(){
					validate.register.checkEmail();
				});
			}
		});
		
	},
	register : {
		checkName : function(){
			return validate.checkAll({
				regex :  /^\w{5,}$/ ,
				value : $("input[name='rname']").val(),
				nextDiv : $("input[name='rname'] +div")
			});
		},
		checkPsw : function(){
			return validate.checkAll({
				regex :  /^\w{6,}$/ ,
				value : $("input[name='psw']").val(),
				nextDiv : $("input[name='psw'] +div")
			});
		},
		checkPhone : function(){
			return validate.checkAll({
				regex :  /^1[358]\d{9}$/ ,
				value : $("input[name='phone']").val(),
				nextDiv : $("input[name='phone'] +div")
			});
		},
		checkEmail : function(){
			return validate.checkAll({
				regex :  /^\w+@[0-9a-zA-Z]+(\.[a-zA-Z]+)+$/ ,
				value : $("input[name='email']").val(),
				nextDiv : $("input[name='email'] +div")
			});
		},
		confirmPsw : function(){
			// 获取第一次输入的密码
			var psw = $("input[name='psw']").val();
			// 获取第二次输入的密码
			var repsw = $("input[name='repsw']").val();
			
			if(psw == repsw){
				$("input[name='repsw']").next().show();
				$("input[name='repsw']").next().next().hide();
				return true;
			} else {
				$("input[name='repsw']").next().hide();
				$("input[name='repsw']").next().next().show();
				return false;
			}
		}
	},
	
	checkAll : function(infos){
		if(!infos.regex.test(infos.value)){
			infos.nextDiv.css("display","none");
			infos.nextDiv.next().css("display","block");
			return false;
		} else {
			infos.nextDiv.next().css("display","none");
			infos.nextDiv.css("display","block");
			return true;
		}
	}
};

// 在页面加载的时候进行初始化操作
$().ready(function(){
	validate.initEvent();
});