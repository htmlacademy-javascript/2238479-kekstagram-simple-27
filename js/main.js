import {renderPictures} from './pictures.js';
import {closeModal} from './form.js';
import {getData} from './API.js';

getData((pictures) => {
  renderPictures(pictures);
});

closeModal();

