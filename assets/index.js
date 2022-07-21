// Navigation bars
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const navMenu = document.querySelector('nav ul');
const logo = document.querySelector('header .logo h3 a');
const toogleMenu = document.getElementById('toogle-menu');
const closeMenu = document.getElementById('close-menu');
const slideClass = document.getElementsByClassName('slide');

if (window.matchMedia('(min-width: 768px)').matches) {

    logo.addEventListener('click', () => {
        const navLinkActive = document.querySelector('nav ul li a.active');
        navLinkActive.classList.remove('active');
    });

    navMenu.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-link')) {
            const navLinkActive = document.querySelector('nav ul li a.active');

            if (navLinkActive !== null && event.target.getAttribute('href') !== navLinkActive.getAttribute('href')) {
                navLinkActive.classList.remove('active');
            };

            event.target.classList.add('active');
        };
    });
};

toogleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('slide');
    if (slideClass.length) {
        body.style.overflowY = 'hidden';
        nav.style.height = '100%';
        toogleMenu.style.display = 'none';
        closeMenu.style.display = 'block';
        closeMenu.style.zIndex = '9999';
    };
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('slide');
    if (!slideClass.length) {
        body.style.overflowY = 'auto';
        nav.style.height = '0';
        toogleMenu.style.display = 'block';
        closeMenu.style.display = 'none';
        closeMenu.style.zIndex = '999';
    };
});

if (window.matchMedia('(max-width: 640px)').matches) {
    window.addEventListener('click', (event) => {
        if (event.target.getAttribute('href') == '#home' ||
            event.target.getAttribute('href') == '#about-me' ||
            event.target.getAttribute('href') == '#skills' ||
            event.target.getAttribute('href') == '#portfolio' ||
            event.target.getAttribute('href') == '#contact') {
            navMenu.classList.remove('slide');
            body.style.overflowY = 'auto';
            nav.style.height = '0';
            toogleMenu.style.display = 'block';
            closeMenu.style.display = 'none';
        };
    });
};

//Typewriter effect
const line = document.getElementById('typewriter-name');
const texts = ['Panji Maulana'];
const speed = 50;

async function typewriter(texts) {
    for (let i = 0; i < texts.length; i++) {
        line.innerHTML += texts[i];
        await delay(speed);
    };
};

async function reverseTypewriter(texts) {
    for (let i = texts.length; i > 0; i--) {
        line.innerHTML = line.innerHTML.slice(0, -1);
        await delay(speed);
    };
};

async function writeLoop() {
    for (let i = 0; i < texts.length; i++) {
        await typewriter(texts[i]);
        await delay(1000);
        await reverseTypewriter(texts[i]);
        await delay(300);
    };
    writeLoop();
};

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

writeLoop();