window.onload = () => {
    const Slider = function (pages, pagination) {
        let slides = [],
            btns = [],
            count = 0,
            current = 0,
            touchstart = 0,
            animation_state = false;

        const init = () => {
            slides = pages.children;
            count = slides.length;
            for (let i = 0; i < count; i++) {
                slides[i].style.bottom = -(i * 100) + '%';
                let btn = document.createElement('li');
                btn.dataset.slide = i;
                btn.addEventListener('click', btnClick)
                btns.push(btn);
                pagination.appendChild(btn);
            }
            btns[0].classList.add('active');
        }

        const gotoNum = (index) => {
            if ((index != current) && !animation_state) {
                animation_state = true;
                setTimeout(() => animation_state = false, 500);
                btns[current].classList.remove('active');
                current = index;
                btns[current].classList.add('active');
                for (let i = 0; i < count; i++) {
                    slides[i].style.bottom = (current - i) * 100 + '%';
                }
            }
        }

        const gotoNext = () => current < count - 1 ? gotoNum(current + 1) : false;
        const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;
        const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));
        pages.ontouchstart = (e) => touchstart = e.touches[0].screenY;
        pages.ontouchend = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
        pages.onmousewheel = pages.onwheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();

        init();
    }

    let pages = document.querySelector('.pages');
    let pagination = document.querySelector('.pagination');
    let slider = new Slider(pages, pagination)
}
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
    currentIndex = 0; // 현재 인덱스를 0으로 초기화
    $('.slider_warp').animate({
        marginLeft: 0
    }, 0); // 애니메이션을 정지
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

    $('.fa-bars').click(function () {
        $('.menu_full').css('display', 'block');
        $('.slider_box, .slider_warp, .slider').css('z-index', '-999');
    });
    $('.fa-x').click(function () {
        $('.menu_full').css('display', 'none');
        $('.slider_box, .slider_warp, .slider').css('z-index', '9');
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
    gsap.from(".step h2", {
        scrollTrigger: {
            trigger: ".guide",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
        },
        x: 800,
        duration: 1,
    });
    gsap.from(".step p", {
        scrollTrigger: {
            trigger: ".guide",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        },
        y: 800,
        duration: 2,
    });
    gsap.from(".guide .img-box img ", {
        scrollTrigger: {
            trigger: ".guide",
            start: "top center",
            end: "bottom center",
            scrub: 1,
        },
        x: -200,
        y: -200,
        scale: 0.5,
        rotation: 360,
        ease: "power1.out",
        duration: 1,
    });
    gsap.to(".search", {
        scrollTrigger: {
            trigger: ".plus",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
        },
        backgroundColor: "#FAD200",
        duration: 0.5,
    });
    gsap.to(".search2", {
        scrollTrigger: {
            trigger: ".plus",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
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
