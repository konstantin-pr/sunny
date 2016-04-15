var gulp          = require("gulp"),
    include       = require("gulp-codekit"),
	sass = require('gulp-sass');

gulp.task("scripts", function() {
  console.log("-- gulp is running task 'scripts'"); 
  gulp.src("js/landio.js")
    .pipe(include())
      .on('error', console.log)
    .pipe(gulp.dest("js"));
});
 


gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task("default", ["styles"]);
 