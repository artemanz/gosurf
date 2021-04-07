import sliderNavInit from '../assets/sliderNav';

export default function surfSlider() {
  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
  });

  sliderNavInit('.surf-slider', {
    prev: '.surf-slider-prev',
    next: '.surf-slider-next'
  });
}