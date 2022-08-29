import { Card } from "./card.js";
import { openPopup, closePopup } from "./closeOpenPopup.js";
import { initialCards } from "./cards.js";
import { buttonEditProfile, popupProfile, popupEditCloseButton,
  formElementProfile, nameInput, jobInput, textName, jobName, cardPopup, formCardPopup,
  buttonAddCard, cardClosePopup, elements } from "./constants.js";
import { usualCard, formCard, formProfile } from "./objects.js";
import { submitFormHandlerProfile, submitCardFormHandler } from "./handlers.js";
import { renderCard } from "./renderCard.js";
import { FormValidator } from "./FormValidator.js";

//Открытие профиля
function openPopupProfile() {
  openPopup(popupProfile);
  nameInput.value = textName.textContent;
  jobInput.value = jobName.textContent;
}

buttonEditProfile.addEventListener('click', openPopupProfile);
popupEditCloseButton.addEventListener('click', () => closePopup(popupProfile));

//Реализация изменений в профиле
formElementProfile.addEventListener('submit', submitFormHandlerProfile);

//Реализация изначальной генерации сайта с фотографиями
initialCards.reverse();

for (let i = 0; i < initialCards.length; ++i) {
  const card = new Card(usualCard, '#templateCard');
  renderCard(elements, card.creatCard(initialCards[i].name, initialCards[i].link));
}

//Открытие и закрытие карточки создания
buttonAddCard.addEventListener('click', () => {
  openPopup(cardPopup);
});

cardClosePopup.addEventListener('click', () => closePopup(cardPopup));

//Реализация добавления новой карточки
cardPopup.querySelector('.popup__form').addEventListener('submit', submitCardFormHandler);

//Подключаем валидацию формы
const formCardValidator = new FormValidator(formCard);
const formProfileValidator = new FormValidator(formProfile);

formCardValidator.enableValidation();
formProfileValidator.enableValidation();
