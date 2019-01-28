// Default DevCorner JavaScript Setting
$(window).scroll(function(){
  var wintop = $(window).scrollTop(),
    docheight = $(document).height(),
    winheight = $(window).height();

  var scrolled = (wintop/(docheight-winheight))*100;
  $('.scroll-line').css('width', (scrolled + '%'));
  $('.indicator').text(scrolled.toFixed(0));
});
