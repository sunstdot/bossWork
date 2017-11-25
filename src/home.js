(function ($){

    //初始化事件绑定
    function bindEvent() {

    }
    //初始化滚动事件
    function initScroll() {
        $('#fullpage').fullpage();
    }
    //初始化hover事件
    function initProductHover() {
        var productCenter = $('#productCenter');
        var productDoms =  productCenter.find('*[data-elem-item="product"]');
        var firstDom= $(productDoms[0]);
        var selectDom = firstDom;
        productDoms.on('mouseenter', function(e) {
            var parentDom;
            var target = $(e.target || e.srcElement);
            // while(target.attr('data-elem-item') !== 'product')  {
              target = target.parents('*[data-elem-item="product"]');
            // }
            if(selectDom && selectDom.hasClass('on')) {
              selectDom.removeClass('on');
            }
            if(!target.hasClass('on')) {
                target.addClass('on');
            }
            selectDom = target;
        });
//        productDoms.on('mouseleave', function(e) {
//            if(selectDom.hasClass('on')) {
//                selectDom.removeClass('on');
//            }
//            selectDom = firstDom;
////            if(!selectDom.hasClass('on')) {
////                selectDom.addClass('on');
////            }
//        });
    }
    //初始化焦点图事件
    function initFocus() {
        var slicebox = $('#sb-slider').slicebox({
           onReady: function() {
               console.log('------ready');
           },
           orientation : 'r',
           cuboidsRandom : true,
           disperseFactor : 30
        });

        var leftBtn = $('#leftArrowBtn');
        var rightBtn = $('#rightArrowBtn');
        leftBtn.on('click', function(e) {
            console.log('--------------left');
            slicebox.previous();
            return false;
        });
        rightBtn.on('click', function(e) {
            console.log('--------------right');
            slicebox.next();
            return false;
        });
    }



    function init() {
        // bindEvent();
        initScroll(); //初始化全屏滚动事件
        initFocus();  //初始化焦点图事件
        initProductHover();   //初始化产品图hover事件
    }
    init();
})($)
