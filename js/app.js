/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavbar() {
    for (sec of sections) {
        listItem = document.createElement('li');
        listItem.innerHTML = `<a class='menu__link' href='#${sec.getAttribute('id')}'>${sec.getAttribute('data-nav')}</a>`;
        navbarList.appendChild(listItem);
    }
}

function SetClassActive() {
    for (sec of sections) {
        if (sec.getBoundingClientRect().top >= 0) {
            sec.classList.add('your-active-class');
        }
        else {
            sec.classList.remove('your-active-class');
        }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNavbar();

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', SetClassActive);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


