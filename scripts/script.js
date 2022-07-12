//Открытие и закрытие попапа

const profile = document.querySelector('.profile');
const buttonEditProfile = profile.querySelector('.profile__edit-button');

const popupProfile = document.querySelector('#popupProfile');
const popupCloseEditProfile = popupProfile.querySelector('.popup__close');

const formElementsProfile = popupProfile.querySelector('.popup__form');
const nameInput = formElementsProfile.querySelector('#nameInput');
const jobInput = formElementsProfile.querySelector('#jobInput');

const textName = profile.querySelector('.profile__name');
const jobName = profile.querySelector('.profile__profession');

//Функции открытия и закрытия попапов
function openPopup(PopupChange) {
  PopupChange.classList.add('popup_opened');
}

function closePopup(PopupChange) {
  PopupChange.classList.remove('popup_opened');
}

//Открытие профиля
function openPopupProfile() {
  openPopup(popupProfile);
  nameInput.value = textName.textContent;
  jobInput.value = jobName.textContent;
}

function closePopupProfile() {
  popupProfile.classList.remove('popup_opened');
}

buttonEditProfile.addEventListener('click', openPopupProfile);
popupCloseEditProfile.addEventListener('click', () => closePopup(popupProfile));

//Реализация изменений в профиле
function submitFormHandlerProfile (evt) {
  evt.preventDefault();
  textName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
  closePopup(popupProfile);
}

// Прикрепляем обработчик к форме:
formElementsProfile.addEventListener('submit', submitFormHandlerProfile);

//Реализуем кнопку лайка
function makeLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

//Создание карточки
const cardMestoTemplate = document.querySelector('#templateCard').content;
const element = cardMestoTemplate.querySelector('.element');
const popupBigPicture = document.querySelector('#bigPicture');
const popupBigPictureImage = popupBigPicture.querySelector('.popup__image');
const popupBigPictureFooterText = popupBigPicture.querySelector('.popup__footer-text');

function creatCard(name, image) {
  const elementClone = element.cloneNode(true);
  const elementTitle = elementClone.querySelector('.element__title');
  const elementPhoto = elementClone.querySelector('.element__photo');

  elementTitle.textContent = name;
  elementPhoto.alt = name;
  elementPhoto.src = image;

  elementClone.querySelector('.element__like').addEventListener('click', makeLike);
  elementClone.querySelector('.element__delete').addEventListener('click', () => elementClone.remove());
  elementPhoto.addEventListener('click', () => {
    popupBigPictureImage.src = elementPhoto.src;
    popupBigPictureImage.alt = elementTitle.textContent;
    popupBigPictureFooterText.textContent = elementTitle.textContent;
    openPopup(popupBigPicture);
  });

  return elementClone;
}

//Добавление элемента в начало
function renderCard(cards, card) {
  cards.prepend(card);
}

//Реализация изначальной генерации сайта с фотографиями
const elements = document.querySelector('.elements');
initialCards.reverse();

for (let i = 0; i < initialCards.length; ++i) {
  renderCard(elements, creatCard(initialCards[i].name, initialCards[i].link));
}

//Открытие и закрытие карточки создания
const cardPopup = document.querySelector('#cardPopup');
const buttonAddCard = profile.querySelector('.profile__add-button');
const cardClosePopup = cardPopup.querySelector('.popup__close');

buttonAddCard.addEventListener('click', () => {
  cardPopup.querySelector('#placeName').value = '';
  cardPopup.querySelector('#imagePath').value = '';
  openPopup(cardPopup);
});
cardClosePopup.addEventListener('click', () => closePopup(cardPopup));

//Реализация добавления новой карточки
const placeName = document.querySelector('#placeName');
const imagePath = document.querySelector('#imagePath');

function submitCardFormHandler (evt) {
  evt.preventDefault();
  renderCard(elements, creatCard(placeName.value, imagePath.value));
  closePopup(cardPopup);
}

cardPopup.querySelector('.popup__form').addEventListener('submit', submitCardFormHandler);

//Закрытие попапа с картинкой
popupBigPicture.querySelector('.popup__close').addEventListener('click', () => closePopup(popupBigPicture));
