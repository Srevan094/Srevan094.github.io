export class FormValidator {
  constructor(config) {
    this._config = config;
  }

  _handleFormSubmit() {
    evt.preventDefault();
    const form = evt.currentTarget;
    const isValid = form.checkValidity();
    if (isValid) {
      form.reset();
    }
  }

  _handleFormInput(evt) {
    const input = evt.target;
    const form = evt.currentTarget;
    this._setCustomError(input);
    this._showFieldError(input);
    this._setLineInputState(input);
    this._setSubmitButtonState(form);
  }

  _setCustomError(input) {
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

  _showFieldError(input) {
    const span = input.nextElementSibling;
    span.textContent = input.validationMessage;
  }

  _setSubmitButtonState(form) {
    const button = form.querySelector(this._config.submitButtonSelector);

    const isValid = form.checkValidity();

    if (isValid) {
      button.removeAttribute('disabled');
      button.classList.remove(this._config.inactiveButtonClass);
      button.classList.add(this._config.activeButtonClass);
    } else {
      button.setAttribute('disabled', true);
      button.classList.remove(this._config.activeButtonClass);
      button.classList.add(this._config.inactiveButtonClass);
    }
  }

  _setLineInputState(input) {
    const isValidInput = input.validity.valid;

    if (isValidInput) {
      input.classList.remove(this._config.inputErrorClass);
    } else {
      input.classList.add(this._config.inputErrorClass);
    }
  }

  enableValidation() {
    const form = document.querySelector(this._config.formSelector);
    form.addEventListener('submit', (evt) => this._handleFormSubmit(evt));
    form.addEventListener('input', (evt) => this._handleFormInput(evt));
  }
}
