import {renderPictures} from './pictures';
import {closeModal, setFormSubmit} from './form.js';
import {getData} from './API.js';

getData((pictures) => {
  renderPictures(pictures);
});

setFormSubmit(closeModal);

