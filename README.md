Учебный проект "Верстка интернет магазина"
================================

### Используемые технологии

1. Сборщик проектов Gulp.js
2. Библиотека JavaScript - jQuery

### Используемые плагины

1. slick-slider - для стилизации карусели
2. form-stayler - для стилизации элементов форм
3. range-slider - для стилизации фильтра цены
4. datepicker - для стилизации календаря
5. bpopup - для модального окна


### Используемые шрифты и иконки

1. Font-Awesome - иконочный шрифт 
2. Сконвертированные шрифты: 
- Roboto: 400,500,700
- Open Sans: 600,800
- Raleway: 700
- Lato: 700
- Myriad Pro

### Стандартные компоненты и классы

***Компоненты***
1. Стилизируем заголовки:
```
    .title 
    .title.small
    .title.middle
    .title.singular
    .title.big
    .title-block
    .regular
    .medium
    .bold
```
2. Стилизируем стандартные кнопки:
```
    .btn.btn-default
    .btn.btn-xs
    .btn.btn-sm
    .btn.btn-md
    .btn.btn-social
    .btn.radius
    .btn.btn-default.btn-shadow
    .btn.full-width
```
3. Задаем отступы между стандартными блоками:
```
    .default-section
    .small-section
    .big-section
    .inner-section
    .search-section
    .search-section.big
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
    .bg-light-gray
    .bg-dirty-white
    .bg-yellow
    .bg-orange
    .bg-red
    .bg-green
    .bg-white
    .bg-light-green
    .bg-light-red
```
4. Стилизируем боковую панель
```
    .aside-section
    .aside-title
```
5. Стилизируем дефолтные формы и элементы форм:
```
    .form-default
    .default-label
    .form-email
    .wrap-form-email
    .form-search
    .wrap-form-search
    .file-upload
    .form-contact
    .form-login
    .jq-selectbox
```
6. Стилизируем карточки товаров:
```
    .card.large-card
    .card.medium-card
    .card.row-card
    .card.small-card
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
