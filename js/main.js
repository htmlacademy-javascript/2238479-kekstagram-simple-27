//import {createPhotos} from './data';
import {getRandomArrayElement, getRandomPositiveInteger} from './util';
import {ID, URLS, DESCRIPTION, SIMILAR_PHOTO_COUNT} from './data';

const createPhoto = () => ({
  id: getRandomArrayElement(ID),
  url: getRandomArrayElement(URLS),
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const createPhotos = Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

//createPhotos();

