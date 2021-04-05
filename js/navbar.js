$(function() {

    toggleMenu();

});

function toggleMenu() {

    let menuOpen = false;

    $('.menu-btn')
        .on("click", function() {

            $('.menu-btn').toggleClass('open');
            $('.nav-links').toggleClass('open');
            menuOpen = true;
        });

    $('.nav-links')
        .on("click", function() {

            $('.menu-btn').removeClass('open');
            $('.nav-links').removeClass('open');

        });
}