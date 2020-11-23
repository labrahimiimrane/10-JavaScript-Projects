const btn = document.getElementById('btn');
const nav = document.getElementById('nav');
const img = document.getElementById('img');

btn.addEventListener('click', () => {
 nav.classList.toggle('active');
 btn.classList.toggle('active');
 if(btn.classList.contains('active')){
    img.src= 'close.png';
 } else{
    img.src= 'menu.png';
 }
 

});