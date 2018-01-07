$(function ()  {
  
  // Init grid cards (all-items)
  $('#grid-thumbs').on('click', function() {
    $('.card.medium-card').removeClass('row-card');
  });
  $('#grid-list').on('click', function() {
    $('.card.medium-card').addClass('row-card');  
  });

  // Init tabs (products-details)
  $('.tabs-controls a').on('click', function(e) {
    e.preventDefault();
    $('.tab-pane').removeClass('active');
    $('.tabs-controls a').removeClass('active');
    let tab = $(this).attr('data-tabs');
    $(this).addClass('active');
    $('#'+tab).addClass('active');
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