// 헤더 hover효과
$(document).ready(function () {
    $('.submenu').mouseenter(function () {
        $(this).siblings('a').css('color', 'var(--pupule-color)');
    });
    $('.submenu').mouseleave(function () {
        $(this).siblings('a').css('color', '#fff');
    });

    //   슬라이드

    let currentIndex = 0;
    var firstClone = $('.slider').eq(0).clone(true);
    $('.slider_warp').append(firstClone);
    circleIndex = $('.circle').index();

    setInterval(function () {
        currentIndex++;
        $('.slider_warp').animate({
            marginLeft: -currentIndex * 100 + "vw"
        }, 500);

        $('.circle').eq(currentIndex).css('background-color', 'var(--pupule-color)');
        $('.circle').eq(currentIndex).siblings().css('background-color', '#ffffff3e');

        if (currentIndex == 4) {
            $('.circle').eq(3).css('background-color', '#ffffff3e');
            setTimeout(function () {
                $('.circle').eq(0).css('background-color', 'var(--pupule-color)');
                $('.slider_warp').animate({
                    marginLeft: 0
                }, 0); //애니매이션을 정지
                currentIndex = 0; //현재이미지 초기화  
            }, 2000);
            $('.circle').eq(0).css('background-color', 'var(--pupule-color)');

        }
    }, 2500)


    function circle() {

        $('.circle').click(function () {
            circleIndex = $(this).index();
            $('.slider_warp').animate({
                marginLeft: -circleIndex * 100 + "vw"
            }, 500);
            $(this).siblings().css('background-color', '#fff')
            $(this).css('background-color', 'var(--pupule-color)');
        })
    }

    circle();

    $('.container2 .menu_icon').click(function () {
        $('.menu_full').css('display', 'block');
        $('.slider_box').css('z-index', '-999');
        $('.slider_warp').css('z-index', '-999');
        $('.slider').css('z-index', '-999');
    });
    $('.fa-solid').click(function() {
        $('.menu_full').css('display', 'none');
        $('.slider_box').css('z-index', '9');
        $('.slider_warp').css('z-index', '9');
        $('.slider').css('z-index', '9');
    });


    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".guide", {
        scrollTrigger: {
            trigger: ".guide",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
        backgroundColor: "#FAD200",
        duration: 0.5,
    });
    gsap.to(".plus", {
        scrollTrigger: {
            trigger: ".plus",
            start: "top center",
            end: "bottom center",
            scrub: 2,
            // markers: true,
        },
        scale: 1.2,
        duration: 0.5,
    });
    gsap.to(".benefits", {
        scrollTrigger: {
            trigger: ".plus",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
        backgroundColor: "#FAD200",
        duration: 0.5,
    });
    gsap.to(".search", {
        scrollTrigger: {
            trigger: ".plus",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
        backgroundColor: "#FAD200",
        duration: 0.5,
    });
    gsap.to(".search2", {
        scrollTrigger: {
            trigger: ".plus",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
        backgroundColor: "#FAD200",
        duration: 0.5,
    });

    function changeImage() {
        var images = document.querySelectorAll('.img-slide img');
        var index = 0;

        // 첫 번째 이미지를 보이게 설정
        images[index].style.display = 'block';

        // 나머지 이미지를 숨김
        for (var i = 1; i < images.length; i++) {
            images[i].style.display = 'none';
        }

        // 2초마다 이미지 변경
        setInterval(function () {
            images[index].style.display = 'none';
            index = (index + 1) % images.length; // 인덱스 순환
            images[index].style.display = 'block';
        }, 2000); // 2000ms = 2초
    }

     changeImage();
});
