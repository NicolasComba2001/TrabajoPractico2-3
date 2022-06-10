

<template>

    <div class="grupoForm botones" >             
        <button v-if="invirtio === true" class="btnReinvertir" id="reinvertirDinero" @click="reinvertir()">Reinvertir Dinero</button>
                
        <button class="btnCalcular" id="calcularDinero" v-on:click="validar()">Invertir dinero</button>
    </div>

    <div v-if="error === true" class = "modalError" id="modalError"> 
        <div class = "modal1">
            <article class="modalHeader">
                <button class="modalCerrar" aria-label="modal Cerrar" data-close id="modalCerrar" @click="error = false">X</button>
                <p>{{errormensaje}}</p>
            </article>
        </div>
    </div>

    <div v-if="montofinal > 0" class="modalMonto" id="modalMonto">
         <button class="cerrarMonto" id="cerrarMonto" @click="montofinal = 0">X</button>
         <strong>HISTORIAL</strong>
         <p>Inversion: {{datos.montoinvertir}}</p>
         <p>Dias: {{datos.dias}}</p>
         <p>Monto Final: {{montofinal.toFixed(2)}}</p>
    </div>


     <figcaption v-if="invirtio === true" class="contTable">
     <p class="tituloContTable">TABLA DE REINVERSION</p>
                <section class="itemsTable">
                    <li v-for="(monto, index) in this.montos" :key="index" class="itemsReinvertir">
                        <em>{{index % 2 === 0 ? "monto inicial":"monto final"}}</em><p>{{montos[index].toFixed(2)}}</p>
                    </li>
                </section>
        <button class="salirTablaReinvertir" @click="invirtio = false">X</button>
    </figcaption>
</template>

<style>
   .botones{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px;
    flex-direction: row;
    justify-content: space-around;
}
    .btnReinvertir, .btnCalcular{
    width: 45%;
    margin: 20px auto;
    padding: 25px;
    border: none;
    font-size: 2.2em;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    cursor: pointer;
}
.btnReinvertir:hover,.btnCalcular:hover{
    box-shadow: 0 5px 5px 0 rgba(251, 255, 3, 0.719);
    transition: transform 1s ease;
    transform: translateY(-2px);
    -webkit-transform: translateY(-2px);
    -moz-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    -o-transform: translateY(-2px);
    -webkit-transition: transform 1s ease;
    -moz-transition: transform 1s ease;
    -ms-transition: transform 1s ease;
    -o-transition: transform 1s ease;
}

.modalError{
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: var(--black);
    transition: all 0.35s ease-in; 
}
.modal1 {
    position: relative;
    width:  90%;
    height: 500px;
    border-radius: 5px;
    background: var(--white);
}
.modalHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.modalCerrar{
    top: -10px;
    z-index: 100;
    cursor: pointer;
    left: -10px;
    border: none;
    background-color: red;
    color: white;
    position: absolute;
    width: 80px;
    height: 80px;
    font-size: 1.5em;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
}
.modalContent{
    overflow: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}.modalContent p{
    display: block;
    margin: 5px;
    font-size: 2.5em;
    line-height: 2;
}

.modalMonto{
    z-index: 1;
    position: absolute;
    max-height: 700px;
    overflow: auto;
    top: 0;
    left: 5%;
    background-color: rgb(252, 252, 252);
    text-align: center;
    font-size: 2.5em;
    padding: 15px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    transform: translate(-5%,5%);
    -webkit-transform: translate(-5%,5%);
    -moz-transform: translate(-5%,5%);
    -ms-transform: translate(-5%,5%);
    -o-transform: translate(-5%,5%);
    box-shadow: 20px 20px 3px 0 rgba(0, 0, 0, 0.822);
}
.modalMonto::-webkit-scrollbar{width: 6px;}
.modalMonto::-webkit-scrollbar-thumb{
    background-color: black;
    border-radius:10px ;
    -webkit-border-radius:10px ;
    -moz-border-radius:10px ;
    -ms-border-radius:10px ;
    -o-border-radius:10px ;
}
.modalMonto > p{
    margin: 10px;
    display: block;
}
.cerrarMonto{
    cursor: pointer;
    position: absolute;
    top: 0;
    color: white;
    left: 0;
    width: 35px;
    height: 35px;
    border: none;
    background-color: red;
    font-size: 1.2em;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
}
.tituloContTable{
    font-size: 1.5em;
    color: red;
    padding: 5px;
    background-color: black;
    font-weight: 800;
    text-align: center;
    text-decoration: underline;
}
.contTable{
     z-index: 1;
    position: absolute;
    top: 40%;
    width: 40%;
    height: max-content;
    left: 0;
    overflow: auto;
    background: white;
}
.itemsTable{
    width: 100%;
    height: 400px;
    display: grid;
    
    grid-template-columns: repeat(2,1fr);
    place-items: center;
}
.itemsReinvertir{
    list-style: none;
    font-size: 1.2em;
}
.salirTablaReinvertir{
    position: absolute;
    top: 0;
    right: 0;
    widows: 30px;
    height: 30px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;
    font-size: 1.2em;
    text-align: center;
    border-radius: 50%;
}
</style>

<script>
export default{
    name: "BotonesAcciones",
   data(){
       return{
           errormensaje: "",
           correcto: 0,
           error: false,
           invirtio: false,
           montofinal: 0,
           nuevomonto: this.datos.montoinvertir,
           nuevomontofinal: 0,
           porcentaje: 0,
           montos: []
       }
   },
    props:{
        datos: null,
    },
    methods:{
        //validamos todos los campos
        validar(){
            this.correcto = 0;
            if(this.datos.nombre === " " || this.datos.nombre === undefined || parseInt(this.datos.nombre)){
                console.log("campo incorrecto nombre");
                this.errormensaje = "Campo nombre incorrecto, no puede contener numeros ni estar vacio.";
                this.error = true;
                
            }else {
                this.correcto += 1;
            }
            if(this.datos.apellido === "" || this.datos.apellido === undefined ||  parseInt(this.datos.apellido)){
                console.log("campo incorrecto apellido");
                 this.errormensaje = "Campo apellido incorrecto, no puede contener numeros ni estar vacio.";
                 this.error = true;
            }else {
                this.correcto += 1;
            }

            if(isNaN(this.datos.montoinvertir) || this.datos.montoinvertir <= 4 || this.datos.montoinvertir === undefined){
                console.log("campo incorrecto monto");
                this.errormensaje = "Campo monto a invertir, no puede estar vacio y tampoco puede invertir un monto menor de 4 digitos.";
                this.error = true;
            }else {
                this.correcto += 1;
            }
            if(isNaN(this.datos.dias) || this.datos.dias <30 || this.datos.dias === undefined){
                console.log("campo incorrecto dias");
                this.errormensaje = "Campo dias, no puede estar vacio y tampoco puede invertir a un plazo menor de 30 dias.";
                this.error = true;
            }else {
                this.correcto += 1;
            };

            
            //si todos los campos estan correctos, realizamos el calculo de inversion
            if(this.correcto >= 4){
                this.invirtio = true;
                    //calculamos el porcentaje
                    if(this.datos.dias >=30 &  this.datos.dias <= 60){
                        this.porcentaje = 40;
                    } if( this.datos.dias >= 61 &  this.datos.dias <= 120){
                        this.porcentaje = 45;
                    }if( this.datos.dias >= 121 &  this.datos.dias <=359){
                        this.porcentaje = 50;
                    }if( this.datos.dias >= 360) {
                        this.porcentaje = 65
                    };

            //calculamos todo lo que va a recibir el usuario
            this.montofinal = this.datos.montoinvertir + this.datos.montoinvertir * (this.datos.dias / 360) * (this.porcentaje / 100);
            this.nuevomontofinal = this.montofinal;
            }
            
        },
        reinvertir(){
            this.montos = [];
            for(let i = 0; i < 4 - 1; i++){
                
                 if(i % 2 === 0){
                     this.tablaInversion()
               
                 }
                if(i % 2 !== 0){
                    this.tablaInversion()
                    
                }
            }
            if(this.nuevomonto === 0 & this.nuevomontofinal === 0){
                 this.error = true;
                this.errormensaje = "debera invertir un nuevo valor para conocer los proximos 6 montos nuevos."
            }
            this.nuevomonto = 0;
            this.nuevomontofinal = 0;

        },
        tablaInversion(){
            
            this.nuevomonto = this.nuevomontofinal;
            this.nuevomontofinal = this.nuevomonto + this.nuevomonto * ((this.datos.dias/360) * (this.porcentaje / 100));

            this.montos.push(this.nuevomonto);
            this.montos.push(this.nuevomontofinal);
        }
    }
}
</script>