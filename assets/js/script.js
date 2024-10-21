'use strict';



// ---------- Add Event On Element


const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback)
    }
}


// ---------- Navbar Toggle


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");

}

addEventOnElem(navLinks, "click", closeNavbar)


// ---------- Header and Back Top Btn Active


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 100 ) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});


// ------------------------------ Shop Slider


const data = [
    [
        "product1",
        "product2",
        "product3",
    ],

    [
        "Suppléments Alimentaires",
        "Accessoires",
        "Equipments",
    ],

    [
        "apartir de: 2000 DZD",
        "apartir de: 1200 DZD",
        "apartir de: 3400 DZD",
    ],

    [
        ["S", "M", "L", "XL"],
        ["p-S4", "P-W401"],
        ["Superlaser", "Turbolaser"],
    ],

    [80, 25, 100],

    [
        "background1",
        "background2",
        "background3",
    ],
];

// options

const optionsList = document.querySelector('.options-list');
const options = document.querySelectorAll('.options-list > li');

optionsList.addEventListener('click', function(e){
    if(e.target && e.target.classList.contains('options')){
        for(let i = 0; i < optionsList.children.length; i++) {
            optionsList.children[i].classList.remove('option-active');
        }

        e.target.classList.add('options-active');
    }
});

// change product image

const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const img = document.querySelector('.product-image img');
const name = document.querySelector('.product-name');
const price = document.querySelector('.product-price');
const optionTitle = document.querySelector('.product-option-title');
const bg = document.querySelector('.panel-1');

let id = 0;

let li;

function slider(id) {
    img.src = "./assets/images/" + data[0][id] + ".png";

    img.classList.add('fade-in');

    setTimeout(() => {
        img.classList.remove('fade-in');
    }, 850);

    name.innerText = data[1][id];

    price.innerText = data[2][id];

    optionTitle.innerText = data[3][id];

    for(let i = 0; i < data[4][id].length; i++) {
        li = document.createElement('li');

        li.innerHTML = data[4][id][i];

        li.classList.add('option');

        if (i === 0) {
            optionsList.innerHTML = "";

            li.classList.add('option-active');
        }

        optionsList.appendChild(li);
    }
};

arrLeft.addEventListener('click', () => {
    id--;

    if (id < 0) {
        id = data[0].length - 1;
    }
    slider(id);
});
arrRight.addEventListener('click', () => {
    id++;

    if (id > data[0].length - 1) {
        id = 0;
    }
    slider(id);
});


// ========= MAP SCRIPT

// Define a custom icon
var customIcon = L.icon({
    iconUrl: './assets/images/marker.png',  // Path to your custom icon
    iconSize: [45, 45],  // Size of the icon [width, height]
    iconAnchor: [22, 38],  // Point of the icon which corresponds to marker's location
    popupAnchor: [-3, -76]  // Point from which the popup should open relative to the iconAnchor
});

// Array of locations with latitude, longitude, and URLs for individual pages
    var locations = [
        { lat: 36.23571035578865, lng: 6.576858018598605, url: 'https://maps.app.goo.gl/LngbAaTk6rurkZQ38' },  // constantine
        { lat: 36.749982367913596, lng: 5.05135175212131, url: 'https://maps.app.goo.gl/hXKwwTQJVmPLWF3S8' },  // bejaia
        { lat: 36.91499994070207, lng: 7.762232591647114, url: 'https://maps.app.goo.gl/cf8ABJs9azoDEi6a6' },  // annaba
        { lat: 36.08273789957715, lng: 4.833194319311483, url: 'https://maps.app.goo.gl/ZgxftX46Gp8gqwCn7' },  // bba
        { lat: 36.75820595822276, lng: 2.9534564953547844, url: 'https://maps.app.goo.gl/KojyaB7T7jv6H3tp8' },  // alger
        { lat: 36.55487839606012, lng: 7.436461555921513, url: 'https://maps.app.goo.gl/pF1jAJAGkVyoY5WK6' },  // guelma
        { lat: 35.73400712700508, lng: -0.5867739383214293, url: 'https://maps.app.goo.gl/8wfiCtVZtFAL7xLt8' },  // oran
    ];

    // Loop through each location and add a marker
    locations.forEach(function(location) {
        var marker = L.marker([location.lat, location.lng], {icon: customIcon}).addTo(map)
            .on('click', function() {
                window.open(location.url, '_blank');  // Open the URL in a new tab
            });
    });


// =========== GALLERY SCRIPT

let slider1 = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider1.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// =================== LANGAUGE TOGGLER

function switchLanguage(lang) {
    // Hide all elements with class "lang"
    document.querySelectorAll('.lang').forEach(function(element) {
      element.style.display = 'none';
    });
    // Show elements that match the selected language
    document.querySelectorAll('.' + lang).forEach(function(element) {
      element.style.display = 'block';
    });
  }

  // Set default language
  switchLanguage('fr');  // Change to 'ar' if Arabic is default


//   find your gym scroll fix

// Add event listener for the button click
document.querySelector('#myButton').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default behavior if it's a link

    // Get the target section position
    const targetSection = document.querySelector('#find'); // Replace with your section's ID
    const sectionPosition = targetSection.offsetTop;

    // Adjust the vertical offset based on screen size (responsive)
    let verticalOffset;

    if (window.innerWidth <= 768) { // For mobile devices (adjust breakpoint if needed)
        verticalOffset = -190; // Set your mobile offset
    } else { // For tablets and desktops
        verticalOffset = -170; // Set your desktop/tablet offset
    }

    // Scroll to the section position, plus the offset
    window.scrollTo({
        top: sectionPosition - verticalOffset,
        behavior: 'smooth'
    });
});

