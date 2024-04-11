document.addEventListener('DOMContentLoaded', function () {
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 스크롤 이벤트 핸들러
    function handleScroll() {
        var $two = document.querySelector('.two');
        var $inner = document.querySelector('.inner');
        var twoHeight = $two.getBoundingClientRect().top + window.scrollY;
        var twoHeightJQ = $('.two h2').position().top;
        var threeHeight = $('.three').position().top;
        var portofolioHeight = $('.portfolio h2').position().top;
        var contactHeight = $('#contact').position().top;
        var introHeight = $('.intro').offset().top;

        // 헤더 inner 표시
        if (window.scrollY <= twoHeight - 200) {
            $inner.style.maxWidth = '58%';
            $inner.style.backgroundColor = '#67676715';
        } else {
            $inner.style.maxWidth = '81%';
            $inner.style.backgroundColor = 'rgba(173, 173, 173, 0.332)';
        }

        // 헤더 링크 색상 변경
        if (window.scrollY <= twoHeightJQ) {
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

        // 사이드 진행률 타원 버튼
        if (window.scrollY == 0 || window.scrollY <= introHeight + 500) {
            $('.guide_box').children().siblings().removeClass('guideto');
            $('.guide1').addClass('guideto');
        } else if (window.scrollY <= twoHeightJQ + 500) {
            $('.guide_box').children().siblings().removeClass('guideto');
            $('.guide2').addClass('guideto');
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

        // 바로가기 버튼
        if (window.scrollY >= threeHeight) {
            $('.shortcut').css('opacity', 0);
        } else {
            $('.shortcut').css('opacity', 1);
        }

        // 스크롤 스킬
        var threeHeightOffset = $('.three').offset().top;
        if (threeHeightOffset - window.scrollY >= 1000) {
            $('.progress-level').removeClass('animate');
        } else if (window.scrollY <= threeHeightOffset + 100) {
            $('.progress-level').addClass('animate');
        } else {
            $('.progress-level').removeClass('animate');
        }
    }

    // 타이핑
    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;

    
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

    typingTxt = typingTxt.split(""); 

    if (typingBool == false) { 
        typingBool = true;
        var tyInt = setInterval(typing, 100); 
    }

    function typing() {
        $(".typing ul li").removeClass("on");
        $(".typing ul li").eq(liIndex).addClass("on");
        

        if (typingIdx < typingTxt.length) { 
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); 
            typingIdx++;
        } else { 
            if (liIndex < liLength - 1) {
                liIndex++;
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

       
                clearInterval(tyInt);
                setTimeout(function () {
                    tyInt = setInterval(typing, 100);
                }, 1000);
            } else if (liIndex == liLength - 1) {

                clearInterval(tyInt);

                setTimeout(function () {
                    typingBool = false;
                    liIndex = 0;
                    typingIdx = -0;

                    typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
                    $(".typing ul li").html("")
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
