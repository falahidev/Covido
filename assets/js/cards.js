var cardIndex = 0;

const cards = document.querySelectorAll('.card');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');


prevButton.addEventListener('click', () => {
    prevCard();
});

nextButton.addEventListener('click', () => {
    nextCard();
});

prevCard = () => {
    cardIndex = getVisibleCard();
    cardIndex--;

    if (cardIndex === 0) {
        showHideButton('prev', 'hide');
    } else {
        if (nextButton.style.width != '40px') {
            showHideButton('next', 'show');
        }
    }

    cards[getVisibleCard()].style.transform = 'translateX(-30%)';
    cards[getVisibleCard()].style.visibility = 'hidden';
    cards[getVisibleCard()].style.display = 'none';
    cards[cardIndex].style.animation = '.8s slideInFromRight forwards';
    cards[cardIndex].style.visibility = "visible";
    cards[cardIndex].style.display = "block";

    updateIndicators();
};

nextCard = () => {
    cardIndex = getVisibleCard();
    cardIndex++;

    if (cardIndex === cards.length - 1) {
        showHideButton('next', 'hide');
    } else if (cardIndex === cards.length - 1) {
        showHideButton('prev', 'hide');
    } else {
        if (prevButton.style.width != '40px') {
            showHideButton('prev', 'show');
        } else if (nextButton.style.width != '40px') {
            showHideButton('next', 'show');
        }
    }

    cards[getVisibleCard()].style.transform = 'translateX(-30%)';
    cards[getVisibleCard()].style.visibility = 'hidden';
    cards[getVisibleCard()].style.display = 'none';
    cards[cardIndex].style.animation = '.8s slideInFromRight forwards';
    cards[cardIndex].style.visibility = "visible";
    cards[cardIndex].style.display = "block";

    updateIndicators();
};

updateIndicators = () => {
    var i;
    for (i = 0; i < indicators.length; i++) {
        if (indicators[i].classList.contains('active')) {
            indicators[i].classList.remove('active');
        }
    }

    indicators[cardIndex].classList.add('active');
};

showHideButton = (button, type) => {
    switch (button) {
        case 'prev':
            managePrevButton(type);
            break;
        case 'next':
            manageNextButton(type);
            break;
    }
};

managePrevButton = (type) => {
    let child = prevButton.children[0];

    switch (type) {
        case 'hide':
            prevButton.style.animation = '.3s hideSlideButton forwards';
            child.style.visibility = 'hidden';
            break;
        case 'show':
            prevButton.style.animation = '.3s showSlideButton forwards';
            child.style.visibility = 'visible';
            break;
    }
};

manageNextButton = (type) => {
    let child = nextButton.children[0];

    switch (type) {
        case 'hide':
            nextButton.style.animation = '.1s hideSlideButton forwards';
            child.style.visibility = 'hidden';
            break;
        case 'show':
            nextButton.style.animation = '.8s showSlideButton forwards';
            child.style.visibility = 'visible';
            break;
    }
};

function getVisibleCard() {
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].style.display != "none") {
            return i;
        }
    }
}