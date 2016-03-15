require(['jquery', 'a'], function($, a){
    $(function(){
        console.log('page loaded' + a.foo());
    });
});