window.onload = function() {
    toggleMenu();
}

function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {

        menuBtn.classList.toggle('open');
        navLinks.classList.toggle('open');
        menuOpen = true;

    })

    navLinks.addEventListener('click', () => {

        menuBtn.classList.remove('open');
        navLinks.classList.remove('open');

    })

}