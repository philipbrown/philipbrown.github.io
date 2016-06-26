var gulp = require("gulp");
    cssnano = require("gulp-cssnano")
    concat = require("gulp-concat-css")
    autoprefixer = require('gulp-autoprefixer');

gulp.task("css", function () {
  return gulp.src(["./css/normalize.css", "./css/main.css"])
  .pipe(concat("style.css"))
  .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
  .pipe(cssnano())
  .pipe(gulp.dest("."));
});

gulp.task('watch', function() {
  gulp.watch("css/*.css", ["css"]);
});
