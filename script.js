const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');
const mobile_links = document.getElementsByClassName('.mobile-links');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('clicked')
    mobile_menu.classList.toggle('is-clicked')
});

