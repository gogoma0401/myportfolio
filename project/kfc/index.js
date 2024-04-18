$(document).ready(function () {
    $('.sub_menu').hide();
    $('.main_menu').on('mouseenter', function () {
        $('.sub_menu').stop().fadeIn();
    });
    $('.main_menu').on('mouseleave', function () {
        $('.sub_menu').stop().fadeOut();
    });
    $('.sub_menu>li').on('mouseenter', function () {
        $(this).css('background-color', '#fe9f2ba4');
    });
    $('.sub_menu>li').on('mouseleave', function () {
        $(this).css('background-color', '');
    });
    // 이미지 배열
    let swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 4,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 2,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 1,
            },
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
        },
        initialSlide: 1,
        observer: true,
        observeParents: true,
    });

    var images = document.querySelectorAll('.load_imgbox img');
    var check = 0;

    function play() {
        images[check].style.display = 'none';
        check++;
        if (check >= images.length) {
            check = 0;
        }
        images[check].style.display = 'block';
        setTimeout(play, 3000);
    }
    play();

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".info", {
        scrollTrigger: {
            trigger: ".info",
            start: "top center",
            end: "bottom center",
            scrub: 2,
        },
        rotation: -360,
        x: -700,
        duration: 1,
    });

    // 모바일
    $('.app_menu .fa-bars').click(function () {
        $('.app_menu .fa-bars').fadeOut();
        $('.app_menu .fa-x').fadeIn();
        $('.app_sub').fadeIn();
    });

    $('.app_menu .fa-x').click(function () {
        $('.app_menu .fa-x').fadeOut();
        $('.app_menu .fa-bars').fadeIn();
        $('.app_sub').fadeOut();
    });

    document.querySelector('.box').addEventListener('mouseenter', function () {
        this.classList.add('show-scrollbar');
    });
    document.querySelector('.box').addEventListener('mouseleave', function () {
        this.classList.remove('show-scrollbar');
    });

});
