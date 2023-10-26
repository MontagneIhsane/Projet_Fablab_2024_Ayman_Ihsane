async function changeImage() {
    var image = document.getElementById('myImage');
    let etatLampe = 0;
    if (image.src.match('img/L1.JPG')) {
        image.src = 'img/L2.JPG';
        etatLampe = 1;
    } else {
        image.src = 'img/L1.JPG';
        etatLampe = 0;
    }
    const response_2 = await fetch("http://localhost:8080/lampe?on="+etatLampe);
} 

async function changeImage_2() {
    var image = document.getElementById('myImage_2');
    let etatgaz = 0;
    if (image.src.match('img/R1.JPG')) {
        image.src = 'img/R2.JPG';
        etatgaz = 1;
    } else {
        image.src = 'img/R1.JPG';
        etatLampe = 0;
    }
    const response_2 = await fetch("http://localhost:8080/gaz?on="+etatgaz);
}

async function changeImage_3() {
    var image = document.getElementById('myImage_5');
    let etatinperphone = 0;
    if (image.src.match('img/interphone_coupe.png')) {
        image.src = 'img/interphone_ouvert.png';
        etatinterphone = 1;
    } else {
        image.src = 'img/interphone_coupe.png';
        etatinperphone = 0;
    }
    const response_3 = await fetch("http://localhost:8080/interphone?on="+etatinperphone);
}

const imageElement = document.getElementById('slider-image');
const slider = document.getElementById('image-slider');

const images = ["img/P1.JPG", "img/P2.JPG", "img/P3.JPG"];

slider.addEventListener('input', async function() {
    const index = slider.value - 1;
    imageElement.src = images[index];
    const response_4 = await fetch("http://localhost:8080/door?paramas="+ slider.value);
});



const imageElement_4 = document.getElementById('slider-image_2');
const slider_4 = document.getElementById('image-slider_2');

const images_4 = ["img/F1.JPG", "img/F2.JPG", "img/F3.JPG"];

slider_4.addEventListener('input', async function() {
    const index_1 = slider_4.value - 1;
    imageElement_4.src = images_4[index_1];
    const response_5 = await fetch("http://localhost:8080/fenetre?paramas="+slider_4.value);
});

