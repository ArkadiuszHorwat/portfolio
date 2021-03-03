const menuIcon = document.querySelector('.menu-toggle');
const menuBar = document.querySelector('.menu-bar');
const cross = document.querySelector('.cross');
const hamburger = document.querySelector('.hamburger');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menuBar.classList.toggle('hide');
});