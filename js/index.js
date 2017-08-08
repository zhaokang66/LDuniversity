window.onload=roll;
function roll(){
var ul1=document.getElementById("ul1");
var ul2=document.getElementById("ul2");
var box=document.getElementById("box");
ul2.innerHTML=ul1.innerHTML;
box.scrollTop = 0;
var timer=setInterval(rollStart,50);
box.onmouseover=function(){
clearInterval(timer)
}
box.onmouseout=function(){
timer=setInterval(rollStart,50);
}


}
function rollStart(){
if (box.scrollTop>=ul1.scrollHeight) {//scrollTop属性既是scroll最上端和box的距离
box.scrollTop=0;
}else{
box.scrollTop++;
}
}

var wrap = document.getElementById('wrap');
      var content = document.getElementById('content');
      var tips = document.getElementById('tips');
      var aLi = tips.getElementsByTagName('li');
     var now = 0;
      //var
      for (var i = 0; i < aLi.length; i++) {
          aLi[0].className = 'active';                //把初始状态定义好
          content.style.left = 0 +'px';
          aLi[i].index = i; //自定义属性
          aLi[i].onclick = function() {
              now = this.index;
              play();
          }
      }

    function play() {
         for (var j = 0; j < aLi.length; j++) {
             aLi[j].className = '';
         }
         aLi[now].className = 'active';

       //this.index = now;                         //反过来写就不对了大兄弟
       //content.style.left = -400 * this.index + 'px';
        startMove(content, {
                       left: -322 * now, //你还真别说，json格式就是这么写的
         });
     }

     function autoPlay() {
         now++;
         if (now == aLi.length) {
             now = 0;
         }
         play();
     }

     var timer = setInterval(autoPlay, 2000);
     wrap.onmouseover = function(){                  //这里如果把事件绑定到ul上的话，那么鼠标移入，下面对饮的li会不起作用，
         clearInterval(timer);                       //因为li的层级比较高，所以应该把事件绑定到大的div上
     }
     wrap.onmouseout = function(){
         timer = setInterval(autoPlay,2000);
         //setInterval(autoPlay,2000);   不能这么写，凡是开的定时器，必须得赋值，要不然总会多开一个定时器，导致速度加快
     }
