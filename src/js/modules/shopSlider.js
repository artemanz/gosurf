export default function shop() {
  const showTolltips = (e) => {
    const target = e.target;
    if (target.matches('.circle')) {
      const tooltip = target.closest('.tooltip');
      tooltip.classList.toggle('active');
    }
  }

  $('.shop-section').on('click', showTolltips);
  const triggers = document.querySelectorAll('.shop-section .tooltip .circle');

}