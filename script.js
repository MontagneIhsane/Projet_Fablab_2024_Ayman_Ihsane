function lampe(){
    const image = document.getElementById('myImage');
    let etatLampe = 0;
    //newImageSource  = newImageSource === "Logo.png"? "bg_img.jpg" : "Logo.png";
    if(newImageSource === "Logo.png"){
        newImageSource =  "bg_img.jpg"
        etatLampe = 1;
    }else{
        newImageSource =  "Logo.png"
        etatLampe = 0;
    }
    image.src = newImageSource;
    fetch("http://localhost:8080/lampe?on="+etatLampe);
}
