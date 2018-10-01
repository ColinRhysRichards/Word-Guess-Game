import Tesseract from 'tesseract.js';

// var myImage = ('./images/starwars.png')
var pic = document.getElementById("#pic")
// myImage.src = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fplantsvszombies%2Fimages%2F2%2F2e%2FLol-receipt.jpg%2Frevision%2Flatest%3Fcb%3D20120720082552&imgrefurl=http%3A%2F%2Fplantsvszombies.wikia.com%2Fwiki%2FFile%3ALol-receipt.jpg&docid=aFPfZNwcr2PFSM&tbnid=b1qLxkxeB6KuYM%3A&vet=10ahUKEwjfkcTL2-PdAhX6FTQIHZXrBNkQMwhcKAUwBQ..i&w=367&h=298&bih=564&biw=1229&q=receipt%20jpg&ved=0ahUKEwjfkcTL2-PdAhX6FTQIHZXrBNkQMwhcKAUwBQ&iact=mrc&uact=8";


   procoessOCR = (pic) => {
     Tesseract.recognize(pic)
    .then(function(result){
        console.log(result)
    });}