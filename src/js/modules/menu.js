export default function menu() {
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', (e) => {
    const target = e.target;
    const newTarget = target.closest('.menu-list-item');
    if (newTarget) {
      e.preventDefault();
      document.querySelector(newTarget.firstElementChild.hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}