var cardIndex = 0;
var cards = document.querySelectorAll('.card');
var indicators = document.querySelectorAll('.indicator');
var prevButton = document.querySelector('.prev-btn');
var nextButton = document.querySelector('.next-btn');
prevButton.addEventListener('click', function () {
    prevCard();
});
nextButton.addEventListener('click', function () {
    nextCard();
});

prevCard = function prevCard() {
    cardIndex = getVisibleCard();
    cardIndex--;

    if (cardIndex === 0) {
        showHideButton('prev', 'hide');
    } else {
        if (nextButton.style.width != '40px') {
            showHideButton('next', 'show');
        }
    }

    cards[getVisibleCard()].style.visibility = 'hidden';
    cards[getVisibleCard()].style.display = 'none';
    cards[cardIndex].style.animation = '.8s fadeSlider forwards';
    cards[cardIndex].style.visibility = "visible";
    cards[cardIndex].style.display = "block";
    updateIndicators();
};

nextCard = function nextCard() {
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

    cards[getVisibleCard()].style.visibility = 'hidden';
    cards[getVisibleCard()].style.display = 'none';
    cards[cardIndex].style.animation = '.8s fadeSlider forwards';
    cards[cardIndex].style.visibility = "visible";
    cards[cardIndex].style.display = "block";
    updateIndicators();
};

updateIndicators = function updateIndicators() {
    var i;

    for (i = 0; i < indicators.length; i++) {
        if (indicators[i].classList.contains('active')) {
            indicators[i].classList.remove('active');
        }
    }

    indicators[cardIndex].classList.add('active');
};

showHideButton = function showHideButton(button, type) {
    switch (button) {
        case 'prev':
            managePrevButton(type);
            break;

        case 'next':
            manageNextButton(type);
            break;
    }
};

managePrevButton = function managePrevButton(type) {
    var child = prevButton.children[0];

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

manageNextButton = function manageNextButton(type) {
    var child = nextButton.children[0];

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