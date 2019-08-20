
const gulp = require(`gulp`);

const task = require(`./lib/task`);

function fontConvertor( options ) {

    return gulp.series(

        function font_convertor (callback) {

            task(options).call(this,callback)

        }

    )
}

module.exports = fontConvertor