<script setup>
import FormularioDatos from "@/components/FormularioDatos.vue";
</script>

<template>
    <section class="form">
        <FormularioDatos></FormularioDatos>
    </section>
</template>

<style>
.form{
    display: flex;
    flex-direction: column;
    width: 100%;
}
@media (min-width: 768px){
    table{
        top: 70%;
    }
}

@media (min-width:1024px){
    .modalMonto{
        font-size: 1.1em;
    }
    table{
        height: 320px;
        top: 78%;
    }
    .titulosTable,table td{
        font-size: 1.2em;
    }
    
}



@media (min-width: 1300px){
    .form{
        width: 70%;
        flex-direction: row;
    }
    .imagenForm{
        
        height: 800px;
    }
    .contForm{
        
        height: 800px;
    }
    .btnReinvertir, .btnCalcular{
        font-size: 1.2em;
        padding: 10px;
    }.tituloInput{
        font-size: 1.5em;
    }.grupoForm input{padding: 10px; font-size: 1.2em;}
    .modal1{
        width: 30%;
        height: 200px;
    }
    .modalContent p{
        font-size: 1.5em;
    }
    .modalCerrar{
        font-size: 1em;
        width: 30px;
        height: 30px;
    }
    table{
        top: 30%;
    }
}
</style>

<script>
export default {
    name: "FondoInversionApp"
}
</script>