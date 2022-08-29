import { popupProfile, textName, jobName, nameInput, jobInput, elements, cardPopup,
  placeName, imagePath } from "./constants.js";
import { closePopup } from "./closeOpenPopup.js";
import { Card } from "./card.js";
import { usualCard } from "./objects.js";
import { renderCard } from "./renderCard.js";


export function submitFormHandlerProfile (evt) {
  evt.preventDefault();
  textName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
  closePopup(popupProfile);
}

export function submitCardFormHandler (evt) {
  evt.preventDefault();
  const card = new Card(usualCard, '#templateCard');
  const button = evt.target.querySelector('.popup__button');
  button.setAttribute('disabled', true);
  button.classList.remove('popup__button_valid');
  button.classList.add('popup__button_invalid');
  renderCard(elements, card.creatCard(placeName.value, imagePath.value));
  closePopup(cardPopup);
}
