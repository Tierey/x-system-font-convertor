##convert ttf to woff/woff2 and generate @font-face.

##use
``` javascript

const gulp          = require(`gulp`);

const fontConvertor = require(`@x-system/font-convertor`); // gulp 4 function

let options = {

    src  : [`./ttf/*.ttf`], // path to .ttf files
    dest : `./font`,        // path to font folder

    // optional 
    // ext    : ".styl", // @font-face file extention
    // folder : "$font"  // @font-face base path

}

gulp.task( "default", fontConvertor(options) )
```
## refs
[transfonter](https://transfonter.org/) - exelent online way for convert fonts.