
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome);
            return i;
    }
    return -1;
}



function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
                
            
        } else {
          
        } 
    } else {
        throw "Você precisa definir uma classe de carro";
    }
}

let Checkbox = document.querySelectorAll('input[type="checkbox"]');

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    if (Checkbox.length > Checkbox.checked) {
        Checkbox[1].disabled = true;
    }
    else {
        Checkbox[1].disabled = false;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    
}
