document.addEventListener('DOMContentLoaded', function () {
    $('.gnb_warp > li').hover(
        function () {
            // 마우스 오버 시 모든 하위 ul 요소를 보이게 함
            $(this).find('ul').show();
            $(this).siblings().find('ul').show();
        },
        function () {
            $(this).find('ul').hide();
            $(this).siblings().find('ul').hide();
        }
    );
    $('header .menu').click(function () {
        $('body').css('overflow', 'hidden');
        $('.menu_wrap').css({
            'right': '0',
            'opacity': 1
        });
    });

    $('header .close').click(function () {
        $('body').css('overflow', 'auto');
        $('.menu_wrap').css({
            'right': '-1000px',
            'opacity': 0
        });
    });

    const textElements = gsap.utils.toArray('.intro .b_txt');
    textElements.forEach(text => {
        gsap.to(text, {
            backgroundSize: '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: text,
                start: 'center 22%',
                end: 'center 75%',
                scrub: 2,
                // markers:true
            },
        });
    });
    const scrollLinks = document.getElementsByClassName('arrow');

    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function (event) {
            event.preventDefault(); // 기본 액션 막기
            window.scrollTo({
                top: document.body.scrollHeight, // 페이지 하단으로 스크롤
                behavior: 'smooth' // 부드러운 스크롤 효과
            });
        });
    }

    const bannerList = document.querySelector('.rolling');
    const bannerItems = document.querySelectorAll('.rolling .img_box');
    const numBanners = bannerItems.length; // 총 배너의 갯수를 변수에 담기

    // 선택된 배너의들을 복제해서 뒤에 이어 붙이기 
    for (let i = 0; i < numBanners; i++) {
        bannerList.appendChild(bannerItems[i].cloneNode(true));
    }

    // 배너 하나의 너비를 계산한다.
    const bannerWidth = bannerItems[0].offsetWidth;
    // 배너 리스트의 너비를 설정한다.
    bannerList.style.width = `${bannerWidth * numBanners * 2 + 10 * (numBanners * 2 - 1)}px`;

    // 현재 배너 위치와 마지막으로 애니메이션을 실행한 시간을 저장하는 변수를 초기화
    let currentPos = 0;
    let lastTime = 0;

    // 애니메이션을 실행하는 함수를 정의
    function animate(timestamp) {
        // 마지막으로 애니메이션을 실행한 시간과 현재 시간 사이의 차이를 계산
        const delta = timestamp - lastTime;
        lastTime = timestamp;

        // 배너 리스트를 이동시킬 거리를 계산
        currentPos -= (bannerWidth + 10) * delta / 1000;
        // 만약 배너 리스트가 전부 왼쪽으로 이동했다면, 처음 위치로 이동
        if (currentPos <= -(bannerWidth + 10) * numBanners) {
            currentPos = 0;
        }
        // 배너 리스트를 이동
        bannerList.style.transform = `translateX(${currentPos}px)`;

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    var swiper = new Swiper('.club .swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 1,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 2,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 2,
            },
            1920: {
                slidesPerView: 5,
                spaceBetween: 3,
            },



        },

        // Scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragClass: 'swiper-scrollbar-drag', // 드래그 가능한 스코롤바 요소의 CSS 클래스
        },
    });

    gsap.from(".letter1", {
        scrollTrigger: {
            trigger: ".arrow",
            start: "60% center",
            end: "90% center",
            scrub: 2,
            // markers:true,
        },
        scale: 3,
        color: 'rgba(221, 221, 221, 0)',
        y: -500,
        x: -800,
    });
    gsap.from(".letter2", {
        scrollTrigger: {
            trigger: ".arrow",
            start: "60% center",
            end: "90% center",
            scrub: 2,
            // markers:true,
        },
        scale: 3,
        color: 'rgba(221, 221, 221, 0)',
        y: 200,
        x: -350,
    });
    gsap.from(".letter3", {
        scrollTrigger: {
            trigger: ".arrow",
            start: "60% center",
            end: "90% center",
            scrub: 2,
            // markers:true,
        },
        scale: 3,
        color: 'rgba(221, 221, 221, 0)',
        y: -300,
        x: -250,
    });
    gsap.from(".letter4", {
        scrollTrigger: {
            trigger: ".arrow",
            start: "60% center",
            end: "90% center",
            scrub: 2,
            // markers:true,
        },
        scale: 2,
        color: 'rgba(221, 221, 221, 0)',
        y: 300,
        x: -250,
    });
    gsap.from(".letter5", {
        scrollTrigger: {
            trigger: ".arrow",
            start: "60% center",
            end: "90% center",
            scrub: 2,
            // markers:true,
        },
        scale: 3,
        color: 'rgba(221, 221, 221, 0)',
        y: -300,
        x: 0,
    });
    gsap.from(".letter6", {
        scrollTrigger: {
            trigger: ".arrow",
            start: "60% center",
            end: "90% center",
            scrub: 2,
            // markers:true,
        },
        scale: 3,
        color: 'rgba(221, 221, 221, 0)',
        y: 300,
        x: 0,
    });
    gsap.from(".letter7", {
        scrollTrigger: {
            trigger: ".arrow",
            start: "60% center",
            end: "90% center",
            scrub: 2,
            // markers:true,
        },
        scale: 3,
        color: 'rgba(221, 221, 221, 0)',
        y: -500,
        x: 200,
    });
    gsap.from(".letter8", {
        scrollTrigger: {
            trigger: ".arrow",
            start: "60% center",
            end: "90% center",
            scrub: 2,
            // markers:true,
        },
        scale: 2,
        color: 'rgba(221, 221, 221, 0)',
        y: 400,
        x: 400,
    });
    gsap.from(".letter9", {
        scrollTrigger: {
            trigger: ".arrow",
            start: "60% center",
            end: "90% center",
            scrub: 2,
            // markers:true,
        },
        scale: 3,
        color: 'rgba(221, 221, 221, 0)',
        y: 0,
        x: 800,
    });

    window.addEventListener('scroll', function () {
        var PositionY = window.pageYOffset;

        if (PositionY >= 5700) {
            document.querySelector('.shop_name').style.backgroundImage = "url(./images/back03.jpg)";
        } else {
            document.querySelector('.shop_name').style.backgroundImage = "url(./images/back01.jpg)";
        }
    })

    $('.btn_more').click(function () {
        $('.cont2').removeClass('cont2')
        $(this).css('display', 'none')
    })
})