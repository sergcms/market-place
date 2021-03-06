const gulp = require('gulp');  // подключение gulp
const autoprefixer = require('gulp-autoprefixer'); // подключение autoprefixer

gulp.task('autoprefixer', function() { // создаем таск autoprefixer 
  gulp.src('src/css/**/*.css')       // файлы которые будем обрабатывать
    .pipe(autoprefixer({             // запуск autoprefixer
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('app/css'))      // выгружаем обработанные файлы
});

gulp.task('watch', ['autoprefixer'], function() {   // создаем таск watch
  gulp.watch('src/css/**/*.css', ['autoprefixer']); // следим за изменениями в файлах и обрабатуем их 
});

gulp.task('default', ['watch']);