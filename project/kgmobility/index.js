    //스와이프
    $(document).ready(function () {
        $(function() {
        $('.hamburger-button').on('click', function(event){
            event.preventDefault();
            
            $(this).toggleClass('active');
            $('.overlay').toggleClass('visible');
    
        });
    });
        var swiper = new Swiper(".mySwiper", {
            direction: 'horizontal',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });

        const positionY = $(".model_container").offset().top;
        window.addEventListener("scroll", function () {
            const scrollY = $(window).scrollTop();
            // console.log(positionY, scrollY);
            if (positionY <= scrollY) {
                $('header').css('background-color', '#3f3f3f97');
                $('.sub-list').css('background-color', '#3f3f3f97');
            } else {
                $('header').css('background-color', '');
                $('.sub-list').css('background-color', '');
            }
        });

        let count = 1;
        $('.circle1').css('background-color', '#002c5f');
        $('.bar1').click(function () {
            if (count == 1) {
                $('.circle').css('background-color', '');
                $('.circle3').css('background-color', '#002c5f');
                $('.model_img1 .img_box img').attr('src', './imgaes/model3.jpg');
                $('.model_img2 .img_box img').attr('src', './imgaes/model1.jpg');
                $('.model_img3 .img_box img').attr('src', './imgaes/model2.jpg');
                $('.model_img1 p').text('3위. TORRES EVX');
                $('.model_img2 p').text('1위. KORANDO');
                $('.model_img3 p').text('2위. TIVOLIAIR');

            } else if (count == 2) {
                $('.circle').css('background-color', '');
                $('.circle2').css('background-color', '#002c5f');
                $('.model_img1 .img_box img').attr('src', './imgaes/model2.jpg');
                $('.model_img2 .img_box img').attr('src', './imgaes/model3.jpg');
                $('.model_img3 .img_box img').attr('src', './imgaes/model1.jpg');
                $('.model_img1 p').text('2위. TIVOLIAIR');
                $('.model_img2 p').text('3위. TORRES EVX');
                $('.model_img3 p').text('1위. KORANDO');


            } else if (count == 3) {
                $('.circle').css('background-color', '');
                $('.circle1').css('background-color', '#002c5f');
                $('.model_img1 .img_box img').attr('src', './imgaes/model1.jpg');
                $('.model_img2 .img_box img').attr('src', './imgaes/model2.jpg');
                $('.model_img3 .img_box img').attr('src', './imgaes/model3.jpg');

                $('.model_img1 p').text('1위. KORANDO');
                $('.model_img2 p').text('2위. TIVOLIAIR');
                $('.model_img3 p').text('3위. TORRES EVX');
            }
            count++;
            if (count > 3) {
                count = 1;
            }
        })
        $('.bar2').click(function () {
            if (count == 1) {
                $('.circle').css('background-color', '');
                $('.circle2').css('background-color', '#002c5f');
                $('.model_img1 .img_box img').attr('src', './imgaes/model2.jpg');
                $('.model_img2 .img_box img').attr('src', './imgaes/model3.jpg');
                $('.model_img3 .img_box img').attr('src', './imgaes/model1.jpg');
                $('.model_img1 p').text('2위. TIVOLIAIR');
                $('.model_img2 p').text('3위. TORRES EVX');
                $('.model_img3 p').text('1위. KORANDO');


            } else if (count == 2) {
                $('.circle').css('background-color', '');
                $('.circle3').css('background-color', '#002c5f');
                $('.model_img1 .img_box img').attr('src', './imgaes/model3.jpg');
                $('.model_img2 .img_box img').attr('src', './imgaes/model1.jpg');
                $('.model_img3 .img_box img').attr('src', './imgaes/model2.jpg');
                $('.model_img1 p').text('3위. TORRES EVX');
                $('.model_img2 p').text('1위. KORANDO');
                $('.model_img3 p').text('2위. TIVOLIAIR');

            } else if (count == 3) {
                $('.circle').css('background-color', '');
                $('.circle1').css('background-color', '#002c5f');
                $('.model_img1 .img_box img').attr('src', './imgaes/model1.jpg');
                $('.model_img2 .img_box img').attr('src', './imgaes/model2.jpg');
                $('.model_img3 .img_box img').attr('src', './imgaes/model3.jpg');
                $('.model_img1 p').text('1위. KORANDO');
                $('.model_img2 p').text('2위. TIVOLIAIR');
                $('.model_img3 p').text('3위. TORRES EVX');
            }
            count++;
            if (count > 3) {
                count = 1;
            }
        })
        $('.circle1').click(function () {
            $('.circle').css('background-color', '');
            $('.circle1').css('background-color', '#002c5f');
            $('.model_img1 .img_box img').attr('src', './imgaes/model1.jpg');
            $('.model_img2 .img_box img').attr('src', './imgaes/model2.jpg');
            $('.model_img3 .img_box img').attr('src', './imgaes/model3.jpg');
            $('.model_img1 p').text('1위. KORANDO');
            $('.model_img2 p').text('2위. TIVOLIAIR');
            $('.model_img3 p').text('3위. TORRES EVX');
            count == 1;
        })
        $('.circle2').click(function () {
            $('.circle').css('background-color', '');
            $('.circle2').css('background-color', '#002c5f');
            $('.model_img1 .img_box img').attr('src', './imgaes/model2.jpg');
            $('.model_img2 .img_box img').attr('src', './imgaes/model3.jpg');
            $('.model_img3 .img_box img').attr('src', './imgaes/model1.jpg');
            $('.model_img1 p').text('2위. TIVOLIAIR');
            $('.model_img2 p').text('3위. TORRES EVX');
            $('.model_img3 p').text('1위. KORANDO');
            count == 2;
        })
        $('.circle3').click(function () {
            $('.circle').css('background-color', '');
            $('.circle3').css('background-color', '#002c5f');
            $('.model_img1 .img_box img').attr('src', './imgaes/model3.jpg');
            $('.model_img2 .img_box img').attr('src', './imgaes/model1.jpg');
            $('.model_img3 .img_box img').attr('src', './imgaes/model2.jpg');
            $('.model_img1 p').text('3위. TORRES EVX');
            $('.model_img2 p').text('1위. KORANDO');
            $('.model_img3 p').text('2위. TIVOLIAIR');
            count == 3;
        })
        // 필터 클릭 시 해당 필터에 맞는 카드만 표시
        $('.card_boxs2, .card_boxs3, .card_boxs4').hide();
        $('.overview .recent').css('color','#002c5f');
        $('[data-filter]').on('click', function () {
            $(this).siblings().css('color', '#666');
            $(this).css('color','#002c5f');
            
            var filterValue = $(this).data('filter');
            $('.card_boxs').hide(); 
            $('.card_boxs[data-info*="' + filterValue + '"]').show();
        });

        // 무한롤링
        function setFlowBanner() {
            const $wrap = $('.drive_banner');
            const $list = $('.drive_banner .list');
            let wrapWidth = ''; //$wrap의 가로 크기
            let listWidth = ''; //$list의 가로 크기
            const speed = 92; //1초에 몇픽셀 이동하는지 설정

            //리스트 복제
            let $clone = $list.clone();
            $wrap.append($clone);
            flowBannerAct()

            //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
            let oldWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
            $(window).on('resize', function () {
                let newWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
                if (newWChk != oldWChk) {
                    oldWChk = newWChk;
                    flowBannerAct();
                }
            });

            //배너 실행 함수
            function flowBannerAct() {
                //배너 롤링 초기화
                if (wrapWidth != '') {
                    $wrap.find('.list').css({
                        'animation': 'none'
                    });
                    $wrap.find('.list').slice(2).remove();
                }
                wrapWidth = $wrap.width();
                listWidth = $list.width();

                //무한 반복을 위해 리스트를 복제 후 배너에 추가
                if (listWidth < wrapWidth) {
                    const listCount = Math.ceil(wrapWidth * 2 / listWidth);
                    for (let i = 2; i < listCount; i++) {
                        $clone = $clone.clone();
                        $wrap.append($clone);
                    }
                }
                $wrap.find('.list').css({
                    'animation': `${listWidth / speed}s linear infinite flowRolling`
                });
            }

            // 마우스가 요소 위로 진입했을 때 일시정지
            $wrap.on('mouseenter', function () {
                $wrap.find('.list').css('animation-play-state', 'paused');
            });

            // 마우스가 요소에서 빠져나갈 때 재생
            $wrap.on('mouseleave', function () {
                $wrap.find('.list').css('animation-play-state', 'running');
            });
        }
        setFlowBanner();
    });