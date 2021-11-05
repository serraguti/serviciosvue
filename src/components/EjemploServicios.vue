<template>
    <div>
        <h1>Ejemplo servicios Api</h1>
        <h2 style="color:blue">{{saludo}}</h2>
        <h1 style="color:green" v-if="empleado">
            {{empleado.apellido}}
        </h1>
        <h1 style="color:red" v-else>
            No tenemos empleado
        </h1>
    </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo';
//ESTO UNA CLASE JS, DEBEMOS TENER UN OBJETO
//PARA LLAMAR A SUS METODOS
const service = new ServiceEjemplo();

export default{
    name: "EjemploServicios",
    data() {
        return {
            saludo: "",
            empleado: null
        }
    }, mounted() {
        this.saludo = service.getSaludo("Alumno");
        service.getEmpleado(7566).then(result => {
            this.empleado = result;
        });

        //PROMESAS SE LLAMAN CON THEN
        service.getPromesa.then(result => {
            //AQUI LOS DATOS OK
            this.saludo = result;
        });
    }
}
</script>