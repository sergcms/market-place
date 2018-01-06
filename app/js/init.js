$(function ()  {
  
  // Init grid cards
  $('#grid-thumbs').on('click', function() {
    $('.card.medium-card').removeClass('row-card');
  });
  $('#grid-list').on('click', function() {
    $('.card.medium-card').addClass('row-card');  
  });
  
  // Init slick slider
  $('.').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    dots: true
  });

  //Init form stayler for select
  $('select').styler();
});