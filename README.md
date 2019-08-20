#use
``` javascript

const gulp           = require(`gulp`);

const fontConvertor  = require(`@x-system/font-convertor`); // gulp 4 function

let options = {
    src  : [`./ttf/*.ttf`], // path to .ttf files
    dest : `./font`         // path to font folder
}

gulp.task( "default", fontConvertor(options) )
```
