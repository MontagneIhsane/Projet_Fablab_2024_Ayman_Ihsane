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
    if (image.src.match('img/ampoule-led-e27-a-filaments-800-lumens.jpg')) {
        image.src = 'img/bulb_PNG1254.png';
        etatLampe = 1;
    } else {
        image.src = 'img/ampoule-led-e27-a-filaments-800-lumens.jpg';
        etatLampe = 0;
    }
    fetch("http://localhost:8080/lampe?on="+etatLampe);
} 

function changeImage_2() {
    var image = document.getElementById('myImage_2');
    let etatgaz = 0;
    if (image.src.match('img/Comment-couper-une-arrivee-de-gaz-maisonbonte.png')) {
        image.src = 'img/gettyimages-1301820392-612x612.jpg';
        etatgaz = 1;
    } else {
        image.src = 'img/Comment-couper-une-arrivee-de-gaz-maisonbonte.png';
        etatLampe = 0;
    }
    fetch("http://localhost:8080/gaz?on="+etatgaz);
}

const imageElement = document.getElementById('slider-image');
const slider = document.getElementById('image-slider');

const images = ["img/porte-fermee-blanche-isolee_1284-43080.avif", "img/entre ouverte.webp", "img/porte ouverte.webp"];

slider.addEventListener('input', function() {
    const index = slider.value - 1;
    imageElement.src = images[index];
});
