var pContainerHeight = $('.bird-box').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : wScroll /2 +'%, '+ wScroll /2 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-bird').css({
      // 'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
      'transform' : 'translate(-'+ wScroll /40 +'% , -'+ wScroll /40 +'%)'
    });

  }


  // Landing Elements
  if(wScroll > $('.tech-pics').offset().top - ($(window).height() / 1.2)) {

    $('.tech-pics figure').each(function(i){

      setTimeout(function(){
        $('.tech-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  }


  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 200) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.project-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.project-posts').offset().top +$(window).height() - 350)).toFixed();
    var offset2 = (Math.min(0, wScroll - $('.project-posts').offset().top +$(window).height() - 1100)).toFixed();
    // console.log('0.'+offset);

    $('.post-1').css({
      'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'
  });

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-5').css({'transform': 'translate('+ 0 +'px, '+ (Math.abs(offset2 * 0.2))*-1 +'px)'});

    $('.post-4').css({'transform': 'translate('+ offset2 +'px, '+ Math.abs(offset2 * 0.2) +'px)'});

    $('.post-6').css({'transform': 'translate('+ Math.abs(offset2) +'px, '+ Math.abs(offset2 * 0.2) +'px)'});

  }

  // function scrollContent(id) {
    // $("a").on('click', function(){
    //   if(this.hash !== ""){
    //     event.preventDefault();
    //     var hash = this.hash;

    //     $('html, body').animate({ scrollTop: $(hash).offset().top }, 2000, function(){
    //       // window.location.hash = hash;
    //     });
    //   }
    // });
    // console.log(event)
    // $('html, body').animate({ scrollTop: $('#' + id).offset().top }, 2000);
// }

    // $('#link1').click(function(e){
    //     e.preventDefault();
    //     console.log(this.hash);
    //     $path =$('#home').offset().top;
    //     $('body').animate({scrollTop:$path}, 1000);
    // });
    
    // $('#link2').click(function(e){
    //     e.preventDefault();
    //     $path =$('#projects').offset().top;
    //     $('body').animate({scrollTop:$path}, 1000);
    // });
    
    // $('#link3').click(function(e){
    //     e.preventDefault();
    //     $path =$('#about').offset().top;
    //     $('body').animate({scrollTop:$path}, 1000);
    // });

    // $('#link4').click(function(e){
    //       e.preventDefault();
    //       $path =$('#contact').offset().top;
    //       $('body').animate({scrollTop:$path}, 3000);
    // });
});

function scrollContent(id) {
  event.preventDefault();
  $('html, body').animate({ scrollTop: $('#' + id).offset().top }, 2000);
}
