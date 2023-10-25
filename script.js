// function changeImage(){
//     const image = document.getElementById('myImage');
//     let etatLampe = 0;
//     //newImageSource  = newImageSource === "Logo.png"? "bg_img.jpg" : "Logo.png";
//     if(newImageSource === "img/bulb_PNG1254.png"){
//         newImageSource = "img/ampoule-led-e27-a-filaments-800-lumens.jpg"
//         etatLampe = 1;
//     }else{
//         newImageSource =  "img/bulb_PNG1254.png"
//         etatLampe = 0;
//     }
//     image.src = newImageSource;
//     fetch("http://localhost:8080/lampe?on="+etatLampe);
// }

function changeImage() {
    var image = document.getElementById('myImage');
    let etatLampe = 0;
    if (image.src.match('img/L1.JPG')) {
        image.src = 'img/L2.JPG';
        etatLampe = 1;
    } else {
        image.src = 'img/L1.JPG';
        etatLampe = 0;
    }
    fetch("http://localhost:8080/lampe?on="+etatLampe);
} 

function changeImage_2() {
    var image = document.getElementById('myImage_2');
    let etatgaz = 0;
    if (image.src.match('img/R1.JPG')) {
        image.src = 'img/R2.JPG';
        etatgaz = 1;
    } else {
        image.src = 'img/R1.JPG';
        etatLampe = 0;
    }
    fetch("http://localhost:8080/gaz?on="+etatgaz);
}

const imageElement = document.getElementById('slider-image');
const slider = document.getElementById('image-slider');

const images = ["img/P1.JPG", "img/P2.JPG", "img/P3.JPG"];

slider.addEventListener('input', function() {
    const index = slider.value - 1;
    imageElement.src = images[index];
});

const imageElement_4 = document.getElementById('slider-image_2');
const slider_4 = document.getElementById('image-slider_2');

const images_4 = ["img/F1.JPG", "img/F2.JPG", "img/F3.JPG"];

slider_4.addEventListener('input', function() {
    const index_1 = slider_4.value - 1;
    imageElement_4.src = images_4[index_1];
});