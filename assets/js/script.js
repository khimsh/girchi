// initialize filter
filter();

// submit petition
submitPetition();

// initialize popups
popup();

// initialize navigation toggle
toggleNavigation();

// initialize dropdowns
dropdown();

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
}

function openDropdown(dropdown) {
  const icon = dropdown.querySelector('.fa-solid');
  dropdown.classList.add('active');
  icon.classList.add('fa-angle-up');
  icon.classList.remove('fa-angle-down');
}

function closeDropdown(dropdown) {
  const icon = dropdown.querySelector('.fa-solid');
  dropdown.classList.remove('active');
  icon.classList.add('fa-angle-down');
  icon.classList.remove('fa-angle-up');
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
  const petitionBackdrop = petitionPopup.querySelector('.popup__backdrop');
  const openPopupBtns = document.querySelectorAll('[data-open-popup]');
  const petitionCards = document.querySelectorAll('.project-inner-card');
  const popupCtas = document.querySelector('.popup__ctas');

  petitionCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn--block')) {
        petitionPopup.classList.add('active');
      }
    });
  });

  // Open Petition popup when button is clicked
  openPopupBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      petitionPopup.classList.add('active');
    });
  });

  // Close popups
  // close petition popup
  petitionPopup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__close')) {
      petitionPopup.classList.remove('active');
      popupCtas.classList.remove('shown');
      resetPetition();
    }
  });

  petitionBackdrop.addEventListener('click', () => {
    petitionPopup.classList.remove('active');
    popupCtas.classList.remove('shown');
    resetPetition();
  });
}

function submitPetition() {
  if (!document.querySelector('.petition-form')) return;
  const petitionForm = document.querySelector('.petition-form');

  // Show success message popup
  petitionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get form data
    const name = petitionForm.name.value;
    const lastname = petitionForm.lastname.value;
    const phone = petitionForm.tel.value;
    const privateID = petitionForm.privateID.value;
    const email = petitionForm.email.value;

    // for testing
    console.log(name, lastname, phone, privateID, email);

    // reset form after submit
    petitionForm.reset();

    // Show success message
    showPetitionSuccess();
  });
}

function showPetitionSuccess() {
  const petitionSuccessPopup = document.querySelector('[data-petition-success]');
  const popupCtas = petitionSuccessPopup.querySelector('.popup__ctas');
  const animationContainer = petitionSuccessPopup.querySelector('.petition__success__container');

  document.querySelector('[data-petition-form]').style.display = 'none';
  document.querySelector('[data-petition-success]').classList.add('active');

  // create & append success animation
  const successAnimation = createSuccessImage();
  animationContainer.appendChild(successAnimation);

  // make sure animation restarts on every submit
  clearTimeout(removeAnimation);
  runRemoveAnimation(petitionSuccessPopup, popupCtas);
}

function resetPetition() {
  const form = document.querySelector('[data-petition-form]');
  const success = document.querySelector('[data-petition-success]');

  form.style.display = 'block';
  success.classList.remove('active');
}

let removeAnimation;
const runRemoveAnimation = (popup, ctas) => {
  removeAnimation = window.setTimeout(() => {
    removeSuccessAnimation(popup);
    ctas.classList.add('shown');
  }, 4500);
};

function createSuccessImage() {
  const successAnimation = document.createElement('div');
  successAnimation.classList.add('animation');
  const successAnimationImg = document.createElement('img');
  successAnimationImg.src = './assets/images/Gif-Completed.gif';
  successAnimation.appendChild(successAnimationImg);
  return successAnimation;
}

function removeSuccessAnimation(parent) {
  if (!document.querySelector('.animation')) return;

  const animation = parent.querySelector('.animation');
  const image = animation.querySelector('img');
  image.src = '';
  animation.remove();
}

function filter() {
  if (!document.querySelector('.filter')) return;

  const filters = document.querySelectorAll('.filter');

  filters.forEach((filter) => {
    const filterBtn = filter.querySelector('.filter__btn');
    const filterActive = filter.querySelector('.filter__active');
    const filterOptions = filter.querySelectorAll('.filter__option');

    filterBtn.addEventListener('click', () => {
      // open filter
      filter.classList.toggle('open');
    });

    // choose option
    filterOptions.forEach((option) => {
      option.addEventListener('click', () => {
        filterActive.textContent = option.textContent;
        filterActive.dataset.value = option.dataset.value;

        filter.classList.remove('open');
      });
    });
  });

  window.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter__btn') && !e.target.classList.contains('filter__options')) {
      document.querySelector('.filter').classList.remove('open');
    }
  });
}
