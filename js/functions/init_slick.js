"use strict"

export default function initSlick(item, speedTransition, toShow, toSlide, infinite, autoplay, dots, arrows) {
    speedTransition = speedTransition * 1000
    $(item).slick({
        slidesToShow: toShow || 1,
        slidesToScroll: toSlide || 1,
        autoplay: autoplay || true,
        autoplaySpeed: speedTransition,
        dots: dots || false,
        arrows: arrows || false,
        infinite: infinite || true,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1
                }
            }
        ]
    });
}