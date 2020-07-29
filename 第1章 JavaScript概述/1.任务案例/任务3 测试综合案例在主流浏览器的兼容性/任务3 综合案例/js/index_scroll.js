$().ready(function(){
    $("#jscroll").fsrPMD({
        Event: 'mouseover', //事件
        Id: 'jscroll', //容器ID
        Bq: 'div', //标签
        Fx: "down", //图片路径
        Time: 50 //时间
    });
    
    $("#banner-content").fsrPMD({
        Event: 'mouseover', //事件
        Id: 'banner-content', //容器ID
        Bq: 'td', //标签
        Fx: "left", //图片路径
        Time: 50 //时间
    });
});
