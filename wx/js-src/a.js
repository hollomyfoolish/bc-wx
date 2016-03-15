define(['b', 'jquery'], function(b, $){
    return {
        foo: function(){
            return 'result from B:' + b.foo();
        }
    };
});