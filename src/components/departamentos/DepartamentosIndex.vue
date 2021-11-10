<template>
    <div>
        <h1>Departamentos</h1>
        <router-link class="btn btn-info" to="/insertardepartamento">
            Nuevo Departamento
        </router-link>
        <hr/>
        <table class="table table-danger"
        v-if="departamentos.length > 0">
            <thead>
                <tr>
                    <th>Número</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dept, index) in departamentos"
                :key="index">
                    <td>{{dept.numero}}</td>
                    <td>{{dept.nombre}}</td>
                    <td>{{dept.localidad}}</td>
                    <td>
                        <router-link class="btn btn-outline-dark"
:to="'/detallesdepartamento/' + dept.numero + '/' + dept.nombre + '/' + dept.localidad">
                            Detalles
                        </router-link>
                        <router-link class="btn btn-info"
                        :to="'/modificardepartamento/' + dept.numero">
                            Editar
                        </router-link>
                        <router-link class="btn btn-danger"
                        :to="'/eliminardepartamento/' + dept.numero">
                            Eliminar
                        </router-link>
                    </td>
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