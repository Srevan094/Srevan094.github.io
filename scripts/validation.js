const formCard = {
  form: '.popup__form[name="card-form"]',
  button: '.popup__button'
}

const formProfile = {
  form: '.popup__form[name="profile-form"]',
  button: '.popup__button'
}

function enableValidation(config) {
  const form = document.querySelector(config.form);
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
  console.log(input.value);
  setCustomError(input);
  showFieldError(input);
  setLineInputState(input);
  setSubmitButtonState(form, config);
}

function setCustomError(input) {
  const validity = input.validity;

  input.setCustomValidity('');

  if (validity.valueMissing && input.key === ' ') {
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
  const button = form.querySelector(config.button);

  const isValid = form.checkValidity();

  if (isValid) {
    button.removeAttribute('disabled');
    button.classList.remove('popup__button_invalid');
    button.classList.add('popup__button_valid');
  } else {
    button.setAttribute('disabled', true);
    button.classList.remove('popup__button_valid');
    button.classList.add('popup__button_invalid');
  }
}

function setLineInputState(input) {
  const isValidInput = input.validity.valid;

  if (isValidInput) {
    input.classList.remove('popup__field_error');
  } else {
    input.classList.add('popup__field_error');
  }
}

enableValidation(formCard);
enableValidation(formProfile);
