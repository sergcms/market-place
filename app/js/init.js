$(function ()  {
  // Init slick slider
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    dots: true
  });

  //init form stayler for select
  $('select').styler();
});
let openModalsBtns = $('[data-modal]');
openModalsBtns.on('click', function(){
    let target = $(this).attr('data-target');
    $(target).bPopup();
});