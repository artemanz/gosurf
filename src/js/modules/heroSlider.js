function previewNavigate(preview, map) {
  preview.forEach((nav, slide) => {
    if (slide.classList.contains('slick-active')) nav.classList.add('preview-active');
    else nav.classList.remove('preview-active');
  });
  map.forEach((location, slide) => {
    if (slide.classList.contains('slick-active')) {
      mapLocation.className = `map-location ${location[0].toLowerCase()}`;
      mapLocationTitle.textContent = mapLocation.textContent.replace(/\w+ /i, `${location[0]} `);
      lines.forEach(item => item.classList.remove('snake-line'));
      location[1].classList.add('snake-line');
    }
  });
}

const slides = Array.from($('.slider-item'));
const previews = Array.from($('.hero-slider-preview-box'));

const mapLocation = document.querySelector('.map-location');
const mapLocationTitle = mapLocation.querySelector('#map-total-location');
const orientation = ['North', 'South', 'West', 'East'];
const lines = document.querySelectorAll('path.line');

const preview = new Map();
const map = new Map();

export default function headerSlider() {
  $('.slider-item-link').on('click', (e) => {
    e.preventDefault();
  })

  $('.hero-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  });

  slides.forEach((item, n) => {
    preview.set(item, previews[n]);
    map.set(item, [orientation[n], lines[n]]);
    if (item.classList.contains('slick-active')) {
      previews[n].classList.add('preview-active');
      lines[n].classList.add('snake-line');
    }
  });

  $('.hero-slider-next').on('click', function () {
    $('.hero-slider').slick('slickNext');
    previewNavigate(preview, map);
  });

  $('.hero-slider-prev').on('click', function () {
    $('.hero-slider').slick('slickPrev');
    previewNavigate(preview, map);
  });
}

/* arrowsScrollDown */
const arrows = document.querySelector('.hero-section .scroll-down');
let direction = 1;
const animateScrollDownArrows = (direction) => arrows.style.transform = `translateY(${direction*20}px)`;
arrows.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.surf-section').scrollIntoView({
    behavior: 'smooth'
  });
});
arrows.addEventListener('transitionend', () => {
  direction = direction > 0 ? 0 : 1;
  requestAnimationFrame(() => animateScrollDownArrows(direction));
});

if (arrows) requestAnimationFrame(() => animateScrollDownArrows(direction));
/* ^ arrowsScrollDown */