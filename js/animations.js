$(function() {

    fadeInHeader();

});

function fadeInHeader() {

    gsap.from('.fade-in', { duration: 1, opacity: 0, delay: .5, stagger: 1 });
}