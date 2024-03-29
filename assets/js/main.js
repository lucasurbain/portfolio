/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle),
        nav = document.getElementById(navbarId)

    // Validate that variables exist
    if (headerToggle && navbarId) {
        toggleBtn.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
                // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle', 'navbar')

/*==================== LOAD MODAL ====================*/
let getDataModal = document.querySelector('.content-modal');

let updateModal = document.querySelector('.changelog_modal');

fetch("modal.html")
  .then(response => response.text())
  .then(html => {
    // Insère le contenu HTML dans l'élément
    getDataModal.innerHTML = html;

    // Affiche le contenu de getDataModal dans la console
    console.log(getDataModal);

  });

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')

    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});



/* Link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*==================== SHOW MENU ====================*/
const showMenuFooter = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu-footer')
        })
    }
}
showMenuFooter('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu-footer')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {

    loop: true,
    spaceBetween: 24,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        }
    },
});

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*=============== GET VERSION ===============*/
function getVersion() {
    var version = "2024.1.1";
    var copyright = " | Copyright &#169; 2024 Lucas Urbain | All Rigths Reserved.";
    var copyrightDE = " | Copyright &#169; 2024 Lucas Urbain | Alle Rights Vorbehalten.";
    var copyrightFR = " | Copyright &#169; 2024 Lucas Urbain | Tous Droits Réservés.";

    var language = document.getElementsByClassName("footer__copy");

    console.log(language[0].lang)

    if(language[0].lang == "de") {
        document.getElementById('versionID').innerHTML = "<bdi id='modalAction'>" +version +"</bdi>" + copyrightDE;
    }else if(language[0].lang == "fr") {
        document.getElementById('versionID').innerHTML = "<bdi id='modalAction'>" +version +"</bdi>" + copyrightFR;
    }else{
       document.getElementById('versionID').innerHTML = "<bdi id='modalAction'>" +version +"</bdi>" + copyright;
    }   
}

//affiche le resultat
window.onload = getVersion();

/*==================== SHOW MODAL VERSION ====================*/
let actionModalChangeLog = document.getElementById('modalAction');

actionModalChangeLog.addEventListener('click', () => {
    updateModal.classList.toggle('active-modal');
})
