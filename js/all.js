        // 選單滑動效果
        $(document).ready(function () {
            var showSkill = false;

            $('.scrolltop').click(function (e) {
                e.preventDefault();
                var target = $(this).attr('href');
                var targetPos = $(target).offset().top;
                $('html, body').animate({ scrollTop: targetPos }, 1000);
            });

            // 滾動效果
            $(window).scroll(function () {
                var scrollPos = $(window).scrollTop();
                var windowHeight = $(window).height();
                console.log(scrollPos, windowHeight);

                $('.scrolltop').each(function () {
                    var target = $(this).attr('href');
                    var targetPos = $(target).offset().top;
                    var targetHeight = $(target).outerHeight();
                    if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                        $('.scrolltop').removeClass('active')
                        $(this).addClass('active');
                    } else {
                        $(this).removeClass('active')
                    }
                });

                // progress bar
                var skillTop = $('#skills').position().top;
                // console.log('skillTop', skillTop);
                if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
                    showSkill = true;
                    $('#skills .progress-bar').each(function () {
                        var thisValue = $(this).data('progress');
                        console.log('thisValue', thisValue);
                        $(this).css('width', thisValue + '%');
                    });
                }

                // animated
                $('.animated-left, .animated-right').each(function () {
                    var thisPos = $(this).offset().top;
                    if ((windowHeight + scrollPos) >= thisPos) {
                        $(this).addClass('fadeIn');
                    }
                });
                $('.animated-bottom').each(function () {
                    var thisPos = $(this).offset().top;
                    if ((windowHeight + scrollPos) >= thisPos) {
                        $(this).addClass('fadeIn-bottom');
                    }
                });


                // bg scroll 
                $('#about').css('background-position-y', -(scrollPos / 2) + 'px')
                $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )')
            });

        });

        $(document).ready(function () {

            $('.top a').click(function (event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 1000);
            });

        });