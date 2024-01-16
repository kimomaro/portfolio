$(function () {
   //close 버튼 
   $(window).scroll(function () {
      let st = $(window).scrollTop();
      //main 모션
      let mainTop = $('section.main').offset().top - 500;
      let mainTop2 = $('section.main').offset().top - 400;
      let mainTop3 = $('section.main').offset().top - 200;
      if (st > mainTop) {
         $('section.main .txt').stop().addClass('on');
      } else {
         $('section.main .txt').removeClass('on');

      }
      if (st > mainTop2) {
         $('section.main .phone').stop().addClass('on');
      } else {
         $('section.main .phone').removeClass('on');
      }
      if (st > mainTop3) {
         $('section.main .box>div ').stop().addClass('on');
      } else {
         $('section.main .box>div ').removeClass('on');
      }

      //progress 모션
      let proTop = $('section.progress').offset().top - 500;
      if (st > proTop) {
         $('section.progress .txt').stop().addClass('on');
         $('section.progress .content .pro_left').stop().addClass('on');
         $('section.progress .content .pro_right').stop().addClass('on');

      } else {
         $('section.progress .txt').removeClass('on');
         $('section.progress .content .pro_left').removeClass('on');
         $('section.progress .content .pro_right').removeClass('on');

      }

      //page 모션
      let pageTop = $('section.page').offset().top - 500;
      if (st > pageTop) {
         $('section.page .txt').stop().addClass('on');
         $('section.page .p_contents .page_left').stop().addClass('on');
         $('section.page .p_contents .page_right .pr_left ').stop().addClass('on');
         $('section.page .p_contents .page_right .pr_right').stop().addClass('on');

      } else {
         $('section.page .txt').removeClass('on');
         $('section.page .p_contents .page_left').removeClass('on');
         $('section.page .p_contents .page_right .pr_left ').removeClass('on');
         $('section.page .p_contents .page_right .pr_right').removeClass('on');

      }
   });

   let swiper = new Swiper(".mySwiper", {
      slidesPerView: 4.5,
      spaceBetween: 10,
      centeredSlides: true,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      /*    mousewheel: true, */
   });
})/* ready end */