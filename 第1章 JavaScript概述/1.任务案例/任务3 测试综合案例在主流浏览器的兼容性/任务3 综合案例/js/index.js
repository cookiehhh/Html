var index = {

    /**
     * 返回顶部
     */
    back2top: function(){
        // 监听屏幕的滚动事件
        $(window).scroll(function(){
            if ($(window).scrollTop() > 100) {
                $("#back-to-top").show();
            }
            else {
                $("#back-to-top").hide();
            }
        });
        
        // 添加返回顶端的点击事件
        $(".back-top").click(function(){
            // 滚动的动画
            $('body,html').animate({
                scrollTop: 0
            });
        });
    },
    
    /**
     * 热点切换
     */
    hotChange: function(){
        // 今日热点
        var todayhots = document.getElementById("today-hot-title");
        // 48小时热点
        var twodayhots = document.getElementById("twodays-hot-title");
        
        // 添加事件
        todayhots.onmouseover = function(){
        	todayhots.className = "red font-yahei float-left pdleft pdright";
			twodayhots.className = "head-color font-yahei float-left pdleft pdright";
        	document.getElementById("today-hot-content").style.display = "block";
		}
        
        twodayhots.onmouseover = function(){
        	twodayhots.className = "red font-yahei float-left pdleft pdright";
			todayhots.className = "head-color font-yahei float-left pdleft pdright";
			document.getElementById("today-hot-content").style.display = "none";
        }
    },

	/**
	 * 顶部子菜单的实现
	 */
	head: {
		// 获取四个菜单
		childMenu: document.getElementsByClassName("child-menu"),
		// 四个菜单对应的子内容
		menuNav: document.getElementsByName("menuNav"),
		phone: function(){
			index.head.general(0);
		},
		cal: function(){
			index.head.general(1);
		},
		caramer: function(){
			index.head.general(2);
		},
		yinjian: function(){
			index.head.general(3);
		},
		// 抽取出来的共性方法
		general: function(i){
			// 鼠标移动到菜单时，显示子菜单内容
			index.head.childMenu[i].onmouseover = function(){
				for (var a = 0; a < 4; a++) {
					if (i != a) {
						index.head.menuNav[a].style.display = "none";
					}
					index.head.menuNav[i].style.display = "block";
				}
			}
			
			index.head.menuNav[i].onmouseover = function(){
				for (var a = 0; a < 4; a++) {
					if (i != a) {
						index.head.menuNav[a].style.display = "none";
					}
					index.head.menuNav[i].style.display = "block";
				}
			}
			
			// 鼠标离开子菜单是触发的事件
			index.head.menuNav[i].onmouseout = function(){
				index.head.menuNav[i].style.display = "none";
			}
		}
	},
	/**
	 * 顶部菜单透明
	 */
		headTransparent: function(){
			$(window).scroll(function(){
				if ($(window).scrollTop() > 10) {
					// 菜单透明化
					$("#header").stop(true, false).animate({opacity: "0.6",top: "-30px"}, 500);
					$("#header").hover(
					// 第一个function 就是鼠标移动上去的时候调用
					function(){
						$("#header").stop(true, false).animate({opacity: "1",top: "0px"}, 500);
					},
					// 鼠标离开的时候调用
					function(){
						$("#header").stop(true, false).animate({opacity: "0.6",top: "-30px"}, 500);
					});
					
				}
				else {
					$("#header").stop(true, false).animate({opacity: "1",top: "0px"}, 500);
				}
			});
		},
		/**
		 * 搜索框焦点事件
		 */
		searchInputEvent : function(){
			var search = document.getElementById("searchInput");
			search.value = "请输入搜索内容";
			
			// 获取焦点的事件
			search.onfocus = function(){
				search.value = "";
			}
			
			// 失去焦点事件
			search.onblur = function(){
				var info = search.value;
				if(info == ""){
					search.value = "请输入搜索内容";
				} else {
					search.value = info;
				}
			}
		}
};

$().ready(function(){
	index.headTransparent();
	index.head.phone();
	index.head.cal();
	index.head.caramer();
	index.head.yinjian();
    index.back2top();
    index.hotChange();
	index.searchInputEvent();
    $("#back-to-top").hide();
});
