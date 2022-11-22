import {isEscapeKey} from './util.js';
import {resetScale} from './imgScale.js';
import {resetEffect} from './imgEffect.js';
import {sendData} from './API.js';
import {openUploadMessagePopup} from './messages.js';

const form = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const commentField = document.querySelector('.text__description');
const body = document.querySelector('body');
const submitButton = document.querySelector('.img-upload__submit');

const openModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

const closeModal = () => {
  form.reset();
  resetScale();
  resetEffect();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

const isTextFieldFocused = () => document.activeElement === commentField;

function onEscKeyDown(evt) {
  if(isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
}

const onCancelClick = () => {
  closeModal();
};

const onFileInputChange = () => {
  openModal();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    blockSubmitButton();

    const onSuccess = () => {
      closeModal();
      unblockSubmitButton();
      openUploadMessagePopup('success');
    };
    const onError = () => {
      closeModal();
      unblockSubmitButton();
      openUploadMessagePopup('error');
    };

    sendData(formData, onSuccess, onError);
  });
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelClick);

export {setFormSubmit, closeModal};
