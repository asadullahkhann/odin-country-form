import './styles.css';

const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const zipCodeInput = document.getElementById('zip-code');
const passwordInput = document.getElementById('password');
const confrimPasswordInput = document.getElementById('confrim-password');
const spanElements = document.querySelectorAll('span');
const formEl = document.querySelector('form');

emailInput.addEventListener('input', () => {
  spanElements[0].textContent = '';
  if (emailInput.validity.valueMissing) {
    spanElements[0].textContent = '* Required';
  }else if (emailInput.validity.typeMismatch) {
    spanElements[0].textContent = 'Enter a valid email address';
  }
});

countryInput.addEventListener('input', () => {
  spanElements[1].textContent = '';
  if (countryInput.validity.valueMissing) {
    spanElements[1].textContent = '* Required';
  }else if (countryInput.validity.tooShort) {
    spanElements[1].textContent = 'Too Short. Must be longer than 1 character';
  }
});

zipCodeInput.addEventListener('input', () => {
  spanElements[2].textContent = '';
  if (zipCodeInput.validity.valueMissing) {
    spanElements[2].textContent = '* Required';
  }else if (zipCodeInput.validity.tooShort) {
    spanElements[2].textContent = 'Too short. must contain at least 5 digits';
  }else if (zipCodeInput.validity.patternMismatch) {
    spanElements[2].textContent = 'Zip code must only contain digits';
  }
});

passwordInput.addEventListener('input', () => {
  spanElements[3].textContent = '';
  if (passwordInput.validity.valueMissing) {
    spanElements[3].textContent = '* Required';
  }else if (passwordInput.validity.tooShort) {
    spanElements[3].textContent = 'Must be at least 8 characters long';
  }
});

confrimPasswordInput.addEventListener('input', () => {
  spanElements[4].textContent = '';
  confrimPasswordInput.setCustomValidity('');
  if (confrimPasswordInput.validity.valueMissing) {
    spanElements[4].textContent = '* Required';
  }else if (confrimPasswordInput.value !== passwordInput.value) {
    spanElements[4].textContent = 'Passwords do not match';
    
    // this is done to make the input invalid
    confrimPasswordInput.setCustomValidity('Not valid');
  }
});

formEl.addEventListener('submit', (event) => {
  if (formEl.checkValidity()) {
    alert('Form submited successfully. High Five');
  }else {
    event.preventDefault();
    alert('Fill all required fields appropriately');
  }
});