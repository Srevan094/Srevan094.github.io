const formCard = {
  formSelector: '.popup__form[name="card-form"]',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  activeButtonClass: 'popup__button_valid',
  inputErrorClass: 'popup__field_error',
  errorClass: 'popup__error'
}

const formProfile = {
  formSelector: '.popup__form[name="profile-form"]',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  activeButtonClass: 'popup__button_valid',
  inputErrorClass: 'popup__field_error',
  errorClass: 'popup__error'
}

function enableValidation(config) {
  const form = document.querySelector(config.formSelector);
  form.addEventListener('submit', handleFormSubmit);
  form.addEventListener('input', (evt) => handleFormInput(evt, config));
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;

  const isValid = form.checkValidity();

  if (isValid) {
    form.reset();
  }
}

function handleFormInput(evt, config) {
  const input = evt.target;
  const form = evt.currentTarget;
  setCustomError(input);
  showFieldError(input);
  setLineInputState(input, config);
  setSubmitButtonState(form, config);
}

function setCustomError(input) {
  const validity = input.validity;

  input.setCustomValidity('');

  if (validity.valueMissing) {
    input.setCustomValidity('Вы пропустили это поле.');
  }

  if (validity.tooShort || validity.tooLong) {
    const current = input.value.length;
    const min = input.getAttribute('minlength');
    const max = input.getAttribute('maxlength')
    input.setCustomValidity(`Строка слишком короткая. Введено ${current} символов, а должно быть от ${min} до ${max}.`);
  }

  if (validity.typeMismatch && input.type === 'url') {
    input.setCustomValidity('Введите адрес сайта.');
  }
}

function showFieldError(input) {
  const span = input.nextElementSibling;
  span.textContent = input.validationMessage;
}

function setSubmitButtonState(form, config) {
  const button = form.querySelector(config.submitButtonSelector);

  const isValid = form.checkValidity();

  if (isValid) {
    button.removeAttribute('disabled');
    button.classList.remove(config.inactiveButtonClass);
    button.classList.add(config.activeButtonClass);
  } else {
    button.setAttribute('disabled', true);
    button.classList.remove(config.activeButtonClass);
    button.classList.add(config.inactiveButtonClass);
  }
}

function setLineInputState(input, config) {
  const isValidInput = input.validity.valid;

  if (isValidInput) {
    input.classList.remove(config.inputErrorClass);
  } else {
    input.classList.add(config.inputErrorClass);
  }
}

enableValidation(formCard);
enableValidation(formProfile);
