    //스와이프
    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
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

        const animationBox = document.querySelector('.animation_box .guide_box');

        const clone = animationBox.cloneNode(true);
        animationBox.appendChild(clone);

        let currentPosition = 0;
        const step = 1;

        function animate() {
            currentPosition -= step;
            animationBox.style.transform = `translateX(${currentPosition}%)`;

            if (currentPosition <= -100) {
                currentPosition = 0;

                animationBox.removeChild(animationBox.firstChild);

                const newClone = clone.cloneNode(true);
                animationBox.appendChild(newClone);
            }

            requestAnimationFrame(animate);
        }

        animate();

        new Swiper('.notice .swiper', {
            direction: 'vertical',
            autoplay: true,
            loop: true
        });
        document.querySelector('.more').addEventListener('click',function(){
            document.querySelector('.overview .card3').style.display = 'block';
            document.querySelector('.overview .card4').style.display = 'block';
            this.style.display = 'none'
        })
    });