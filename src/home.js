(function ($){

    bindEvent() {
        var headNav = $('*[data-elem="nav"]');
        headNav.on('mouseenter', function() {

        });
    }
    function init() {
        bindEvent();
        initScroll(); //初始化全屏滚动事件
        initFocus();  //初始化焦点图事件
        initProductHover();   //初始化产品图hover事件
    }
    init();
})(jquery)
