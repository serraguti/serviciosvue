<template>
    <div>
        <h1>Departamentos</h1>
        <table class="table table-danger"
        v-if="departamentos.length > 0">
            <thead>
                <tr>
                    <th>Número</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dept, index) in departamentos"
                :key="index">
                    <td>{{dept.numero}}</td>
                    <td>{{dept.nombre}}</td>
                    <td>{{dept.localidad}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceDepartamentos from './../../services/ServiceDepartamentos';

const service = new ServiceDepartamentos();

export default {
    name: "DepartamentosIndex",
    mounted() {
        this.cargarDepartamentos();
    }, methods: {
        cargarDepartamentos() {
            service.getDepartamentos().then(result => {
                this.departamentos = result;
            });
        }
    }, data() {
        return {
            departamentos: [],
        }
    }
}
</script>