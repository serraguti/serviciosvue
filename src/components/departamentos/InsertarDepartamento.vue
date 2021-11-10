<template>
    <div>
        <h1>Nuevo departamento</h1>
        <router-link to="/departamentos" class="btn btn-info">
            Volver al listado
        </router-link>
        <div style="width: 500px; margin: 0 auto">
            <form method="post" v-on:submit.prevent="insertarDepartamento()">
                <div class="form-group">
                    <label>Número</label>
                    <input type="number" class="form-control"
                    v-model="departamento.numero"/>
                </div>
                <div class="form-control">
                    <label>Nombre: </label>
                    <input type="text" v-model="departamento.nombre"
                    class="form-control"/>
                </div>
                <div class="form-control">
                    <label>Localidad: </label>
                    <input type="text" v-model="departamento.localidad"
                    class="form-control"/>
                </div>
                <button class="btn btn-success">
                    Insertar departamento
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import ServiceDepartamentos from './../../services/ServiceDepartamentos';

const service = new ServiceDepartamentos();

export default{
    name: "InsertarDepartamento",
    methods: {
        insertarDepartamento() {
            //CONVERTIR LOS DATOS STRING A INT PARA EL SERVICIO
            this.departamento.numero = parseInt(this.departamento.numero);
            service.insertarDepartamento(this.departamento).then(res => {
                console.log(res);
                this.$router.push("/departamentos");
            });
        },
    }, data() {
        return {
            mensaje: "",
            departamento: {
                numero: 0,
                nombre: "",
                localidad: ""
            },
        }
    }
}
</script>