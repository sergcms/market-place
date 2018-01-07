$(function ()  {
  
  // Init grid cards
  $('#grid-thumbs').on('click', function() {
    $('.change-icon').removeClass('active');
    $('#grid-thumbs').addClass('active');
    $('.card.medium-card').removeClass('row-card');
  });
  $('#grid-list').on('click', function() {
    $('.change-icon').removeClass('active');
    $('#grid-list').addClass('active');
    $('.card.medium-card').addClass('row-card');  
  });
  
  // Init slick slider
  $('.multiple-items').slick({
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