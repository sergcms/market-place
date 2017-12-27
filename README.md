Учебный проект "Верстка интернет магазина"
================================

### Используемые технологии

1. Сборщик проектов Gulp.js
2. Библиотека JavaScript - jQuery

### Используемые плагины

1. slick-slider для стилизации карусели
2. formstayler для стилизации элементов форм

### Используемые шрифты и иконки

1. Font-Awesome - иконочный шрифт 
2. Сконвертированные шрифты: 
- Roboto: 400,500,700
- Open+Sans:600
- Raleway:700
- Lato:700

### Стандартные компоненты и классы

***Компоненты***
1. Стилизируем заголовки:
```
    .title 
    .title.small
    .title.middle
    .title.singular
    .title.big
```
2. Стилизируем стандартные кнопки:
```
    .btn.btn-default
    .btn.btn-xs
    .btn.btn-sm
    .btn.btn-md
    .btn.btn-social
    .btn.medium
    .btn.regular
    .btn.bold
    .btn.radius
    .btn.btn-default.btn-shadow
    .btn.full-width
```
3. Задаем отступы между стандартными блоками:
```
    .default-section
    .small-section
    .big-section
    .default-search-section
    .search-section-small
    .search-section-big
```
4. Стилизируем стандартную текстовую информацию:
```
    .text-default
```

***Классы***
1. Создаем флекс контейнеры
```
    .d-flex
```
2. Выравниваем элементы по горизонтали и вертикали:
```
    .justify-content-start
    .justify-content-end
    .justify-content-center
    .justify-content-between
    .justify-content-around
    .align-items-start
    .align-items-end
    .align-items-center
    .align-items-baseline
    .align-items-stretch
```
3. Задаем цвет:
```
    .text-white
    .text-red
    .text-dark-gray
    .text-gray
    .text-green
    .text-dirty-blue
    .text-light-gray
    .text-search-box
    .bg-dark-gray
    .bg-gray
    .bg-green
    .bg-white
    .bg-dirty-white
```
4. Стилизируем боковую панель
```
    .aside
```
5. Стилизируем дефолтные формы и элементы форм:
```
    .form-default
    .form-email
    .form-search
    .file-upload
    .form-contact
    .form-login
    .jq-selectbox
```
---

**Структура папок**

Название папок  | Содержание файла
----------------|----------------------
app             | Директория с готовым проектом
app/css         | Готовые стили к продакшену
app/js          | Готовый js к продакшену
app/img         | Готовые картинки к продакшену
app/fonts       | Шрифты
src             | Директория с исходными файлыми
src/css         | Исходные стили, здесь мы пишем наши стили и они будут конвертироваться в app/css
src/img         | Исходные картинки, они будут минифицироваться и перегоняться в app/img
src/js          | Исходный js будет минифицироваться и переносится в app/js
src/sprite      | Папка для нарезанных картинок под будущие спрайты, после конветрации попадут в app/img

---

**Поставленные задачи для Gulp**
* Добавление вендорных префиксов в css
* Оптимизация картинок
* Создание спрайтов

---
