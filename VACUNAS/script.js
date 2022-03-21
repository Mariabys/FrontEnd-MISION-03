// menu

$('.menu-item-has-children , .menu-item-has-children .sub-menu').on('mouseover', function() {
  $('.sub-menu').first().addClass('sub-menu-active');
});

$('.menu-item-has-children ul .menu-item-has-children').on('mouseover', function() {
  $('.menu-item-has-children ul .menu-item-has-children .sub-menu').addClass('sub-menu-active');
});

$('.menu-item-has-children *').on('mouseleave', function() {
  $('.sub-menu').removeClass('sub-menu-active');
});

$('.prefix-open-menu').on('click', function() {
  $('.prefix-burger').toggleClass('prefix-on-menu');
  $('.prefix-navbar nav').toggleClass('prefix-active-menu');
});
