export default function locationMap() {
  function show(item) {
    item.classList.toggle('active');
    const infoBlock = item.querySelector('.info-block');
    infoBlock.style.display = 'block';
    setTimeout(() => infoBlock.style.opacity = 1, 0);
  };

  function hide(target) {
    const item = target.closest('.world-map-item');
    const infoBlock = item.querySelector('.info-block');
    item.classList.remove('active');
    infoBlock.style.opacity = 0;
    setTimeout(() => infoBlock.style.display = 'none', 500);
  }

  function hideAll() {
    infoBlocks.forEach(item => item.removeAttribute('style'));
    items.forEach(item => item.classList.remove('active'));
  };

  const showActiveItem = (e) => {
    const target = e.target;
    if (target.matches('.dot')) {
      const mapItem = target.closest('.world-map-item');
      show(mapItem);
    } else if (target.matches('.icon-drop')) {
      hide(target);
    }
  };

  const map = document.querySelector('.world-map');
  const items = map.querySelectorAll('.world-map-item');
  const infoBlocks = map.querySelectorAll('.info-block');

  map.addEventListener('click', showActiveItem);
  map.addEventListener('dblclick', hideAll);
}