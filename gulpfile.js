const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const sass = require('gulp-dart-sass');

/* Configure css styles that will add to final output style file 'app.css'. */
function stylesCss() {
   return gulp
      .src('./scss/app.scss')
      .pipe(autoPrefixer({
         overrideBrowserslist: ["last 2 versions"],
         cascade: false
      }))
      .pipe(sass({
         outputStyle: "expanded"
      }))
      .pipe(gulp.dest('./css/'));
}

/* Configure a watch function to apply automatic changes. */
function watchFiles() {
   gulp.watch('./scss/*.scss', stylesCss);
   gulp.watch('./index.html');
}

/* Registers the functions declared as tasks to be executed. */
gulp.task('stylesCss', stylesCss);
gulp.task('watchFiles', gulp.parallel(watchFiles));
