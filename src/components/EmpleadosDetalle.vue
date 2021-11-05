<template>
    <div>
        <h1>Empleados detalles Api</h1>
        <form method="post" v-on:submit.prevent="mostrarDetalleEmpleado">
            <label>Seleccione un empleado</label>
            <select class="form-control" v-model="idempleado">
                <option v-for="(empleado, index) in empleados"
                 :value="empleado.idEmpleado"
                 :key="index">
                    {{empleado.apellido}}
                </option>
            </select>
            <button class="btn btn-success">
                Mostrar detalles
            </button>
        </form>
        <hr/>
        <div v-if="empleado">
            <h1>{{empleado.apellido}}</h1>
            <h1>{{empleado.oficio}}</h1>
            <h1>{{empleado.departamento}}</h1>
        </div>
    </div>
</template>

<script>
import Global from './Global';
import axios from 'axios';

export default{
    name: "EmpleadosDetalle",
    mounted(){
        this.cargarEmpleados();
    },
    data() {
        return {
            empleados: [],
            idempleado: 0,
            empleado: null,
        }
    }, methods: {
        cargarEmpleados() {
            var request = "/api/empleados";
            var url = Global.urlapiempleados + request;
            axios.get(url).then(res => {
                this.empleados = res.data;
            });
        }, mostrarDetalleEmpleado() {
            var request = "/api/empleados/" + this.idempleado;
            var url = Global.urlapiempleados + request;
            axios.get(url).then(res => {
                this.empleado = res.data;
            });
        }
    }
}
</script>