//Trabajo Practico de laboratorio 3 (Comba, Carranza, Robledo).

const campos = document.querySelectorAll("input");

const modalMonto = document.getElementById("modalMonto");

const calcularDinero = document.getElementById("calcularDinero");
const reinvertirDinero = document.getElementById("reinvertirDinero");

const modalError = document.getElementById("modalError");
const modalErrorText = document.getElementById("modalContent");
const modalCerrar = document.getElementById("modalCerrar");

const contenedorTabla = document.getElementById("contenedorTabla");
const tabla = document.getElementsByClassName("montos");

const cerrarMonto = document.getElementById("cerrarMonto");


const calcularPorcentaje = ()=>{
    if(diasInvertir >=30 && diasInvertir <= 60) return porcentaje = 40;
    if(diasInvertir >=61 && diasInvertir <= 120) return porcentaje = 45;
    if(diasInvertir >=121 && diasInvertir <=359) return porcentaje = 50;
    if(diasInvertir >= 360) return porcentaje = 65;
}

let montoInvertir = 0;
let diasInvertir = 0;

let montoFinal = 0; 
let porcentaje = 0;

let reinvertir = false;
let banderin = 0;

//calcular monto final
//monto final = monto inicial + monto inicial * (cantidad días/360) * (porcentaje/100)
                //motoInvertir + //montoInvertir * diasInvertir/360 * porcentaje/100;
modalCerrar.addEventListener("click",()=>{
    modalError.style.opacity = 0;
    modalError.style.zIndex = -1;
    modalErrorText.innerText = "";
})

calcularDinero.addEventListener("click", CalcularDineroUser);

reinvertirDinero.addEventListener("click",()=>{
    if(reinvertir === true) AgregarTabla();
    else MostrarError("Necesita Invertir  un nuevo monto, antes de reinvertirlo.");
});

cerrarMonto.addEventListener("click",()=>{
    modalMonto.classList.remove("visible");
})

function Validar(info){

    //valida solo los de nombre y apellido
    if(info.classList.contains("infoUser")){
        if(info.value.trim().toLowerCase() !== ""){
            banderin++;
            return info.value;
        }else{
            
            MostrarError("Campo nombre y apellido vacios o incorrectos");
        }
    }

    //valida solo el monto
    if(info.classList.contains("monto")){
        if(!isNaN(info.value) && info.value.length >= 4){
            banderin++;
            return montoInvertir = Number(info.value);
            
        }else{
            
            MostrarError("Campo monto, vacio o incorrecto");
        }
    }
    //valida solo los dias
    if(info.classList.contains("dias")){
        if(!isNaN(info.value) && Number(info.value) >= 30 && Number(info.value) <=360){
            banderin++;
            return diasInvertir = Number(info.value);
            
        }else MostrarError("Campo dias, vacio o incorrecto") //campo de dias vacio o incorrecto

    }

   
}

function CalcularDineroUser(){

    for(let i = 0; i < campos.length; i++){
        if(campos[i].value === ""){
            MostrarError("Campos vacios, los campos NOMBRE, APELLIDO, MONTO Y DIAS son obligatorios") //campos vacios
            break;
        }
            Validar(campos[i]);
        
    }

    if(banderin === 4){


    const montoFinalOp = ()=>{
        return  montoFinal = montoInvertir + montoInvertir * ((diasInvertir/360) * (calcularPorcentaje() / 100));
    }
    
    AgregarHTML(montoFinalOp);
    reinvertir = true;
    }
    
    banderin = 0;
    
}

function AgregarHTML(monto){

    let mostrarMonto = document.createElement("p");
        mostrarMonto.innerText = `MONTO FINAL: $ ${monto().toFixed(2).toString()}`;
    let mostrarDias = document.createElement("p");
        mostrarDias.innerText = `CANTIDAD A DIAS: ${diasInvertir.toString()}`;
    let mostrarMontoInicial = document.createElement("p");
        mostrarMontoInicial.innerText = `MONTO INICIAL: $ ${montoInvertir.toString()}`;
    
    let hr = document.createElement("hr");
    modalMonto.appendChild(mostrarMonto);
    modalMonto.appendChild(mostrarDias);
    modalMonto.appendChild(mostrarMontoInicial);
    modalMonto.appendChild(hr);
    modalMonto.classList.add("visible");
  
}

function MostrarError(mensaje){
    modalError.style.opacity = 1;
    modalError.style.zIndex = 1;
    let p = document.createElement("p");
        p.innerText = mensaje;

        modalErrorText.appendChild(p);
       
}

const montoFinalReinvertir = (montoNuevo, diasNuevo)=>{
  montoFinal = montoNuevo + montoNuevo * ((diasNuevo/360) * (calcularPorcentaje() / 100));
  montoInvertir = montoFinal;
}

function AgregarTabla(){
    console.log(tabla)
     for(let i = 0; i < tabla.length; i++){
         if(i % 2 === 0){
             tabla[i].innerText = montoInvertir.toFixed(2).toString();
             montoFinalReinvertir(montoInvertir, diasInvertir);
         }
         if(i % 2 !== 0){
             tabla[i].innerText = montoFinal.toFixed(2).toString();
         }
     }
     contenedorTabla.classList.add("visible");
    
     reinvertir = false;
   
}