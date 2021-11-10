<template>
    <div>
        <h1>Modificar departamento</h1>
        <router-link to="/departamentos" class="btn btn-info">
            Volver al listado
        </router-link>
        <div style="width: 500px; margin: 0 auto"
        v-if="departamento">
            <form method="post" v-on:submit.prevent="updateDepartamento()">
                <div class="form-group">
                    <label>Número</label>
                    <input type="text" v-model="departamento.numero"
                     class="form-control" disabled/>
                </div>
                <div>
                    <label>Nombre: </label>
                    <input type="text" v-model="departamento.nombre"
                    class="form-control"/>
                </div>
                <div>
                    <label>Localidad</label>
                    <input type="text" v-model="departamento.localidad"
                    class="form-control"/>
                </div>
                <button class="btn btn-outline-info">
                    Modificar datos
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import ServiceDepartamentos from './../../services/ServiceDepartamentos';

const service = new ServiceDepartamentos();

export default {
    name: "ModificarDepartamento",
    mounted() {
        this.id = this.$route.params.iddepartamento;
        this.buscarDepartamento();
    },
    methods: {
        buscarDepartamento() {
            service.buscarDepartamento(this.id).then(result => {
                this.departamento = result;
            });
        },
        updateDepartamento() {
            this.departamento.numero = parseInt(this.departamento.numero);
            service.updateDepartamento(this.departamento).then(result => {
                console.log(result);
                this.$router.push("/departamentos");
            });
        }
    },
    data() {
        return{
            departamento: null,
            id: 0,
        }
    }
}
</script>