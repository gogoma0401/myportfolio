document.addEventListener('DOMContentLoaded', function () {
    //헤더 inner 표시
    window.addEventListener('scroll', function () {
        var $two = document.querySelector('.two');
        var $inner = document.querySelector('.inner');
        var twoHeight = $two.getBoundingClientRect().top + window.scrollY;

        if (window.scrollY <= twoHeight - 200) {
            $inner.style.maxWidth = '45%';
            $inner.style.backgroundColor = '#67676715'
        } else {
            $inner.style.maxWidth = '80%';
            $inner.style.backgroundColor = 'rgba(173, 173, 173, 0.332)'
        }
    });

    window.addEventListener('scroll', function () {
        var twoHeight = $('.two h2').position().top;
        var threeHeight = $('.three').position().top;
        var portofolioHeight = $('.portfolio h2').position().top;
        var contactHeight = $('#contact').position().top;
        console.log(window.scrollY, twoHeight)
        if (window.scrollY <= twoHeight) {
            $('header .inner div>a').css('color', '#fff');
            $('.header_a a').css('color', '#a5fa70');
        } else if (window.scrollY <= threeHeight) {
            $('header .inner div>a').css('color', '#fff');
            $('.header_s a').css('color', '#a5fa70');
        } else if (window.scrollY <= portofolioHeight) {
            $('header .inner div>a').css('color', '#fff');
            $('.header_p a').css('color', '#a5fa70');
        } else if (window.scrollY <= contactHeight) {
            $('header .inner div>a').css('color', '#fff');
            $('.header_c a').css('color', '#a5fa70');
        }
    });
    //사이드 진행률 타원 버튼
    $('.guide1').addClass('guideto');
    window.addEventListener('scroll', function () {
        var introHeight = $('.intro').offset().top;
        var twoHeight = $('.two h2').position().top;
        var threeHeight = $('.three').position().top;
        var portofolioHeight = $('.portfolio h2').position().top;
        var contactHeight = $('#contact').position().top;
        if (window.scrollY == 0 || window.scrollY <= introHeight + 500) {
            $('.guide_box').children().siblings().removeClass('guideto');
            $('.guide1').addClass('guideto');
        } else if (window.scrollY <= twoHeight + 500) {
            $('.guide_box').children().siblings().removeClass('guideto');
            $('.guide2').addClass('guideto')
        } else if (window.scrollY <= threeHeight + 500) {
            $('.guide_box').children().siblings().removeClass('guideto');
            $('.guide3').addClass('guideto');
        } else if (window.scrollY <= portofolioHeight + 200) {
            $('.guide_box').children().siblings().removeClass('guideto');
            $('.guide4').addClass('guideto');
        } else if (window.scrollY <= contactHeight + 200) {
            $('.guide_box').children().siblings().removeClass('guideto');
            $('.guide5').addClass('guideto');
        }
    })

    //바로가기 버튼
    window.addEventListener('scroll', function () {
        var threeHeight = $('.three').position().top;
        if (window.scrollY >= threeHeight) {
            $('.shortcut').css('opacity', 0);
        } else {
            $('.shortcut').css('opacity', 1);
        }
    })
    // 스크롤 스킬
    window.addEventListener('scroll', function () {
        var threeHeight = $('.three').offset().top;
        if (threeHeight - window.scrollY >= 1000) {
            $('.progress-level').removeClass('animate');
        } else if (window.scrollY <= threeHeight + 100) {
            $('.progress-level').addClass('animate');
        } else {
            $('.progress-level').removeClass('animate');
        }
    });

    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;

    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
    //liIndex 인덱스로 구분해 한줄씩 가져옴

    typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

    if (typingBool == false) { // 타이핑이 진행되지 않았다면 
        typingBool = true;
        var tyInt = setInterval(typing, 100); // 반복동작 
    }

    function typing() {
        $(".typing ul li").removeClass("on");
        $(".typing ul li").eq(liIndex).addClass("on");
        //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

        if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++;
        } else { //한문장이끝나면
            if (liIndex < liLength - 1) {
                //다음문장으로  가기위해 인덱스를 1증가
                liIndex++;
                //다음문장을 타이핑하기위한 셋팅
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                //다음문장 타이핑전 1초 쉰다
                clearInterval(tyInt);
                //타이핑종료

                setTimeout(function () {
                    //1초후에 다시 타이핑 반복 시작
                    tyInt = setInterval(typing, 100);
                }, 1000);
            } else if (liIndex == liLength - 1) {

                //마지막 문장까지 써지면 반복종료
                clearInterval(tyInt);

                //1초후
                setTimeout(function () {
                    //사용했던 변수 초기화
                    typingBool = false;
                    liIndex = 0;
                    typingIdx = -0;

                    //첫번째 문장으로 셋팅
                    typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
                    //타이핑 결과 모두 지우기
                    $(".typing ul li").html("")

                    //반복시작
                    tyInt = setInterval(typing, 100);
                }, 1000);


            }
        }
    }

    const toolLength = document.querySelectorAll('.icon_box ul li').length;
    for (var i = 0; i < toolLength; i++) {
        const tool = document.querySelectorAll('.icon_box ul li')[i];
        const explan = document.querySelector('.explan').children[i];
        tool.addEventListener('mouseenter', function () {
            this.style.borderRadius = '40px'
            explan.style.opacity = '1';
        });
        tool.addEventListener('mouseleave', function () {
            this.style.borderRadius = '20px'
            explan.style.opacity = '0';
        });

    }

    $('.fa-bars').click(function () {
        $('.fa-xmark').css('display', 'block');
        $('.nav').css('display', 'block');
        $(this).css('display', 'none');
    })
    $('.fa-xmark').click(function () {
        $('.fa-bars').css('display', 'block');
        $('.nav').css('display', 'none');
        $(this).css('display', 'none');
    })



    //간단한 버튼
    document.querySelector('.mail').addEventListener('click', function (e) {
        e.target.style.fontSize = '14px'
        e.target.innerHTML = 'gogoma0401@naver.com';
        alert('감사합니다.')
    });
    document.querySelector('.tel').addEventListener('click', function (e) {
        e.target.style.fontSize = '14px'
        e.target.innerHTML = '01075920401';
        alert('감사합니다.')
    });


    //스와이퍼
    var swiper = new Swiper('.swiper-container', {
        // Optional parameters
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
    });

});
