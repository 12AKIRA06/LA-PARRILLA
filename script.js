
document.addEventListener('DOMContentLoaded', () => {
  const menuLink = document.querySelector('.hero-scroll');
  const menuSection = document.getElementById('menu');

  if (menuLink && menuSection) {
    menuLink.addEventListener('click', () => {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
