export function openPopup(popupChange) {
  popupChange.classList.add('popup_opened');
  popupChange.addEventListener('click', closePopupOverlay);
  document.addEventListener('keydown', closePopupByEsc);
}

export function closePopup(popupChange) {
  popupChange.classList.remove('popup_opened');
  popupChange.removeEventListener('click', closePopupOverlay);
  document.removeEventListener('keydown', closePopupByEsc);
}

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

//Функция закрытия попапа через оверлей
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const popup = evt.target;
    closePopup(popup);
  }
}
