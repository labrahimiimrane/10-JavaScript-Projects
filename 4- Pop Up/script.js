const btnOpen = document.querySelector('#btn-open');
const popUp = document.querySelector('.pop-up');
const btnClose = document.querySelector('#btn-close');


btnOpen.addEventListener('click', () => {
    popUp.classList.add('active');
 });
 btnClose.addEventListener('click', () => {
    popUp.classList.remove('active');
 });