// задание 4
const ID = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const URLS = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];
const DESCRIPTION = [
  'классное кафе',
  'красивая местность',
  'большой дом',
  'милая собачка',
  'вкусная конфетка',
  'крутой крем',
];


const SIMILAR_PHOTO_COUNT = 25;

// Функция getRandomPositiveInteger, возвращающая случайное целое число из переданного диапазона включительно
function getRandomPositiveInteger (a, b) {
  // Если переданы отрицительные числа, возвращаем NaN
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Функция checkStringLength для проверки максимальной длины строки
function checkStringLength (string, length) {
  return string.length <= length;
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


const createPhoto = () => ({
  id: getRandomArrayElement(ID),
  url: getRandomArrayElement(URLS),
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const similarPhoto = Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

//console.log(similarPhoto);






// задание 3
function getRandomIntInclusive(min, max) {
  if (min > 0 && !isNaN(max)) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return NaN;
  }
}

//getRandomIntInclusive(1,10);

function getStringLength (string, maxlength) {
  if (string.length <= maxlength) {
    return true;
  }else{
    return false;
  }
}

//getStringLength('Привет',10);
