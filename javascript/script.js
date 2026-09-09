function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}

function toggleSubmenu(e) {
  e.preventDefault();
  const subMenu = document.getElementById('mobileGamesSubmenu');
  subMenu.classList.toggle('show');
}



document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Drawer Toggle
  const menuToggle = document.getElementById('egMenuToggle');
  const mobileDrawer = document.getElementById('egMobileDrawer');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', function () {
      mobileDrawer.classList.toggle('open');
    });
  }

  // Mobile Submenu Accordion Toggle
  const gamesToggle = document.getElementById('egGamesToggle');
  const gamesSubmenu = document.getElementById('egGamesSubmenu');

  if (gamesToggle && gamesSubmenu) {
    gamesToggle.addEventListener('click', function (e) {
      e.preventDefault();
      gamesSubmenu.classList.toggle('open');
      const chevron = gamesToggle.querySelector('.eg-chevron');
      if (chevron) {
        chevron.classList.toggle('rotate');
      }
    });
  }

  // Category Filter Buttons Active State
  const filterPills = document.querySelectorAll('.eg-filter-pill');
  filterPills.forEach((pill) => {
    pill.addEventListener('click', function () {
      filterPills.forEach((btn) => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
});