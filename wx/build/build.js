({
    baseUrl: "../js-src",
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
    },
    name: "main",
    out: "../js/main-bundle.js",
    optimize: "uglify2"
})
/*
"uglify：使用 UglifyJS 压缩代码，默认值；
"uglify2"：使用 2.1.2+ 版本进行压缩；
"closure"： 使用 Google's Closure Compiler 进行压缩合并，需要 Java 环境；
"closure.keepLines"：使用 Closure Compiler 进行压缩合并并保留换行；
"none"：不做压缩合并；
*/