const daily = document.querySelector('#daily');
const tic = document.querySelector('#tic');
const mobile = document.querySelector('#mobile');
const projInfo = document.getElementsByClassName('.p-info');

daily.addEventListener('mouseover', () =>{
    projInfo.classList.remove('hide');
});
daily.addEventListener('mouseout', () =>{
    projInfo.classList.add('hide');
});
tic.addEventListener('mouseover', () =>{
    projInfo.classList.remove('hide');
});
tic.addEventListener('mouseout', () =>{
    projInfo.classList.add('hide');
});
mobile.addEventListener('mouseover', () =>{
    projInfo.classList.remove('hide');
});
mobile.addEventListener('mouseout', () =>{
    projInfo.classList.add('hide');
});