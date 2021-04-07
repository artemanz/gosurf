export default function sliderNavInit(slider, {
  prev,
  next
}) {
  $(prev).on('click', (e) => {
    e.preventDefault();
    $(slider).slick('slickPrev');
  });
  $(next).on('click', (e) => {
    e.preventDefault();
    $(slider).slick('slickNext');
  });
};