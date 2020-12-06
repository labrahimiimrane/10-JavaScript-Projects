const images = document.getElementById('images');
const img = document.querySelectorAll('#images img');

let idx = 0; 

function slide() {
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    images.style.transform = `translateX(${-idx * 500}px)`;

}

setInterval(slide, 2000);