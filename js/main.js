$(function () {
    $(window).scroll(function () {
        //네비게이션

        let st = $(window).scrollTop();
        if (st > $('section').height() - 1) {
            $('nav').addClass('on');
        } else {
            $('nav').removeClass('on')
        }
        console.log(st)

        /* show */
        let pt = $('section.show').offset().top;
        let at = $('section.art').offset().top;
        console.log(pt)
        if (st < at && st >= pt) {
            $('section.show .bg_txt').stop().addClass('on');
        } else {
            $('section.show .bg_txt').removeClass('on')
        }

        /* project */
        let ct = $('section.project .pro1').offset().top-300;
        let ct2 = $('section.project .pro2').offset().top-300;
        let ct3 = $('section.project .pro3').offset().top-300;
        if (st >= ct) {
            $('section.project .pro1 .right').stop().addClass('on');
            $('section.project .pro1 .left').stop().addClass('on');
        } else {
            $('section.project .pro1 .right').removeClass('on')
            $('section.project .pro1 .left').removeClass('on')
        }
        if (st >= ct2) {
            $('section.project .pro2 .right').stop().addClass('on');
            $('section.project .pro2 .left').stop().addClass('on');
        } else {
            $('section.project .pro2 .right').removeClass('on')
            $('section.project .pro2 .left').removeClass('on')
        }

        if (st >= ct3) {
            $('section.project .pro3 .right').stop().addClass('on');
            $('section.project .pro3 .left').stop().addClass('on');
        } else {
            $('section.project .pro3 .right').removeClass('on')
            $('section.project .pro3 .left').removeClass('on')
        }



        /* app */
        let appt = $('section.app').offset().top-200;
        let appt2 = $('section.app').offset().top-0;
        if ( st >= appt) {
            $('section.app .txt .tit').stop().addClass('on');
            $('section.app .txt .txt_box').stop().addClass('on');
            $('section.app .img_box').stop().addClass('on');
        } else {
            $('section.app .txt .tit').removeClass('on')
            $('section.app .txt .txt_box').removeClass('on')
            $('section.app .img_box').removeClass('on')

        }

        /* story */
        let storyt = $('section.story').offset().top-600;
        let storyt2 = $('section.story').offset().top-400;
        if ( st >= storyt) {
            $('section.story span').stop().addClass('on');
        } else {
            $('section.story span').removeClass('on')

        }
        if ( st >= storyt2) {
            $('section.story .txt p').stop().addClass('on');
        } else {
            $('section.story .txt p').removeClass('on')

        }

        let artt = $('section.art').offset().top-50;
        let storyt3 = $('section.story').offset().top;
        if ( st >= artt && st< storyt3) {
            $('nav.on .ham').stop().addClass('on');
        } else {
            $('nav.on .ham').removeClass('on')
        }

    })
    //햄버거 클릭했을때
    $('nav .ham').click(function () {
        $('nav').addClass('active');
    })
    $('nav .close').click(function () {
        $('nav').removeClass('active');

    })
    //home 클릭했을때
    $('nav ul li').eq(0).click(function () {
        $('nav').removeClass('active');
        $('html,body').animate({
            scrollTop: 0,
        }, 600)
    });
    $('nav ul li').eq(1).click(function () {
        $('nav').removeClass('active');
        let at = $('section.about').offset().top;
        console.log(at)
        $('html,body').stop().animate({
            scrollTop: at,
        }, 600)
    });
    $('nav ul li').eq(2).click(function () {
        $('nav').removeClass('active');
        let st = $('section.show').offset().top;
        console.log(st)
        $('html,body').stop().animate({
            scrollTop: st,
        }, 600)
    });
    $('nav ul li').eq(3).click(function () {
        $('nav').removeClass('active');
        let art = $('section.art').offset().top;
        console.log(art)
        $('html,body').stop().animate({
            scrollTop: art,
        }, 600)
    });
    $('nav ul li').eq(4).click(function () {
        $('nav').removeClass('active');
        let rt = $('section.roll').offset().top;
        console.log(rt)
        $('html,body').stop().animate({
            scrollTop: rt,
        }, 600)
    });

    $(window).scroll(function () {
        /* about */

        let st = $(this).scrollTop(); //스크롤 탑 위치를 st에 저장
        let abTop = $('section.about').offset().top - 600; //이벤트가 스크롤 될 위치를 evTop에 저장
        let abTop2 = $('section.about').offset().top - 200; //이벤트가 스크롤 될 위치를 evTop에 저장
        console.log(abTop);
        //이벤트 컨텐츠 액션 시작
        if (st >= abTop) {
            $('section.about .txt_top').addClass('on').siblings().addClass('on').css({ 'transition-delay': '0.3s' });
        } else {
            $('section.about .txt_top').removeClass('on');
        }
        if (st >= abTop2) {
            $('section.about .txt_bottom').addClass('on').siblings().addClass('on').css({ 'transition-delay': '0.3s' });
        } else {
            $('section.about .txt_bottom').removeClass('on');
        }


    })


    /* other */
    let swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 50,     // 슬라이드 간격 

        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    $('section.other .swiper-slide').hover(function () {
        $(this).find('h3').stop().addClass('on').css({ 'transition': ' all 0.6' });
    }, function () {
        $(this).find('h3').removeClass('on').css({ 'transition': ' all 0.6' });

    })
})
