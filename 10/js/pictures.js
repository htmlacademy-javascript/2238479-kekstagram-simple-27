const renderPictures = (pictures) => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach((img) => {
    const pictureCollection = pictureTemplate.cloneNode(true);
    pictureCollection.querySelector('.picture__img').src = img.url;
    pictureCollection.querySelector('.picture__likes').textContent = img.likes;
    pictureCollection.querySelector('.picture__comments').textContent = img.comments;
    pictureCollection.dataset.pictureId = img.id;
    picturesFragment.append(pictureCollection);
  });

  picturesContainer.append(picturesFragment);
};

export {renderPictures};
