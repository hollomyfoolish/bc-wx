var express = require('express'),
    watch = require('node-watch'),
    less = require('less'),
    fs = require('fs'),
    path = require('path'),
    uglify = require("uglify-js");
var mainLessFile = path.resolve(__dirname, './wx/less/wx.less'),
    destCssFile = path.resolve(__dirname, './wx/css/wx-2.css'),
    jsRootDir = path.resolve(__dirname, './wx/js');
console.log('main less file: ', mainLessFile);

var app = express();
app.use(express.static(__dirname));

app.listen(1888);

function renderCss(){
    less.render(fs.readFileSync(mainLessFile, {encoding: 'utf8'}),
    {
      paths: [path.resolve(__dirname, './wx/less')],  // Specify search paths for @import directives
      filename: 'error.less', // Specify a filename, for better error messages
      compress: true          // Minify CSS output
    },
    (e, output) => {
        if(e){
            console.error(e);
        }else{
            fs.writeFile(destCssFile, output.css, 'utf8', (err) => {
              if (err) throw err;
              console.log('It\'s saved!');
            });
        }
    });
}

function compressJs(){
    fs.readdir(jsRootDir, function(e, files){
    var srcFiles = files.filter((f) => {return f !== 'bundle.js';})
    .map((f) => {
        return path.resolve(jsRootDir, f);
    })
    console.log('uglify js files...');
    var uglified = uglify.minify(srcFiles);
    if(uglified.code){
        fs.writeFile(path.resolve(jsRootDir, 'bundle.js'), uglified.code, 'utf8', (err) => {
            if(err){
                console.error(err);
            }else{
                console.log('uglify js done');
            }
        });
    }else{
        console.log('uglify failed');
    }
});
}

watch(__dirname, {}, (fileName) => {
    if(fileName.endsWith('.less')){
        renderCss();
    }else if(fileName.endsWith('.js')){
        !fileName.endsWith('bundle.js') && compressJs();
    }
});

