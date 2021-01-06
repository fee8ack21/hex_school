$(document).ready(function () {
    // go top
    $('#goTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    })

    // drop menu
    $('.menu-nav .menu-outer-ul > li').mouseenter(function () {
        $(this).find('.outer-ul-a').css('border-bottom', '3px solid #00cc99')
        $(this).find('ul').slideDown(100);
    })
    $('.menu-nav .menu-outer-ul > li').mouseleave(function () {
        $(this).find('.outer-ul-a').css('border-bottom', '3px solid transparent')
        $(this).find('ul').slideUp(100);
    })

    // swiper
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        speed: 500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    })

    // lightbox 
    lightbox.option({
        'resizeDuration': 100,
        'albumLabel': '',
        'wrapAround': true,
        'fadeDuration':200
    })
})