/**
 * Created by 清水 on 2017/5/13.
 */
function hover(elem){

    this.elem = elem;

    $(this.elem).hover(function(){
            $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
    });

}

//tab
function _tabFn(box,tap){
    this.box= box;
   // this.tabContent = tabContent;
    this.event(tap);
}

_tabFn.prototype = {
    event:function(tap){
        var _this = this;
        $(this.box).children().on(tap,function(){
            $(this).addClass('active').siblings().removeClass('active');
           // $(_this.tabContent).children().eq($(this).index()).addClass('active').siblings().removeClass('active');
        });
    }
}


function _tabFn2(navContainer,content,tap){

    this.navContainer = navContainer;

    this.content = content;

    this.tap = tap;

    this.event();


}
_tabFn2.prototype = {

        event:function(){
            var _this = this;
            $(this.navContainer).children().on(_this.tap,function(){

                $(this).addClass('active').siblings().removeClass('active');

                $(_this.content).children().eq($(this).index()).addClass('active').siblings().removeClass('active');


            });

        }

}


//登陆框

function pub_fn(){
    $('.login-step dl input').on('focus',function(){
        $(this).closest('dl').addClass('active');

    }).on('blur',function(){
        $(this).closest('dl').removeClass('active');
    });

    $('.reg-step dl input').on('focus',function(){
        $(this).addClass('active');

    }).on('blur',function(){
        $(this).removeClass('active');
    });
    $('.js-checkbox').on('click',function(){
        $(this).toggleClass('active');
    });

    $('.logined_down').hover(function(){

        $(this).find('.lv_logined_list').stop().slideDown();
    },function(){
        $(this).find('.lv_logined_list').stop().slideUp();
    });

    $('.cp_search_type').click(function(){
        $(this).find('.cp_search_type_list').stop().slideToggle();
        $(this).find('.cp_search_type_tit').toggleClass('active');
    });


    $('.cp_search_type_list li').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
             $(this).find('.cp_search_type_list').slideUp();

             var text = $(this).text();
        $('.cp_search_type_tit').text(text);

    });

}



//验证登录注册

var register_login = {
    setting:{
        reg_phone: /0?(13|14|15|18)[0-9]{9}/,
        reg_email:/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
    },
    reg_login:function(){
        var login_email = $.trim($('#login_email').val()),//登录邮箱号
            login_pass = $.trim($('#login_pass').val());//登录密码


        if(login_email==""){
            layer.tips('请输入邮箱号', '#login_email', {
                tips: [1, '#f6a200'],
                time: 4000
            });
            return false;
        }else if(!register_login.setting["reg_email"].test(login_email)){
            layer.tips('请输入正确的邮箱号', '#login_email', {
                tips: [1, '#f6a200'],
                time: 4000
            });
            return false;
        }else if(login_pass==""){
            layer.tips('请输入密码', '#login_pass', {
                tips: [1, '#f6a200'],
                time: 4000
            });
            return false;
        }

        return true;

    },
    register_fn:function(){
        var reg_email_new = $.trim($('#reg_email').val()),//注册邮箱号
            reg_nc      =   $.trim($('#reg_nc').val()),
            reg_pass  = $.trim($('#reg_pass').val()),//注册密码
            reg_pass2  = $.trim($('#reg_pass_again').val()),//再次输入密码
            reg_code  = $.trim($('#reg_code').val());//手机验证码

        if(reg_email_new==""){
            layer.tips('请输入邮箱号', '#reg_email', {
                tips: [1, '#f6a200'],
                time: 4000
            });
            return false;

        }else if(!register_login.setting["reg_email"].test(reg_email_new)){
            layer.tips('请输入正确的邮箱号', '#reg_email', {
                tips: [1, '#f6a200'],
                time: 3000
            });
            return false;
        }else if(reg_nc==""){

            layer.tips('请输入昵称', '#reg_nc', {
                tips: [1, '#f6a200'],
                time: 3000
            });
            return false;
        }else if(reg_pass==""){
            layer.tips('请输入密码', '#reg_pass', {
                tips: [1, '#f6a200'],
                time: 3000
            });
            return false;
        }else if(reg_pass2==""){
            layer.tips('请再次输入密码', '#reg_pass_again', {
                tips: [1, '#f6a200'],
                time: 3000
            });
            return false;
        }else if(reg_pass!=reg_pass2){
            layer.tips('两次密码输入不一致', '#reg_pass_again', {
                tips: [1, '#f6a200'],
                time: 3000
            });
            return false;
        }else if(reg_code==""){
            layer.tips('请输入验证码', '#reg_code', {
                tips: [1, '#f6a200'],
                time: 3000
            });
            return false;
        }

        return true;

    }

}



//------------------------------------------------person_conetent----------------------->>>


function person_content(delElem,delBox){

    this.delElem =  delElem || {};

    this.delBox  = delBox || {};

};


person_content.prototype = {


    delDom:function(){
        var _this = this;
        function removeImg(r){
            layer.confirm('确定要删除？', {
                btn: ['确定','取消'] //按钮
            }, function(){
                $(r).closest(_this.delBox).remove();
                layer.msg('删除成功', {icon: 1});
            }, function(){
                ""
            });

        }
        $(this.delElem).on('click',function(){

            removeImg($(this));

        });
    },
    
    event:function(){

            var motelBox = $('.cp-u-filter-bg'),

                motel    = $('.cp-u-news-reply'),

                restore  =  $('.restore_btn'),

                check_message = $('.js_check'),

                talk_list = $('.talk_list');
            //展开信息列表
        check_message.on('click',function(){

            $(this).toggleClass('active');

            $(this).closest('.plivate_message_wrap').find('.talk_list').stop().slideToggle();


        });

        $(document).on('click','.js_system_message',function(){
            $(this).closest('li').find('.system_message').stop().slideToggle();
        });

        //回复

        $(document).on('click','.restore_btn,.js_restore_btn',function(){
            $.ajax({
                type:'post',
                url:"/Ajax/check_login1",
                dataType:'json',
                success:function(data){
                    if (data.status == 1) {
                        motelBox.show();
                        motel.show();
                    } else {
                        layer.msg('登录后才可进行使用私信功能!',{icon:2,time:2000});
                        setTimeout(window.location.href = "/Login/index/pre_url/" + data.pre_url,3000);
                    } 
                    
                }
            });
            
        });

        $(document).on('click','.js_close_motel',function(){
            motelBox.hide();
            motel.hide();
        });

        // $(document).on('click','.js_reply',function(){
        //     var text = $.trim($('#content').val());
        //     if(text==""){
        //         layer.msg("请输入内容");
        //         return false;
        //     }else {
        //         layer.msg("发送成功");
        //         $('#content').val("");
        //         motelBox.hide();
        //         motel.hide();

        //     }


        // });

    }
}



//-----------------------------个人中心------------------------------>>

function _con(){

    this._REG = /0?(13|14|15|18)[0-9]{9}/;//手机号

    this.EMAIL = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;//邮箱



};

_con.prototype = {

    //修改密码
    changePass:function(){

        var oldPass = $.trim($('#old_pass').val()),

            newPass = $.trim($('#new_pass').val()),

            newPassAgain = $.trim($('#new_pass_again').val());

            if(oldPass==""){

                layer.msg("请输入旧密码");
                return false;
            }else if(newPass==""){
                layer.msg("请输入新密码");
                return false;
            }else if(newPassAgain==""){
                layer.msg("请确认输入新密码");
                return false;
            }else if(newPass!=newPassAgain){
                layer.msg("两次密码输入不一致");
                return false;
            }
            return true;

    },
    _bindPhone:function(){

        var phone = $.trim($('#bindphone').val()),

            code  = $.trim($('#vcode').val());

            if(phone==""){
                layer.msg("请输入手机号");

                return false;
            }else if(!(this._REG.test(phone))){
                layer.msg("请输入正确的手机号");
                return false;
            }else if(code==""){
                layer.msg("请输入手机验证码");
                return false;
            }

            return true;

    },
    time_down:function(){
        //手机验证倒计时
        var timer=null; //timer变量，控制时间
        var count = 60; //间隔函数，1秒执行
        var curCount=0;//当前剩余秒数
        var code = ""; //验证码
        var codeLength = 6;//验证码长度

        function sendMessage() {


            // var username = $.trim($(".userVal").val());
            // if(nametest(username)){
            //     layer.tips('用户名已经存在!', '.userVal', {
            //         tips: [1, '#ff5742']
            //     });
            //     return false;
            // }
            // var phone=$.trim($('.phoneVal').val());
            // if(phonetest(phone)){
            //     layer.tips('该手机号已经注册过!', '.phoneVal', {
            //         tips: [1, '#ff5742']
            //     });
            //     return false;
            // }
            curCount = count;

            //设置button效果，开始计时
            $(".send-code").attr("disabled", "true");
            $(".send-code").val( curCount + "s");
            $(".send-code").addClass('active');
            timer = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
            SetRemainTime();


        }
        //timer处理函数
        function SetRemainTime() {
            if (curCount == 0) {
                window.clearInterval(timer);//停止计时器
                $(".send-code").removeAttr("disabled");//启用按钮
                $(".send-code").removeClass('active');
                $(".send-code").val("重新发送");

                // code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
            }
            else {
                curCount--;
                $(".send-code").val( curCount + "s") ;
            }
        }



        return sendMessage();

    },
    reg_code:function(){
        var reg_phone_new = $.trim($('#bindphone').val());//手机号

        if(reg_phone_new==""){
            layer.msg("请输入手机号");
            return false;

        }else if(!(this._REG.test(reg_phone_new))) {
            layer.msg("请输入正确的手机号");
            return false;
        }
        return true;
    },

    _reg_email:function(){

        var email = $.trim($('#email').val());

        if(email==""){
            layer.msg("请输入邮箱号");
            return false;
        }else if(!(this.EMAIL.test(email))){
            layer.msg("请输入正确的邮箱号");
            return false;
        }

        return true;

    },
    _reg_change:function(){
        var newPass = $.trim($('#new_pass').val()),

            newPassAgain = $.trim($('#new_pass_again').val());


        if(newPass==""){
            layer.msg("请输入新密码");
            return false;
        }else if(newPassAgain==""){
            layer.msg("请确认输入新密码");
            return false;
        }else if(newPass!=newPassAgain){
            layer.msg("两次密码输入不一致");
            return false;
        }

        return true;

    },
    hover_fn:function($ele){
        $($ele).hover(function(){
            $(this).addClass('hover').siblings().removeClass('hover');
        },function(){
            $(this).removeClass('hover');
        });
    }




}


//签到
;(function($) {

    var arry = [
        '<div class="qd-motel-box">',
        '<div class="qd-motel-in">',
        '<span class="qd-success-bg"></span>',
        ' <span class="close-motel"></span>',
        ' <div class="qd-motel-bot">',
        ' <h2>恭喜您，签到成功</h2>',
        '<div class="qd-jf-box">',
        '<div class="left qd-jf-box-l">',
        '<p>积</p>',
        '<p>分</p>',
        '</div>',
        '<span class="left qd-jf-box-r"></span>',
        '</div>',
        '</div>',
        '</div>',
        '</div>'

    ];




    function addMotal(ele, options) {
        this.ele = ele;

        this.opts = $.extend({}, $.fn.qd_motal.defaults, options);

    }

    var str;
    addMotal.prototype = {

        creatDom: function() {
            if (str) {
                return;
            }
            str = arry.join("");



            $(this.ele).append(str);


            //motel----------->>css>>>>>>>


            //motel----------->>css>>>>>>>

            $(this.ele).find('.qd-motel-box').show();
            $(this.ele).find('.qd-motel-box').find('.qd-jf-box-r').text("+"+this.opts.num);
            $(this.ele).find('.check-line').attr('href',this.opts.url);


        },
        eventFn: function() {

            var _this = this;
            $(this.ele).find('.qd-motel-box').on('click', function() {

                $(_this.ele).find('.qd-motel-box').remove();
                str = false;

            });

        }

    }

    $.fn.qd_motal = function(options) {
        var startApend = new addMotal(this, options);

        startApend.creatDom();

        startApend.eventFn();
    }
    $.fn.qd_motal.defaults = {num:4,url:""};

})(jQuery);
$(document).on('click','.js_sign',function(){
    if($(this).hasClass("active")){
        return false;
    }

    var _this = $(this);
    $.ajax({
        url:"/Ajax/user_sign",
        type:'post',
        dataType:'json',
        success:function(data){
            if (data['state'] == '1') {
                var point_num = _this.attr("data-point");
                $('body').qd_motal({num:point_num});
                _this.addClass("active").html("已签到");
                return false;
            }else {
                layer.msg('系统异常,请稍后再试!',{icon:2,time:3000});
                return false;
            }
        },
    })
    
});

function ss(obj){
    var ss = $(obj).attr('rel');
    var uid = $(obj).attr('data-id');
    $("#div1").html(ss);
    $("#div2").html("<input type='hidden'  name='rec_id' id='rec_id' value="+uid+" />");
}

$(".js_reply").click(function(){
    var rec_id = $("#rec_id").val();
    var content = $.trim($("#content").val());
    if(content == ''){
        // alert("信息内容不能为空!");
        layer.msg("信息内容不能为空!",{icon:2,time:2000});
        return false;
    }
    var _this = $(this);
    $.ajax({
        type:'post',
        url:"/Ajax/send_message",
        dataType:'json',
        data:{rec_id:rec_id,content:content,pid:0},
        error:function(){alert('发送失败');},
        success:function(data){
            if (data >0) {
                layer.msg("发送成功!",{icon:1,time:2000});
                $(".cp-u-filter-bg").hide();
                $(".cp-u-news-reply").hide();
                // _this.closest(".plivate_message_wrap").find(".talk_list").append("");
            } else {
                layer.msg("发送失败!",{icon:2,time:2000});
            } 
            
        }
    });

})

function sc(obj){
    var cid = $(obj).attr("rel");
    _this = $(obj);
    if ($(obj).hasClass("active")) {
        return;
    }
    $.ajax({
        type: "post",
        url: "/Ajax/collect_ajax",
        dataType: "json",
        data: {cpid:cid},
        success: function(data) {
            if (data.status == '1') {
                _this.html("已收藏");
                _this.addClass("active");
                layer.msg(data.msg,{icon:1,time:2000});
            } else if(data.status == '-1'){
                layer.msg(data.msg,{icon:2,time:2000});
                setTimeout(window.location.href = "/Login/index/pre_url/" + data.pre_url,2000);
            }else{
                layer.msg(data.msg,{icon:2,time:2000});
            }
        },
    })
}

function gz_group(obj){
    var ag_gid = $(obj).attr("rel");
    _this = $(obj);
    $.ajax({
        type: "post",
        url: "/Ajax/gz_group",
        dataType: "json",
        data: {ag_gid:ag_gid},
        success: function(data) {
            if (data.status == '1') {
                _this.html("已关注");
                _this.attr("onclick","qx_group(this)");
                _this.addClass("active");
                layer.msg(data.msg,{icon:1,time:2000});
            } else if(data.status == '-1'){
                layer.msg(data.msg,{icon:2,time:2000});
                setTimeout(window.location.href = "/Login/index/pre_url/" + data.pre_url,2000);
            } else{
                layer.msg(data.msg,{icon:2,time:2000});
            }
        },
    })
}

function qx_group(obj){
    var ag_gid = $(obj).attr("rel");
    _this = $(obj);
    layer.confirm('确定要取消关注吗？', {
        btn: ['确定','取消'] //按钮
    }, function(){
        var topic_id = $(obj).attr("rel");
        $.ajax({
            type: "post",
            url: "/Ajax/qx_group",
            dataType: "json",
            data: {ag_gid:ag_gid},
            success: function(data) {
                if (data.status == '1') {
                    _this.html("+关注");
                    _this.attr("onclick","gz_group(this)");
                    _this.removeClass("active");
                    layer.msg(data.msg,{icon:1,time:2000});
                } else{
                    layer.msg(data.msg,{icon:2,time:2000});
                }
            },
        })
        
    }, function(){
        ""
    });
    
}


function gz(obj){
    var uid = $(obj).attr("rel");
    _this = $(obj);
    if ($(obj).hasClass("active")) {
        return;
    }
    $.ajax({
        type:'post',
        url:"/Ajax/attention_ajax",
        dataType:'json',
        data:{uid:uid},
        success:function(data){
            if (data.status == 1) {
                layer.msg(data.msg,{icon:1,time:1000});
                _this.html("已关注");
                _this.addClass("active");
            }  else if(data.status == '-1') {
                layer.msg(data.msg,{icon:2,time:1000});
                setTimeout(window.location.href = "/Login/index/pre_url/" + data.pre_url,2000);
            } else {
                layer.msg(data.msg,{icon:2,time:1000});
            } 
            
        }
    });
}

function add_topic(obj){
    var prev_url = $(obj).attr("data-url");
    var group_id = $(obj).attr("rel");
    $.ajax({
        type:'post',
        url:"/Ajax/check_add_topic",
        dataType:'json',
        data:{prev_url:prev_url,group_id:group_id},
        success:function(data){
            if (data == 1) {
                window.location.href = "/Community/addtopic";
            }else if (data == 2) {
                layer.msg('请登录后再发表话题',{icon:2,time:1000});
                window.location.href = "/Login/index/pre_url/" + prev_url;
            }else if (data == 3) {
                layer.msg('您还未关注任何圈子',{icon:2,time:1000});
            }else if (data == 4) {
                layer.msg('请先关注圈子再发表话题',{icon:2,time:1000});
            }
            
        }
    });
}

function search(obj){
    var search_type = $(obj).closest(".search_parents").find(".active").attr("rel");
    var search_keywords = $(obj).closest(".search_parents").find("#search_keywords").val();
    window.location.href = "/Recipe/search/type/" + search_type + "/key/" + search_keywords;
}

function check_login(obj){
    go_url = $(obj).attr("rel");
    $.ajax({
        url:'/Ajax/check_login1',
        type:'post',

        success:function(data){
            if(data.status == 1){
                window.location.href = go_url;
            }else{
                layer.msg(data.msg,{icon:2,time:1000});
                setTimeout(window.location.href = "/Login/index/pre_url/" + data.pre_url,3000);
            }
        }
    })
}




