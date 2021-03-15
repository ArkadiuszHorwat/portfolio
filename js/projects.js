const daily = document.querySelector('#daily');
const tic = document.querySelector('#tic');
const mobile = document.querySelector('#mobile');
const react = document.querySelector('#react');
const dailyEl = document.querySelector('.d');
const ticEl = document.querySelector('.t');
const mobileEl = document.querySelector('.m');
const reactEl = document.querySelector('.r');

daily.addEventListener('mouseover', () => {
    dailyEl.classList.remove('hide');
});
daily.addEventListener('mouseout', () => {
    dailyEl.classList.add('hide');
});
tic.addEventListener('mouseover', () => {
    ticEl.classList.remove('hide');
});
tic.addEventListener('mouseout', () => {
    ticEl.classList.add('hide');
});
mobile.addEventListener('mouseover', () => {
    mobileEl.classList.remove('hide');
});
mobile.addEventListener('mouseout', () => {
    mobileEl.classList.add('hide');
});
react.addEventListener('mouseover', () => {
    reactEl.classList.remove('hide');
});
react.addEventListener('mouseout', () => {
    reactEl.classList.add('hide');
});