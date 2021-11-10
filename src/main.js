import Vue from 'vue'
import App from './App.vue'
import Coches from './components/Coches.vue';
import VueRouter from 'vue-router';
import EmpleadosDetalle from './components/EmpleadosDetalle.vue';
import EjemploServicios from './components/EjemploServicios.vue';
import EmpleadosServiciosOficios from './components/EmpleadosServiciosOficios.vue';
import DepartamentosIndex from './components/departamentos/DepartamentosIndex.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/departamentos", component: DepartamentosIndex},
  {path: "/coches", component: Coches},
  {path: "/empleadosoficios", component: EmpleadosServiciosOficios},
  {path: "/ejemploservicios", component: EjemploServicios},
  {path: "/empleadosdetalle", component: EmpleadosDetalle}
]

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
