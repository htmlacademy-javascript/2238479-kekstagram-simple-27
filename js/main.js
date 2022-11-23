import {renderPictures} from './pictures';
import {closeModal} from './form.js';
import {getData} from './API.js';

getData((pictures) => {
  renderPictures(pictures);
});

closeModal();

