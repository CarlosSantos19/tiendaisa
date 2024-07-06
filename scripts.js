document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        },
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensaje enviado. Gracias por contactarnos.');
    });
});
