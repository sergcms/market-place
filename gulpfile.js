const gulp = require('gulp');  // подключение gulp
const autoprefixer = require('gulp-autoprefixer'); // подключение autoprefixer
const spritesmith = require('gulp.spritesmith');
const merge = require('merge-stream');
const tinypng = require('gulp-tinypng');

gulp.task('autoprefixer', function() { // создаем таск autoprefixer 
  gulp.src('src/css/**/*.css')       // файлы которые будем обрабатывать
    .pipe(autoprefixer({             // запуск autoprefixer
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('app/css'))      // выгружаем обработанные файлы
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('src/sprite/*.png')
      .pipe(spritesmith({ // Настройка спрайта
          imgName: 'sprite.png',
          cssName: 'sprite.css',
          imgPath: '../img/sprite.png'
      }));

  var imgStream = spriteData.img
      .pipe(gulp.dest('app/img/'));

  var cssStream = spriteData.css
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest('app/css/'));

  return merge(imgStream, cssStream);
});

gulp.task('tinypng', function () {
  gulp.src([
      'src/img/**/*.jpg',
      'src/img/**/*.png'
  ])
  .pipe(tinypng('V6mnBhM_EnAKN2-1deY1hm75t1wIhFzS'))
  .pipe(gulp.dest('app/img/'));
});

gulp.task('watch', ['autoprefixer'], function() {   // создаем таск watch
  gulp.watch('src/css/**/*.css', ['autoprefixer']); // следим за изменениями в файлах и обрабатуем их 
  // gulp.watch( 'src/sprite/*.png', ['sprite'] );
  // gulp.watch( 'src/img/**/*', ['tinypng'] );
});

gulp.task('default', ['watch']);