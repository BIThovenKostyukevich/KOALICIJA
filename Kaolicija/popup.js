
const aboutItems = document.querySelectorAll('.about-item');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup img');
const popupClose = document.querySelector('.popup-close');

aboutItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').getAttribute('src');
        popupImage.setAttribute('src', imgSrc);
        popup.classList.add('active');
    });
});

// Закрытие попапа
popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
    }
});
