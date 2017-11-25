/**
 * 视频中心
 * Created by sunshitao on 2017/11/22.
 */
(function ($) {
    function initFocus() {
        var slicebox = $('#sb-slider').slicebox({
            onReady: function() {
                console.log('--------ready');
            },
            orientation : 'r',
            cuboidsRandom : true,
            disperseFactor: 30
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
        initFocus();   //初始化焦点图事件
    }
    init();
})($);