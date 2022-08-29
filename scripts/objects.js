const usualCard = {
  popupBigPicture: '#bigPicture',
  popupBigPictureImage: '.popup__image',
  popupBigPictureFooterText: '.popup__footer-text',
  elementLike: '.element__like',
  elementLikeActive: 'element__like_active',
  elementDelete: '.element__delete',
  elementTitle: '.element__title',
  elementPhoto: '.element__photo',
  popupClose: '.popup__close'
}

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

export { usualCard, formCard, formProfile }
