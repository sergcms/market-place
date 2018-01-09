// найти все ссылки в tabs-controls
// найти все блоки tab-pane
// при клике на пункт tabs-controls мы должны определить какой блок показывать
// найти этот блок
// удаляем со всех tab-pane классы active
// удалили со всех ссылок в tabs-controls класс active
// добавить класс active на текущий tab-pane
// добавить класс active на текущий tabs-controls

// { name: 'Denis', age: 28 }
// $('.tabs-controls a');

//

let tabsControls = $('[data-tab-controls]');
let tabPane = $('[data-tab-pane]');

// элемент.on(название_события, обработчик_события);
tabsControls.on('click', function(e){

    // отмена стандартного действия браузера
    e.preventDefault();

    // создадим переменнуб в которой будем хранить то что записано в data-tabs
    let target = $(e.target).attr('data-tabs');

    // получить сам элемент  $(target)
    // Удалить со всех tab-pane класс active
    tabPane.removeClass('active');
    // Удалить класс со всех tab-controls
    tabsControls.removeClass('active');
    // добавляем класс на tab-pane
    $(target).addClass('active');
    // добавляем класс active на tabs controls
    $(e.target).addClass('active');

});
