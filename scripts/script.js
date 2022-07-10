//Открытие и закрытие попапа

const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');

const popupProfile = document.querySelector('#popupProfile');
const popupKrest = popupProfile.querySelector('.popup__krest');

const formElement = popupProfile.querySelector('.popup__form');
const nameInput = formElement.querySelector('#nameInput');
const jobInput = formElement.querySelector('#jobInput');

const textName = profile.querySelector('.profile__name');
const jobName = profile.querySelector('.profile__profession');

//Функции открытия и закрытия попапов
function popupOpen(neededPopup) {
  neededPopup.classList.add('popup_opened');
}

function popupClose(neededPopup) {
  neededPopup.classList.remove('popup_opened');
}


//Открытие профиля
function popupOpenProfile() {
  popupOpen(popupProfile);
  nameInput.value = textName.textContent;
  jobInput.value = jobName.textContent;
}

function popupCloseProfile() {
  popupProfile.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupOpenProfile);
popupKrest.addEventListener('click', () => popupClose(popupProfile));

//Реализация изменений в профиле

function formSubmitHandler (evt) {
  evt.preventDefault();
  textName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
  popupClose(popupProfile);
}

// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);

//Реализуем кнопку лайка
function giveLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

//Создание карточки
const cardMesto = document.querySelector('#public').content;
const bigPicture = document.querySelector('#bigPicture');
const popupImage = bigPicture.querySelector('.popup__image');
const popupFooterText = bigPicture.querySelector('.popup__footer-text');

function cardCreat(name, image) {
  const element = cardMesto.querySelector('.element').cloneNode(true);
  const elementTitle = element.querySelector('.element__title');
  const elementPhoto = element.querySelector('.element__photo');

  elementTitle.textContent = name;
  elementPhoto.src = image;

  element.querySelector('.element__like').addEventListener('click', giveLike);
  element.querySelector('.element__delete').addEventListener('click', () => element.remove());
  element.querySelector('.element__photo').addEventListener('click', () => {
    popupImage.src = elementPhoto.src;
    popupFooterText.textContent = elementTitle.textContent;
    popupOpen(bigPicture);
  });

  return element;
}

//Реализация изначальной генерации сайта с фотографиями
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const elements = document.querySelector('.elements');

for (let i = 0; i < initialCards.length; ++i) {
  elements.append(cardCreat(initialCards[i].name, initialCards[i].link));
}

//Открытие и закрытие карточки создания
const cardPopup = document.querySelector('#cardPopup');
const addButton = profile.querySelector('.profile__add-button');
const cardKrest = cardPopup.querySelector('.popup__krest');

addButton.addEventListener('click', () => popupOpen(cardPopup));
cardKrest.addEventListener('click', () => popupClose(cardPopup));

//Реализация добавления новой карточки
const placeName = document.querySelector('#placeName');
const imagePath = document.querySelector('#imagePath');

function addingCard(evt) {
  evt.preventDefault();
  elements.append(cardCreat(placeName.value, imagePath.value));
  popupClose(cardPopup);
}

cardPopup.querySelector('.popup__button').addEventListener('click', addingCard);

//Закрытие попапа с картинкой
bigPicture.querySelector('.popup__krest').addEventListener('click', () => popupClose(bigPicture));
