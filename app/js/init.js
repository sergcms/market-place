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

// Init slick slider with responsive
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Init form stayler for select
$('select').styler();

// Init modal login
let openModalsBtns = $('[data-modal]');
openModalsBtns.on('click', function(){
  let target = $(this).attr('data-target');
  $(target).bPopup({ 
    speed: 1000,
    transition: 'slideDown',
    transitionClose: 'slideIn',
    closeClass:'close-modal'
  });
});

$('.header-nav').slicknav({
  label: '',
  duration: 1000,
  // // easingOpen: "easeOutBounce", //available with jQuery UI
  // prependTo:'#demo2'
});


