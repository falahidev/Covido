var prevScroll = window.pageXOffset;

const closeButton = document.querySelector('#close');
const modalBox = document.querySelector('.modal');
const imgMap = document.querySelector('.map');
const loading = document.querySelector('.loading-container');
const navbar = document.querySelector('.navbar');
const backBtn = document.getElementById('backBtn');

const flag = document.querySelector('.flag');
const cases = document.getElementById('cases');
const deaths = document.getElementById('deaths');
const recovered = document.getElementById('recovered');
const newCases = document.getElementById('new_cases');
const newDeaths = document.getElementById('new_deaths');
const btnCountry = document.querySelector('.btn-country');
const countrySelect = document.querySelector('.country-select');
const locationName = document.getElementById('location-name');

LoadData();
function openModal() {
    modalBox.style.display = 'flex';
}

closeButton.addEventListener("click", function () {
    document.body.style.overflowY = 'scroll';
    modalBox.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == modalBox) {
        document.body.style.overflowY = 'scroll';
        modalBox.style.display = 'none';
    }
});

window.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }

    prevScroll = currentScroll;
});

btnCountry.addEventListener('click', () => {
    let urlQuery = GetURLQueries();
    let country = localStorage.getItem('country');
    let selectedCountry = countrySelect.value;

    if (selectedCountry === "0") {
        showSnack("لطفا کشور معتبری را انتخاب کنید");
    } else if (urlQuery === "#" + selectedCountry) {
        showSnack("این کشور انتخاب شده است!");
    } else {
        modalBox.style.display = 'none';

        loading.style.visibility = "visible";
        loading.style.opacity = "1";
        loading.style.animation = 'none';

        if (selectedCountry == "worldwide") {
            RequestWorldwide();
        } else if (selectedCountry == "iran") {
            RequestIran();
        }

        setTimeout(() => {
            loading.style.animation = ".8s fadeOutLoader";
            loading.style.animationFillMode = "forwards";

            setTimeout(() => {
                loading.style.animation = 'none';
                loading.style.visibility = "hidden";
            }, 200);
        }, 2000);
    }
});

window.addEventListener("offline", (event) => {
    showSnack('اینترنت خود را چک کنید');
});

function LoadData() {
    let country = localStorage.getItem('country');
    let urlQuery = GetURLQueries();

    if (country === "iran" || urlQuery === "iran") {
        RequestIran();
    } else if (country == "worldwide" || urlQuery == "worldwide") {
        RequestWorldwide();
    } else {
        RequestIran();
    }
}

function RequestIran() {
    CheckIsOnline();

    flag.style.background = "url(../assets/image/flags/iran.svg)";
    flag.style.backgroundSize = "cover";
    locationName.textContent = "ایران";

    countrySelect.value = "iran";
    return CovidoRequest('iran');
}

function RequestWorldwide() {
    CheckIsOnline();

    flag.style.background = "url(../assets/image/flags/world.svg)";
    flag.style.backgroundSize = "cover";
    locationName.textContent = "جهان";

    countrySelect.value = "worldwide";
    return CovidoRequest('worldwide');
}

function CheckIsOnline() {
    if (navigator.onLine !== true) {
        showSnack('اینترنت خود را چک کنید');
        return;
    }
}

function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
}

function CovidoRequest(country) {
    const API_TOKEN = ""; // Get it from @iFalahiDEV
    let apiUrl = "https://api.covido.info/v1/chart/" + country + "/summary?token=" + API_TOKEN;
    var requestData = [];

    getJSON(apiUrl, (error, data) => {
        if (error !== null) {
            showSnack('خطایی رخ داد');
            return false;
        }

        let response = data.data;
        cases.textContent = response.cases;
        deaths.textContent = response.deaths;
        recovered.textContent = response.recovered;

        newCases.textContent = response.new_cases;
        newDeaths.textContent = response.new_deaths;

        localStorage.setItem("country", country);

        return true;
    });
}


function GetURLQueries() {
    let pageUrl = window.location.href;
    let url = new URL(pageUrl);
    let country = url.searchParams.get("country");
    return country;
}

function GetCountryName(country) {
    if (country == 'iran') {
        return 'ایران';
    } else {
        return 'جهان';
    }
}