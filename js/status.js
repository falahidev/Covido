const closeButton = document.querySelector('.close');
const modalBox = document.querySelector('.modal');
const imgMap = document.querySelector('.map');

openModal = () => {
    document.body.style.overflowY = 'hidden';
    modalBox.style.display = 'flex';
}

closeButton.addEventListener('click', () => {

    document.body.style.overflowY = 'scroll';
    modalBox.style.display = 'none';

});

window.addEventListener('click', (event) => {

    if (event.target == modalBox) {
        document.body.style.overflowY = 'scroll';
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