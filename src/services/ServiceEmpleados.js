import Global from './../components/Global';
import axios from 'axios';

export default class ServiceEmpleados {
    getOficios() {
        return new Promise(function(resolve){
            var request = "/api/empleados/oficios";
            var url = Global.urlapiempleados + request;
            axios.get(url).then(res => {
                var oficios = res.data;
                resolve(oficios);
            });
        });
    }

    getEmpleadosOficio(oficio){
        return new Promise(function(resolve){
            var request = "/api/Empleados/EmpleadosOficio/" + oficio;
            var url = Global.urlapiempleados + request;
            axios.get(url).then(res => {
                var empleados = res.data;
                resolve(empleados);
            });
        });
    }
}