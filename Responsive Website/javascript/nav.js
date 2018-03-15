var w = $(window).width();
var h = $(window).height();
var slides = $('.Slides > div');
$('.SlideContainer').css({ height: (h-60) + 'px' });
$('.Slides').css({ width: slides.length + '00%' });
slides.css({ width: w + 'px' });

var pos = 0;

$('.Left').click(function(){
  pos--;
  $('.Slides').animate({ left: (pos * w) + 'px' });
});
$('.Right').click(function(){
  pos++;
  $('.Slides').animate({ left: (pos * w) + 'px' });
});
