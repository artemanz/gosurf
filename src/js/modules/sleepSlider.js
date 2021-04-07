export default function sleepSlider() {
  function changeValues(slide) {
    slide = slide.closest('.sleep-slider-slide');
    return function (e) {
      function calculation() {
        let sumVal = Math.floor(nums.nights * 2 * nums.guests * 30 / (nums.nights + nums.guests));
        nights.textContent = nums.nights;
        guests.textContent = nums.guests;
        sum.textContent = sumVal;
      }

      const nights = slide.querySelector('.nights-val');
      const guests = slide.querySelector('.guests-val');
      const sum = slide.querySelector('.sleep-sum');

      let nums = {
        nights: +nights.textContent || 1,
        guests: +guests.textContent || 1
      }

      const target = e.target;
      if (target.matches('.nights-minus')) {
        if (nums.nights <= 1) return
        nights.parentNode.style.transform = 'scale(1.1)';
        setTimeout(() => nights.parentNode.style.transform = 'scale(1)', 200);
        nums.nights--;
        calculation();
      }
      if (target.matches('.nights-plus')) {
        if (nums.nights >= 9) return
        nums.nights++;
        nights.parentNode.style.transform = 'scale(1.1)';
        setTimeout(() => nights.parentNode.style.transform = 'scale(1)', 200);
        calculation();
      }
      if (target.matches('.guests-minus')) {
        if (nums.guests <= 1) return
        guests.parentNode.style.transform = 'scale(1.1)';
        setTimeout(() => guests.parentNode.style.transform = 'scale(1)', 200);
        nums.guests--;
        calculation();
      }
      if (target.matches('.guests-plus')) {
        if (nums.guests >= 5) return
        guests.parentNode.style.transform = 'scale(1.1)';
        setTimeout(() => guests.parentNode.style.transform = 'scale(1)', 200);
        nums.guests++;
        calculation();
      }
    }
  }

  const nights = document.querySelectorAll('.nights');
  const guests = document.querySelectorAll('.guests');

  nights.forEach(item => item.addEventListener('click', throttle(changeValues(item), 500)));
  guests.forEach(item => item.addEventListener('click', throttle(changeValues(item), 500)));

  $('.sleep-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  });

  $('.sleep-slider-prev').on('click', (e) => {
    e.preventDefault();
    $('.sleep-slider').slick('slickPrev');
  });

  $('.sleep-slider-next').on('click', (e) => {
    e.preventDefault();
    $('.sleep-slider').slick('slickNext');
  });
}

function throttle(fn, ms) {
  let isThrottled = false;
  const _this = this;
  return function (e) {
    if (!isThrottled) {
      fn.call(this, e);
      isThrottled = true;
      setTimeout(() => isThrottled = false, ms);
    }
  }
}