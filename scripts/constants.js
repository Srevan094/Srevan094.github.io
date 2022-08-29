import { usualCard } from "./objects.js";
import { Card } from "./card.js";

const profile = document.querySelector('.profile');
const buttonEditProfile = profile.querySelector('.profile__edit-button');

const popupProfile = document.querySelector('#popupProfile');
const popupEditCloseButton = popupProfile.querySelector('.popup__close');

const formElementProfile = popupProfile.querySelector('.popup__form');
const nameInput = formElementProfile.querySelector('#nameInput');
const jobInput = formElementProfile.querySelector('#jobInput');

const textName = profile.querySelector('.profile__name');
const jobName = profile.querySelector('.profile__profession');

const cardPopup = document.querySelector('#cardPopup');
const formCardPopup = cardPopup.querySelector('.popup__form');
const buttonAddCard = profile.querySelector('.profile__add-button');
const cardClosePopup = cardPopup.querySelector('.popup__close');

const placeName = formCardPopup.querySelector('#placeName');
const imagePath = formCardPopup.querySelector('#imagePath');
const elements = document.querySelector('.elements');

export { profile, buttonEditProfile, popupProfile, popupEditCloseButton,
  formElementProfile, nameInput, jobInput, textName, jobName, cardPopup, formCardPopup,
  buttonAddCard, cardClosePopup, placeName, imagePath, elements }
