$(document).ready(function(){
  $('p:first').toggle(function(){
  	$(this).animate( {'height':'+=150px'}, 2000, 'linear');
  }, function(){
  	$(this).animate({'height':'-=150px'}, 2000, 'swing');
  });
  });
  // $('#navigation li').hover(function(){
  //   $(this).animate({
  //     paddingLeft: '+=15px'
  //   }, 200);
  // }, function(){
  //   $(this).animate({
  //     paddingLeft: '-=15px'
  //   }, 200);
  // });
});
