function logout()
{
    var i = new Image;
    i.src = "http://changyan.sohu.com/api/2/logout?client_id=cyr9CDq1M&callback=sdasassdeeweweeeeweww", 
    window.location.href = "http://www.chinacaipu.com/user/logout"
}
function getLoginStatus()
{
    var i = "2f37d1d5ab9dc228073764a518868a6e", t = Site.Cookie.get(i);
    if (t)
    {
        var n = t.split("|");
        if (n.length > 0)
        {
            var e = n[2], a = decodeURI(n[3]), t = "";
            t += '<div class="c_bar_r1">', t += '<div class="c_user"><a href="http://www.chinacaipu.com/caipu/mycaipu"><img src="' + e + '" alt="">' + a + '<i class="i i3"></i></a></div>', 
            t += '<div class="c_user_info">', t += '<a onclick="window.location.href=\'http://www.chinacaipu.com/caipu/mycaipu\'"  style=" width: 100px;cursor:pointer;"><i class="i i4"></i>我的菜谱</a>', 
            t += '<a onclick="window.location.href=\'http://www.chinacaipu.com/caipu/cpadd\'"  style=" width: 100px;cursor:pointer;"><i class="i i5"></i>发布菜谱</a>', 
            t += '<a onclick="logout();" style=" width: 100px;cursor:pointer;"><i class="i i6"></i>退出登录</a>', 
            t += "</div>", t += "</div>", document.getElementById("login_box").innerHTML = t;
        }
    }
}
function _switch(i, t, n)
{
    var e = $(i), a = $(t);
    e.on("click", function (i)
    {
        var t = $(this).index();
        e.removeClass(n).eq(t).addClass(n), a.addClass("hidden").eq(t).removeClass("hidden"), i.preventDefault()
    })
}

function list(list){
	
	var pa1 = $('#jp_list');
	var pa2 = $('.food_jp_list');
	if(list.length == 0){
		pa2.append("<li style='width:100%;background-color:inherit;text-align:center;margin-top:20px'><h2>暂无数据</h2></li>");
		return;
	}
	
	for(var i = 0; i < list.length; i++){
		
		var clone = $('.ctmpl').clone();
		var item = list[i];
		clone.removeClass('ctmpl');
		clone.css('display','block');
		clone.find('.link').attr('href', '/Recipe/cdetail/id/' + item['id']);
		clone.find('.rec_img').attr('data-original', item['image']).attr('alt', item['name']);
		clone.find('.hot_food_name').text(item['name']);
        clone.find('.story').text(item['story']);
		clone.find('.yellow').text(item['collect_num']);
        var star_str = "";
		for (var j = 1; j <= item['easy']; j++) {
            star_str += "<img src='/Public/index/js/lib/img/star-on.png' alt=''>";
        }
        for (var j = 1; j <= (5-item['easy']); j++) {
            star_str += "<img src='/Public/index/js/lib/img/star-off.png' alt=''>";
        }
        clone.find('.hot_food_comment_star').append(star_str);
		pa2.append(clone);
	}

    
}

function list1(list){
	
	var pa = $('.season_list');
	if(list.length == 0){
		pa.append("<h2 style='text-align:center;font-size:20px'>暂无数据</h2>");
		return;
	}
	
	for(var i = 0; i < 7; i++){
		
		var clone = $('.stmpl').clone();
		var item = list[i];
		clone.removeClass('stmpl');
		clone.css('display', 'block');
		clone.find(".links").attr('href', '/Food/detail/id/' + item['id']);
		clone.find('.food_img').attr('data-original', '/Public/Upfiles/' + item['image']);
        clone.find('.food_name').text(item['name']);
		clone.find('.food_desc').text(item['desc']);
		pa.append(clone);
	}
}
		
	
	
function loadimg(i)
{
    var t = $(i).attr("height"), n = $(i).attr("width"), e = 630, a = n, c = t;
    if (a > e)
    {
        $(i).attr("width", e), c = parseInt(t * (e / n)), $(i).attr("height", c);
        $(i).parent().find("img")
    }
}
function resizeImg(i, t, n)
{
    var e = new Image;
    e.src = i.src;
    var a = e.height, c = e.width;
    a || (a = $(i).height()), c || (c = $(i).width());
    var s = c, o = a, r = t / n, h = c / a;
    c > t || a > n ? (r > h ? (o = n, s = parseInt(c * (o / a))) : (s = t, o = parseInt(a * (s / c))), 
    $(i).attr("width", s), $(i).attr("height", o)) : ($(i).attr("height", a), $(i).attr("width", c))
}
function resizeImgList(i, t, n)
{
    console.log(1);
    var e = new Image;
    e.src = i.src;
    var a = e.height, c = e.width;
    a || (a = $(i).height()), c || (c = $(i).width());
    var s = c, o = a, r = t / n, h = c / a;
    c > t || a > n ? (r > h ? (o = n, s = parseInt(c * (o / a))) : (s = t, o = parseInt(a * (s / c))), 
    $(i).attr("width", s), $(i).attr("height", o)) : ($(i).attr("height", parseInt(a * (t / c))), $(i).attr("width", 
    t))
}
function cssImgResize(i, t, n)
{
    var e = new Image;
    e.src = i.src;
    var a = e.height, c = e.width;
    a || (a = $(i).height()), c || (c = $(i).width());
    var s, o, r, h, d = c, l = a, u = t / n, m = c / a;
    u > m ? (d = t, l = parseInt(a * (d / c)), h = o = 0, s = r = parseInt((l - n) / 2)) : (l = n, d = parseInt(c * (l / a)), 
    s = r = 0, h = o = parseInt((d - t) / 2)), $(i).attr("width", d), $(i).attr("height", l), $(i).css("margin", 
    0 - s + "px " + (0 - h) + "px")
}
!function ()
{
    var i, t = navigator.userAgent.toLowerCase(), n = "ipad" == t.match(/ipad/i), e = "iphone os" == t.match(/iphone os/i), 
    a = "midp" == t.match(/midp/i), c = "rv:1.2.3.4" == t.match(/rv:1.2.3.4/i), s = "ucweb" == t.match(/ucweb/i), 
    o = "android" == t.match(/android/i), r = "windows ce" == t.match(/windows ce/i), h = "windows mobile" == t.match(/windows mobile/i), 
    d = location.href;
    (n || e || a || c || s || o || r || h) && (i = d.replace("http://www.", "http://m.")), i && i !== d && (location.href = i)
}();
var Site = new Object;
Site.Cookie = 
{
    _expires : 864e5, _domain : ".chinacaipu.com",
    set : function (i, t, n, e, a)
    {
        n = new Date((new Date).getTime() + (n ? n : this._expires)), document.cookie = i + "=" + escape(t) + "; expires=" + n.toGMTString() + "; path=" + (e ? e : "/") + "; domain=" + (a ? a : this._domain);
    },
    get : function (i)
    {
        var t = document.cookie.match(new RegExp("(^| )" + i + "=([^;]*)(;|$)"));
        return null != t ? unescape(t[2]) : null;
    },
    clear : function (i, t, n)
    {
        this.get(i) && (document.cookie = i + "=; path=" + (t ? t : "/") + "; domain=" + (n ? n : this._domain) + "; expires=Fri, 02-Jan-1970 00:00:00 GMT");
    }
};

//加载特效
		var opts = {
			lines: 13 // The number of lines to draw
		  , length: 10 // The length of each line
		  , width: 4 // The line thickness
          , radius: 10 // The radius of the inner circle
          , scale: 1 // Scales overall size of the spinner
          , corners: 1 // Corner roundness (0..1)
          , color: '#ff6c22' // #rgb or #rrggbb or array of colors
          , opacity: 0.25 // Opacity of the lines
          , rotate: 0 // The rotation offset
          , direction: 1 // 1: clockwise, -1: counterclockwise
          , speed: 1 // Rounds per second
          , trail: 60 // Afterglow percentage
          , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
          , zIndex: 2e9 // The z-index (defaults to 2000000000)
          , className: 'spinner' // The CSS class to assign to the spinner
          , top: '50%' // Top position relative to parent
          , left: '50%' // Left position relative to parent
          , shadow: false // Whether to render a shadow
          , hwaccel: false // Whether to use hardware acceleration
        }
		
var iFun = 
{
    tabFun : function (i, t, n, e)
    {
        var a = $(i), c = $(t), s = n;
        a.on(e, function ()
        {
            var i = a.index(this), t = $(this);
            t.addClass(s).siblings().removeClass(s), c.eq(i).show().siblings().hide(), i && !t.attr("v") && (c.eq(i).find("img").each(function ()
            {
                $(this).attr("src", $(this).attr("v")), $(this).removeAttr("v")
            }), t.attr("v", 1))
        })
    },
    autoPlay : function ()
    {
        var i = 3e3, t = 300, n = 0, e = $("#i-slider_l"), a = e.find(".i_bignext"), c = e.find(".i_bigprev"), 
        s = e.find(".i_bigimgs"), o = s.find("li"), r = o.width(), h = s.find("li").length, d = e.find(".i_bigcur"), 
        l = d.find("li"), u = null, m = "on", w = function ()
        {
            s.stop().animate({
                left : "-" + n * r
            }, t), l.eq(n).addClass(m).siblings().removeClass(m)
        },
        f = function ()
        {
            n++, n >= h && (n = 0), w();
        };
        s.width(r * h), u = setInterval(f, i), e.hover(function ()
        {
            clearInterval(u)
        },
        function ()
        {
            u = setInterval(f, i);
        }), l.mouseover(function ()
        {
            n = $(this).index(), w()
        }), a.click(function ()
        {
            f()
        }), c.click(function ()
        {
            0 == n ? n = h - 1 : n--, w();
        })
    },
    sPlay : function ()
    {
        var i = $("#i-slider_s"), t = i.find(".i_sulwrap"), n = t.find("ul"), e = t.find("li"), a = i.find(".i_snext"), 
        c = i.find(".i_sprev"), s = e.length, o = e.width(), r = 500, h = 3, d = t.width();
        n.width(o * s), h >= s || (a.click(function ()
        {
            var i = n.find("li:lt(3)");
            n.animate({
                left : "-" + d + "px"
            },
            r, function ()
            {
                n.css("left", 0), i.appendTo(n)
            })
        }), c.click(function ()
        {
            var i = s - 4, t = n.find("li:gt(" + i + ")");
            n.css("left", "-" + d + "px"), t.prependTo(n), n.animate({
                left : 0
            }, r)
        }))
    },
    inIt : function ()
    {
        var i = $(".c_nav_wrap"), t = i.find(".c_nav2"), n = $(".c_nav_m");
        t.hover(function ()
        {
            n.show(), $(this).addClass("c_nav2_cur")
        },
        function ()
        {
            i.mouseleave(function ()
            {
                n.hide(), t.removeClass("c_nav2_cur")
            }), $(this).siblings().mouseenter(function ()
            {
                n.hide(), t.removeClass("c_nav2_cur")
            })
        }), $(".js_food").delegate("a", "click", function ()
        {
            // $(this).addClass("c_sitem_cur").siblings().removeClass("c_sitem_cur");
			var parent = $(this).parent();
			var url= parent.attr('data-url');
			var flag = parent.attr('flag');
			var t = $(this).attr('t');
	        var container = $('#jp_list');
			var pa = $('.food_jp_list');
			if(flag != '1'){
				container = $('#sl_list');
				pa = $('.season_list');
			}
			pa.empty();
			var spinner = new Spinner(opts).spin(container.get(0));
			$.ajax({
					type: 'POST',
					url: url,
					data: {
						t : t
					},
					dataType: 'json',
					success: function(data){
						spinner.spin();
						if(flag == '1'){
						   list(data.list);

                            $("img.lazy").lazyload({
                                effect : "fadeIn"
                            });
						}else{
						   list1(data.list);
						}
					}
			});
        }), $(".i_subcon3 li").mouseover(function ()
        {
            $(this).addClass("cur").siblings().removeClass("cur")
        }), iFun.tabFun(".i_scof5 li", ".i_sci5 > a", "cur", "mouseover"), $(".c_bar_r1").hover(function ()
        {
            $(this).addClass("c_bar_r1_cur"), $(".c_user_info").show()
        },
        function ()
        {
            $(this).removeClass("c_bar_r1_cur"), $(".c_user_info").hide()
        }), iFun.autoPlay(), iFun.sPlay()
    }
};
iFun.inIt(), 
getLoginStatus();// _switch("#zgcp .c_sortitems a", "#zgcp .c_con", "c_sitem_cur");
var fn = function ()
{
    var i = $("img[a]"), t = $(this).scrollTop() + $(this).height();
    i.each(function ()
    {
        var i = $(this).attr("a"), n = $(this).offset().top;
        i && t + 100 > n && $(this).attr("src", i).removeAttr("a")
    }), i.length || $(window).off("scroll", fn)
};
fn(), $(window).on("scroll", fn);
