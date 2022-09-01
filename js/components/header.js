const menuBarButton = document.querySelector('.menuBarButton');
const menuDrawer = document.querySelector('.drawer');
const menuOverlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close');
const mainHeader = document.querySelector('.main-header');

var prevScroll = window.pageXOffset;

menuBarButton.addEventListener('click', () => {

    menuOverlay.style.display = 'block';
    menuOverlay.style.left = '0';
    menuDrawer.style.right = '0';

    setTimeout(() => {

        menuOverlay.style.opacity = '1';

    }, 380);

    setTimeout(() => {

        closeButton.style.display = 'block';

    }, 500);

});

closeButton.addEventListener('click', () => {

   closeMenu();

});

window.addEventListener('click', () => {

    if (closeButton.style.display == 'block') {

        closeMenu();

    }

});

window.addEventListener('scroll', () => {
let currentScroll = window.pageYOffset;

    if (prevScroll > currentScroll) {
        mainHeader.style.top = '0';
    } else {
        mainHeader.style.top = '-100px';
    }

    prevScroll = currentScroll;
});


function closeMenu() {
    menuOverlay.style.opacity = '0';
    menuOverlay.style.left = '-100%';
    menuOverlay.style.display = 'none';
    menuDrawer.style.right = '-100%';
    closeButton.style.display = 'none';
}