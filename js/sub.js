$(function () {
   //close 버튼 
   $(window).scroll(function () {
      let st = $(window).scrollTop();
      //overview 모션
      let ovTop = $('section.overview').offset().top - 500;
      let ovTop2 = $('section.overview').offset().top - 200;
      if (st > ovTop) {
         $('section.overview span').stop().addClass('on');
      } else {
         $('section.overview span').removeClass('on');

      }
      if (st > ovTop2) {
         $('section.overview .container img').stop().addClass('on');
      } else {
         $('section.overview .container img').removeClass('on');
      }

      //logo 모션
      let logoTop = $('section.logo').offset().top - 300;
      if (st > logoTop) {
         $('section.logo .logo_left').stop().addClass('on');
         $('section.logo .logo_right').stop().addClass('on');
      } else {
         $('section.logo .logo_left').removeClass('on');
         $('section.logo .logo_right').removeClass('on');

      }

      //content 모션
      let conTop = $('section.content').offset().top - 300;
      if (st > conTop) {
         $('section.content span').stop().addClass('on');
         $('section.content video').stop().addClass('on');
         $('section.content p').stop().addClass('on');
      } else {
         $('section.content span').removeClass('on');
         $('section.content video').removeClass('on');
         $('section.content p').removeClass('on');

      }

      //video 모션
      let vdTop = $('section.video').offset().top - 500;
      if (st > vdTop) {
         $('section.video img:nth-child(2)').stop().addClass('on');
         $('section.video .img').stop().addClass('on');
      } else {
         $('section.video img:nth-child(2)').removeClass('on');
         $('section.video .img').removeClass('on');

      }
   })

})/* ready end */