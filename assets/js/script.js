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

// Popup
function popup() {
  if (!document.querySelector('.popup')) return;

  const petitionPopup = document.querySelector('[data-petition]');
  const petitionPopupClose = petitionPopup.querySelector('.popup__close');
  const petitionBackdrop = petitionPopup.querySelector('.popup__backdrop');
  const petitionSuccessPopup = document.querySelector('[data-petition-success]');
  const successBackdrop = petitionSuccessPopup.querySelector('.popup__backdrop');
  const openPopupBtns = document.querySelectorAll('[data-open-popup]');
  const petitionForm = document.querySelector('.petition-form');

  // Open Petition popup when button is clicked
  openPopupBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      petitionPopup.classList.add('active');
      console.log('clicked');
    });
  });

  // Close Petition popup
  petitionPopupClose.addEventListener('click', () => {
    petitionPopup.classList.remove('active');
  });

  petitionBackdrop.addEventListener('click', () => {
    petitionPopup.classList.remove('active');
  });

  successBackdrop.addEventListener('click', () => {
    petitionSuccessPopup.classList.remove('active');
  });

  // Show success
  petitionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    petitionSuccessPopup.classList.add('active');
  });
}

popup();

toggleNavigation();

dropdown();
