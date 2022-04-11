// Dropdown

function dropdown() {
  if (!document.querySelector('[data-dropdown]')) return;

  const dropdowns = document.querySelectorAll('[data-dropdown]');

  // window.addEventListener('click', (e) => {
  //   const dropdownClicked = e.target.closest('[data-dropdown]');
  //   console.log(dropdownClicked.classList.contains('dropdown'));

  //   console.log(e.target);

  //   if (dropdownClicked && dropdownClicked.classList.contains('dropdown')) return;

  //   dropdowns.forEach((dropdown) => closeDropdown(dropdown));
  // });

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

dropdown();
