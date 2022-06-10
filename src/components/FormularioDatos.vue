<script setup>
import BotonesAcciones from "@/components/BotonesAcciones.vue";

</script>

<template>
        <figure class="imagenForm">
            <img src="../assets/imagenes/hero.jpg" alt="">
        </figure>

        <section class="contForm">
            
            <div class="grupoForm">
                <label class="tituloInput" for="nombre">Ingrese su nombre</label>
                <input v-model="datos.nombre" type="text" id="nombre" class="nombre infoUser" required placeholder="Introduce tu nombre">
            </div>
            <div class="grupoForm">
                <label class="tituloInput" for="apellido">Ingrese su apellido</label>
                <input v-model="datos.apellido" type="text" id="apellido" class="apellido infoUser"  required placeholder="Introduce tu apellido">
            </div>
            <div class="grupoForm">
               <label class="tituloInput" for="monto">Ingrese su monto a invertir</label>
               <input v-model="datos.montoinvertir" type="number" id="monto" class="monto dineroUser" min="1000" required placeholder="Introduce tu monto">
           </div>
            <div class="grupoForm">
                <label class="tituloInput" for="dias">Ingrese la cantidad de dias</label>
                <input v-model="datos.dias" type="number" id="dias" max="360" class="dias dineroUser" min="1" required placeholder="Introduce los dias">
            </div>
            <div class="grupoForm">
           </div>

            <BotonesAcciones
              :datos="datos"
            >

            </BotonesAcciones>

        </section>
</template>

<style>
:root {
    --lightgray: #efefef;
    --blue: steelblue;
    --white: #fff;
    --black: rgba(0, 0, 0, 0.8);
    --bounceEasing: cubic-bezier(0.51, 0.92, 0.24, 1.15);
}
.imagenForm{
    width: 100%;
    height: 50%;
    position: relative;
}
.imagenForm img{
    width: 100%;
     height: 100%;
     object-fit: cover;
      display: block;   
        
    }
.contForm{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.822);
    padding: 15px;
}

.grupoForm{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px;
}
.grupoForm input{
    padding: 25px;
    border: none;
    outline: none;
    font-size: 2.2em;
    margin: 10px 0;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
}

.tituloInput{
    color: white;
    font-size: 3.2em;
    font-weight: 800;
}

</style>

<script>
export default {
    name: "FormularioDatos",
    data(){
        return{
            datos:{}
        }
    }
}
</script>