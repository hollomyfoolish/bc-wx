var express = require('express'),
    watch = require('node-watch'),
    less = require('less'),
    fs = require('fs'),
    path = require('path');
var mainLessFile = path.resolve(__dirname, './wx/less/wx.less'),
    destCssFile = path.resolve(__dirname, './wx/css/wx-2.css');
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

watch(__dirname, {}, (fileName) => {
    if(fileName.endsWith('.less')){
        renderCss();
    }
});

