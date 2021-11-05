<template>
  <div>
    <h1>Api Coches</h1>
    <div class="card" style="width: 18rem; float: left"
      v-for="(coche, index) in coches" :key="index">
      <img :src="coche.imagen" class="card-img-top" :title="coche.marca" />
      <div class="card-body">
        <h5 class="card-title">{{ coche.marca + " " + coche.modelo }}</h5>
        <p class="card-text">{{ coche.conductor }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//AQUI PODEMOS DECLARAR VARIABLE GLOBALES
//PARA TODOS LOS METODOS DEL COMPONENTE
var urlapicoches = "https://apicochespaco.azurewebsites.net/";

export default {
  name: "Coches",
  data() {
    return {
      coches: [],
    };
  },
  mounted() {
    this.cargarCoches();
  },
  methods: {
    cargarCoches() {
      var request = "/webresources/coches";
      var url = urlapicoches + request;
      axios.get(url).then((res) => {
        this.coches = res.data;
      });
    },
  },
};
</script>