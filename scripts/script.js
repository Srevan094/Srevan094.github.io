//Открытие и закрытие попапа

let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');
let popupKrest = popup.querySelector('.popup__krest');

function popupOpen() {
  popup.classList.remove('page__none');
}

function popupClose() {
  popup.classList.add('page__none');
}

editButton.addEventListener('click', popupOpen);
popupKrest.addEventListener('click', popupClose);

//Реализация изменений в профиле

// Находим форму в DOM
let formElement = popup.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');

function formSubmitHandler (evt) {
    evt.preventDefault();
    let name = nameInput.value
    let profession = jobInput.value
    let newName = profile.querySelector('.profile__name');
    let newJob = profile.querySelector('.profile__profession');
    newName.textContent = name;
    newJob.textContent = profession;
}

// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', formSubmitHandler);
