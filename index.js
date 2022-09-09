// hamburger
const navShow = () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu');
  const closeBtn = document.getElementById('close');
  const navItems = document.querySelectorAll('li a');

  hamburger.addEventListener('click', function () {
    menu.classList.add('show');
  });

  closeBtn.addEventListener('click', function () {
    menu.classList.remove('show');
  });

  navItems.forEach((navitem) => {
    navitem.addEventListener('click', () => {
      navitem.classList.remove('active');
      menu.classList.remove('show');
    });
  });
};

navShow();
// hamburger show end
