$(function () {
   //close 버튼 
   $(window).scroll(function () {
       let st = $(window).scrollTop();
       //overview 모션
      let ovTop = $('section.overview').offset().top-500;
      let ovTop2 = $('section.overview').offset().top-200;
      if(st>ovTop){
         $('section.overview span').stop().addClass('on');
      }else{
         $('section.overview span').removeClass('on');

      }
      if(st>ovTop2){
         $('section.overview .container img').stop().addClass('on');
      }else{
         $('section.overview .container img').removeClass('on');
      }


   })

})/* ready end */