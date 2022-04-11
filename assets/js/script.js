// Dropdown
function dropdown() {
  if (!document.querySelector('[data-dropdown]')) return;

  const dropdowns = document.querySelectorAll('[data-dropdown]');

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', function () {
      if (this.classList.contains('active')) {
        closeDropdown(dropdown);
      } else {
        dropdowns.forEach((dropdown) => closeDropdown(dropdown));
        openDropdown(dropdown);
      }
    });
  });

  function openDropdown(dropdown) {
    dropdown.classList.add('active');
  }
  function closeDropdown(dropdown) {
    dropdown.classList.remove('active');
  }
}

// Navigation
function toggleNavigation() {
  if (!document.querySelector('.nav') || !document.querySelector('.open-nav')) return;

  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.open-nav');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

toggleNavigation();
dropdown();
