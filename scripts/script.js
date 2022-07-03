//Открытие и закрытие попапа

let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');
let popupKrest = popup.querySelector('.popup__krest');

let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');

let textName = profile.querySelector('.profile__name');
let jobName = profile.querySelector('.profile__profession');

function popupOpen() {
  nameInput.value = textName.textContent;
  jobInput.value = jobName.textContent;
  popup.classList.remove('popup_none');
}

function popupClose() {
  popup.classList.add('popup_none');
}

editButton.addEventListener('click', popupOpen);
popupKrest.addEventListener('click', popupClose);

//Реализация изменений в профиле


function formSubmitHandler (evt) {
    evt.preventDefault();
    textName.textContent = nameInput.value;
    jobName.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);
