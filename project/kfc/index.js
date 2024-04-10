$(document).ready(function () {
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
    });
    // 이미지 배열

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

});
