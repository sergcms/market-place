// Open dropdown nav 
// let nav = $('[data-open-dropdown]');
let nav = $('.dropdown-container');
nav.on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
});

// Switch grid cards (all-items)
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

// Init modal login
let openModalsBtns = $('[data-modal]');
openModalsBtns.on('click', function(){
  let target = $(this).attr('data-target');
  $(target).bPopup({ });
});

// Init mobile slicknav
$('.header-nav').slicknav({
  appendTo: '.header .menu .container',
  label: ''
});