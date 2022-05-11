let btnNextt = document.querySelector('#gallery .buttons .nextt');
let btnBackk = document.querySelector('#gallery .buttons .backk');

let images = document.querySelectorAll('#gallery .photos img');
let i = 0;


btnNextt.onclick = function() {
    images[i].className = '';
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].className = 'showed';
}

btnBackk.onclick = function() {
    images[i].className = '';
    i++;
    if (i >= images.length) {   
        i = 0;
    }
    images[i].className = 'showed';
}

// https://www.youtube.com/watch?v=-2WiaSvOj78&t=4812s - объяснение для создания слайдера