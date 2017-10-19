(function ($){

    bindEvent() {

    }
    initProductHover() {
        var productCenter = $('#productCenter');
        var productDoms =  productCenter.down('*[data-elem-item="product"]');
        var firstDom= $(productDoms[0]);
        var selectDom = firstDom;
        productCenter.on('mouseenter', function(e) {
            var parentDom;
            var target = $(e.target || e.srcElement);
            while(target.attr('data-elem-item') !== 'product')  {
              target = target.parentNode();
            }
            if(selectDom && selectDom.hasClass('on')) {
              selectDom.removeClass('on');
            }
            if(!target.hasClass('on')) {
                target.addClass('on');
            }
        });
        productCenter.on('mouseleave', function(e) {
            if(!firstDom.hasClass('on')) {
                firstDom.addClass('on');
            }
            if(selectDom.hasClass('on')) {
                selectDom.removeClass('on');
            }
        });
    }

    initFocus() {
        
    }



    function init() {
        bindEvent();
        initScroll(); //初始化全屏滚动事件
        initFocus();  //初始化焦点图事件
        initProductHover();   //初始化产品图hover事件
    }
    init();
})(jquery)
