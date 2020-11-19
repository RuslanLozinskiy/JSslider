let getRigth = document.getElementById("right");
let getLeft = document.getElementById("left");
getRigth.addEventListener("click", right);
    getLeft.addEventListener("click", left);


let position = 1;
start(position);


function right() {
    start(position += 1);
}

function left() {
    start(position -= 1);
    
}

function slide(n) {
    start(position = n);
}

function start(p) {
    let images = document.getElementsByClassName('image');
    if (p > images.length) {
        position = 1;
    }
    if (p < images) {
        position = images.length;
    }
    if(p == 0) {
        position = 5;
    }
    for (let img of images) {
        img.style.display = 'none';
    }
    images[position - 1].style.display = 'block';
}
