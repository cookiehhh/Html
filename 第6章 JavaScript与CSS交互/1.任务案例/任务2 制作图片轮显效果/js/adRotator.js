// JavaScript Document
//定义全局变量
var title=new Array();
title[0]="1.店庆第一波 限时抢购 一日三疯！";
title[1]="2.十年店庆均价场 39/99/169专场！";
title[2]="3.全场69折封顶 享当当的超值低价！";
title[3]="4.店庆钜献 海量图书69折封顶";
title[4]="5.十年店庆 名家跨界祝贺 珍藏签名本专区";
var NowFrame = 1;   //最先显示第一张图片
var MaxFrame = 5;   //一共五张图片
function show(d1) {
	if(Number(d1)){
		clearTimeout(theTimer);  //当触动按扭时，清除计时器
		NowFrame=d1;                //设当前显示图片
		}
	for(var i=1;i<(MaxFrame+1);i++){
		if(i==NowFrame){
			
			document.getElementById("Rotator").src ="images/adRotator_"+i+".jpg";   //显示当前图片
			document.getElementById("fig_"+i).innerHTML=title[i-1];       //显示当前图片对应的标题
			document.getElementById("fig_"+i).className="numberOver";    //设置当前标题的CSS样式
         }
		 else{
		 document.getElementById("fig_"+i).innerHTML=i;
		 document.getElementById("fig_"+i).className="number";
		 }
	}
	if(NowFrame == MaxFrame){   //设置下一个显示的图片
		NowFrame = 1;
		}
	else{
		NowFrame++;
		}
}
var theTimer=setInterval('show()', 3000);   //设置定时器，显示下一张图片
window.onload=show;    //页面加载时运行函数show()