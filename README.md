#use
``` javascript

const gulp           = require(`gulp`);

const fontConvertor  = require(`./index`); // gulp 4 function

let options = {
    src  : [`./ttf/*.ttf`], // path to .ttf files
    dest : `./font`         // path to font folder
}

gulp.task( "default", fontConvertor(options) )
```
