const text = "Lorem Ipsum is simply dummy text of the printing ...";
let index = 0;

function writeText() {
    document.body.innerHTML = text.slice(0, index);
    index++;
    
    if(index > text.length - 1){
        index = 0
    }
}

setInterval(writeText, 150)