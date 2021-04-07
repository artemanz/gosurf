import sliderNav from '../assets/sliderNav'

export default function travelSlider() {
  $('.travel-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  });

  sliderNav('.travel-slider', {
    prev: '.travel-slider-prev',
    next: '.travel-slider-next'
  });
}