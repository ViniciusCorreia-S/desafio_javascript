

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    
      
    constructor (imagen, title, url) {
        this.imagen = imagen;
        this.title = title;
        this.url = url;
    }

    static Start(arr){
        if(arr){
            
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Lista(arr)
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }

        } else {
            throw "O método Start precisa de uma variável de matriz.";
        }
        
    }

    static Next(){
        document.querySelectorAll('#carousel a').forEach(Element => Element.style.display = 'none');
        document.querySelectorAll('#carousel-title a').forEach(Element => Element.style.display = 'none');

        document.querySelectorAll(`#carousel a:nth-child(${Carousel._sequence +1})`).forEach(Element => Element.style.display = 'inline');
        document.querySelectorAll(`#carousel-title a:nth-child(${Carousel._sequence +1})`).forEach(Element => Element.style.display = 'inline');

        if (Carousel._sequence >= Carousel._size -1) {
            Carousel._sequence = 0;
        }
        else {
            Carousel._sequence++;
        }
    }
    static Lista(conteudo) {
        
        for (let i = 0; i < conteudo.length; i++) {

            const carousel_Imagen = conteudo[i].imagen
            const carousel_title = conteudo[i].title
            const carousel_Url = conteudo[i].url

            document.querySelector('#carousel').innerHTML += `<a href='${carousel_Url}'> <img src = 'img/${carousel_Imagen}'> </a>`
            document.querySelector('#carousel-title').innerHTML += `<a href='${carousel_Url}'> ${carousel_title} </a>`
        }
    }
}
