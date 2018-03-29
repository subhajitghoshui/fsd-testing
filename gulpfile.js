var gulp = require('gulp');//The require statement tells Node 
										//to look into the node_modules folder 
													//for a package named gulp.

// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'www'
    },
  })
});


gulp.task('html', function() {
  return gulp.src('dev/*.html') // Gets all files ending with .scss in dev/scss
    .pipe(gulp.dest('www'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('sass', function() {
  return gulp.src('dev/scss/**/*.scss') // Gets all files ending with .scss in dev/scss
    .pipe(sass())
    .pipe(gulp.dest('www/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('js', function() {
  return gulp.src('dev/js/**/*.js') // Gets all files ending with .html in dev/html
    .pipe(gulp.dest('www/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('img', function() {
  return gulp.src('dev/images/*.{gif,jpg,png,svg,ico,pdf}') // Gets all files ending with .html in dev/images
    .pipe(gulp.dest('www/images'))
    .pipe(browserSync.reload({
      stream: true
    }))
});



gulp.task('watch', ['browserSync', 'html', 'sass', 'js', 'img'], function (){
  gulp.watch('dev/*.html', ['html']);
  gulp.watch('dev/scss/**/*.scss', ['sass']); 
  gulp.watch('dev/js/**/*.js', ['js']); 
  gulp.watch('dev/images/*.{gif,jpg,png,svg,ico,pdf}', ['img']); 
});