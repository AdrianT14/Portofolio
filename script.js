const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('clicked')
    mobile_menu.classList.toggle('is-clicked')
});


document.querySelectorAll('.mobile-links').forEach(n =>
    n.addEventListener('click', () => {
        hamburger.classList.remove('clicked')
        mobile_menu.classList.remove('is-clicked')
    }));