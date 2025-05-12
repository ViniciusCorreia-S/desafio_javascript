//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    //Exportar a lista do html para o JS
    constructor (imagen, title, url) {
        this.imagen = imagen;
        this.title = title;
        this.url = url;
    }

    static Start(arr){
        if(arr){
            
            if(arr.length > 0){
                Carousel._sequence = 0;//para o carousel reiniciar
                Carousel._size = arr.length;//tamanho do array
                Carousel.Lista(arr)//lista do que será inserido no html
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);//intervalo de tempo entre as imagens
            }

        }
    }

    static Next(){
        document.querySelectorAll('#carousel a').forEach(Element => Element.style.display = 'none');//insere na imagem o display none para deixa-la invisivel
        document.querySelectorAll('#carousel-title a').forEach(Element => Element.style.display = 'none');//insere no titulo o display none para deixa-lo invisivel

        document.querySelectorAll(`#carousel a:nth-child(${Carousel._sequence +1})`).forEach(Element => Element.style.display = 'inline');
        //insere no titulo o display inline para deixa-lo visivel, utilizando o nth-child para pegar o elemento selecionado
        document.querySelectorAll(`#carousel-title a:nth-child(${Carousel._sequence +1})`).forEach(Element => Element.style.display = 'inline');

        //condição para reiniciar o carousel
        if (Carousel._sequence >= Carousel._size -1) {
            Carousel._sequence = 0;
        }
        else {
            Carousel._sequence++;
        }
    }

    //lista de informações que serão inseridas no html
    static Lista(conteudo) {
        //loop para percorrer o array
        for (let i = 0; i < conteudo.length; i++) {

            const carousel_Imagen = conteudo[i].imagen
            const carousel_title = conteudo[i].title
            const carousel_Url = conteudo[i].url
            //inserindo as informações no html
            document.querySelector('#carousel').innerHTML += `<a href='${carousel_Url}'> <img src = 'img/${carousel_Imagen}'> </a>`
            document.querySelector('#carousel-title').innerHTML += `<a href='${carousel_Url}'> ${carousel_title} </a>`
        }
    }
}