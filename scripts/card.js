import { openPopup, closePopup } from './closeOpenPopup.js'

export class Card {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._popupBigPicture = document.querySelector(data.popupBigPicture);
    this._popupBigPictureImage = this._popupBigPicture.querySelector(data.popupBigPictureImage);
    this._popupBigPictureFooterText = this._popupBigPicture.querySelector(data.popupBigPictureFooterText);
    this._elementLike = data.elementLike;
    this._elementLikeActive = data.elementLikeActive;
    this._elementDelete = data.elementDelete;
    this._elementTitle = data.elementTitle;
    this._elementPhoto = data.elementPhoto;
    this._popupClose = data.popupClose;
    this._cardElement = this._getTemplate();
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _handleOpenPopup() {
    this._popupBigPictureImage.src = this._cardElement.querySelector(this._elementPhoto).src;
    this._popupBigPictureImage.alt = this._cardElement.querySelector(this._elementTitle).textContent;
    this._popupBigPictureFooterText.textContent = this._cardElement.querySelector(this._elementTitle).textContent;
    openPopup(this._popupBigPicture);
  }

  _makeLike(evt) {
    console.log('like');
    evt.target.classList.toggle(this._elementLikeActive);
  }

  _setEventListeners() {
    this._cardElement.querySelector(this._elementLike).addEventListener('click', (evt) => this._makeLike(evt));
    this._cardElement.querySelector(this._elementDelete).addEventListener('click', () => this._cardElement.remove());
    this._cardElement.querySelector(this._elementPhoto).addEventListener('click', () => this._handleOpenPopup());
    this._popupBigPicture.querySelector(this._popupClose).addEventListener('click', () => closePopup(this._popupBigPicture));
  }

  creatCard(name, image) {
    const elementTitle = this._cardElement.querySelector(this._elementTitle);
    const elementPhoto = this._cardElement.querySelector(this._elementPhoto);

    elementTitle.textContent = name;
    elementPhoto.alt = name;
    elementPhoto.src = image;

    this._setEventListeners();

    return this._cardElement;
  }
}
