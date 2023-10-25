// function lampe(){
//     const image = document.getElementById('myImage');
//     let etatLampe = 0;
//     //newImageSource  = newImageSource === "Logo.png"? "bg_img.jpg" : "Logo.png";
//     if(newImageSource === "Logo.png"){
//         newImageSource = "ampoule-led-e27-a-filaments-800-lumens.jpg"
//         etatLampe = 1;
//     }else{
//         newImageSource =  "bulb_PNG1254.png"
//         etatLampe = 0;
//     }
//     image.src = newImageSource;
//     fetch("http://localhost:8080/lampe?on="+etatLampe);
// }

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match('img/ampoule-led-e27-a-filaments-800-lumens.jpg')) {
        image.src = 'img/bulb_PNG1254.png';
    } else {
        image.src = 'img/ampoule-led-e27-a-filaments-800-lumens.jpg';
    }
} 

function changeImage_2() {
    var image = document.getElementById('myImage_2');
    if (image.src.match('img/Comment-couper-une-arrivee-de-gaz-maisonbonte.png')) {
        image.src = 'img/gettyimages-1301820392-612x612.jpg';
    } else {
        image.src = 'img/Comment-couper-une-arrivee-de-gaz-maisonbonte.png';
    }
}
function adjustOpacity(value) {
    var image = document.getElementById('myImage_3');

}