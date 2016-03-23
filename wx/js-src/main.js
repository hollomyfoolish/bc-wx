// require(['jquery', 'a'], function($, a){
//     $(function(){
//         console.log('page loaded' + a.foo());
//     });
// });
window.BC = {
    userAgent: (function(){
        var userAgent = navigator.userAgent;
        var isAndroid = /Android/.test(userAgent);
        var isWx = /MicroMessenger/.test(userAgent);
        var isIphone = /iPhone/.test(userAgent);
        var isIpad = /iPad/.test(userAgent);

        return {
            isAndroid: isAndroid,
            isIphone: isIphone,
            isIpad: isIpad,
            isWx: isWx,
            isAndroidWx: isAndroid && isWx,
            isIosWx: (isIphone || isIpad) && isWx,
        };
    }())
};
require.config({
    baseUrl: './js-src',
    paths: {
        jquery: '../js-lib/jquery-2.2.1.min',
        bootstrap: '../bootstrap-3.3.5/js/bootstrap.min',
        underscore: '../js-lib/underscore-min.1.8.3',
        backbone: '../js-lib/backbone-min.1.3.2',
        hammer: '../js-lib/hammer.2.0.6.min'
    },
    shim: {
        jquery: '$',
        bootstrap: ['jquery'],
        underscore: '_',
        backbone: 'Backbone',
        hammer: 'Hammer'
    }
});
require(['bootstrap', 'homePane'], function(bootstrap, home){
    home.init();
});