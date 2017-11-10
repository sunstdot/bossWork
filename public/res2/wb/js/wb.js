/**
 * Item Name :
 * Creater : chengxuebin
 * Email : peijiqiu@gmail.com
 * Created Date : 2017/10/14.
 */
var curIndex = 0;
var container = $("#container");
var sumCount = $(".section").length;
var $window = $(window);
var duration = 500;
//时间控制
var aniTime = 0;

var scrollFunc = function (e) {
  //如果动画还没执行完，则return
  if(new Date().getTime() < aniTime + duration){
    return;
  }
  e = e || window.event;
  var t = 0;
  if (e.wheelDelta) {//IE/Opera/Chrome
    t = e.wheelDelta;
    if (t > 0 && curIndex > 0) {
      //上滚动
      movePrev();
    } else if (t < 0 && curIndex < sumCount - 1) {
      //下滚动
      moveNext();
    }
  } else if (e.detail) {//Firefox
    t = e.detail;
    if (t < 0 && curIndex > 0) {
      //上滚动
      movePrev();
    } else if (t > 0 && curIndex < sumCount - 1) {
      //下滚动
      moveNext();
    }
  }
};

function moveNext(){
  //获取动画开始时的时间
  aniTime = new Date().getTime();
  container.css("transform", "translate3D(0, -" + (++curIndex) * $window.height() + "px, 0)");
}

function movePrev(){
  //获取动画开始时的时间
  aniTime = new Date().getTime();
  container.css("transform", "translate3D(0, -" + (--curIndex) * $window.height() + "px, 0)");
}

function init(){
  /*注册事件*/
  if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
  }
  window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome

  container.css({
    "transition": "all 0.5s",
    "-moz-transition": "all 0.5s",
    "-webkit-transition": "all 0.5s"
  });
}

init();
