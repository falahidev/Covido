const closeButton = document.querySelector('.close');
const modalBox = document.querySelector('.modal');
const imgMap = document.querySelector('.map');

openModal = () => {
    modalBox.style.display = 'flex';
}

closeButton.addEventListener('click', () => {
    modalBox.style.display = 'none';

});

window.addEventListener('click', (event) => {

    if (event.target == modalBox) {
        modalBox.style.display = 'none';
    }

});

imgMap.addEventListener('load', () => {
    let query = window.matchMedia('(max-width: 950px)').matches;

    if (query == true) {
        imgMap.style.animation = 'mapAnimationMobile 5s ease forwards';
    } else {
        imgMap.style.animation = 'mapAnimation 3.5s ease forwards';
    }
});