

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    
      
    constructor (imagen, title, url) {
        this.imagen = imagen
        this.title = title
        this.url = url
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },3000);
            }
            
        } else {
            throw "O método Start precisa de uma variável de matriz.";
        }
    }

    static Next(){
        
        const carousel_Imagen = carousel_Imagen.imagen
        const carousel_Title = carousel_Title.title
        const carousel_Url = carousel_Url.url

        
        document.querySelector('#carousel').innerHTML += `<img src = ${carousel_Imagen} /> href='${carousel_Url}'`
        document.querySelector('#carousel_title').innerHTML += ` <a ${carousel_Title}  href='${carousel_Url}'`

    }
}
