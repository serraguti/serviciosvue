<template>
    <div>
        <h1>Empleados oficios Services</h1>
        <form method="post" v-on:submit.prevent="getEmpleadosOficio()">
            <label>Seleccione un oficio</label>
            <select class="form-control" v-model="oficioseleccionado">
                <option v-for="(oficio, index) in oficios"
                :key="index" :value="oficio">
                    {{oficio}}
                </option>
            </select>
            <button class="btn btn-success">
                Mostrar empleados
            </button>
        </form>
        <hr/>
        <table class="table table-bordered" v-if="empleados.length > 0">
            <thead>
                <tr>
                    <th>APELLIDO</th>
                    <th>OFICIO</th>
                    <th>SALARIO</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(empleado, index) in empleados"
                :key="index">
                    <td>{{empleado.apellido}}</td>
                    <td>{{empleado.oficio}}</td>
                    <td>{{empleado.salario}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceEmpleados from './../services/ServiceEmpleados';

const service = new ServiceEmpleados();

export default {
    name: "EmpleadosServiciosOficios",
    mounted() {
        this.cargarOficios();
    },
    methods: {
        cargarOficios(){
            service.getOficios().then(result => {
                this.oficios = result;
            });
        },
        getEmpleadosOficio(){
            service.getEmpleadosOficio(this.oficioseleccionado).then(result => {
                this.empleados = result;
            });
        }
    }, data() {
        return {
            oficios: [],
            oficioseleccionado: "",
            empleados: [],
        }
    }
}
</script>