$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            568: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    })
    var timer2 = "30:00";
    $('.countdown').html(timer2);
    var interval = setInterval(function () {
        var timer = timer2.split(':');
        //by parsing integer, I avoid all extra string processing
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        if (minutes < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        //minutes = (minutes < 10) ?  minutes : minutes;
        $('.countdown').html(minutes + ':' + seconds);
        timer2 = minutes + ':' + seconds;
    }, 1000);

    $(document).on('click', '.input', function () {
        let attr = $(this).attr('id')
        $('.info-input').hide()
        $('.info-input[data-input="' + attr + '"]').fadeIn(200)
    })
    $(document).mouseup(function (e) {
        var container = $('.info-input');
        if (container.has(e.target).length === 0) {
            container.hide();
        }
    });
    $('#phone').bind("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    $(document).on('click', '#anchor', function () {
        $('html, body').stop().animate({
            scrollTop: $('#callback').offset().top - 60
        }, 800);
    })

    $("a").on("click", function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 70
        }, 800);
    });

})