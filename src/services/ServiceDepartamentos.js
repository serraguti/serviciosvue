import Global from './../components/Global';
import axios from 'axios';

export default class ServiceDepartamentos{
    getDepartamentos() {
        return new Promise(function(resolve) {
            var request = "/api/departamentos";
            var url = Global.urldepartamentoscrud + request;
            axios.get(url).then(res => {
                var departamentos = res.data;
                resolve(departamentos);
            });
        });
    }

    insertarDepartamento(departamento){
        return new Promise(function(resolve){
            var request = "/api/departamentos";
            var url = Global.urldepartamentoscrud + request;
            axios.post(url, departamento).then(res => {
                resolve(res);
            });
        });
    }

    buscarDepartamento(id){
        return new Promise(function(resolve){
            var request = "/api/departamentos/" + id;
            var url = Global.urldepartamentoscrud + request;
            axios.get(url).then(res => {
                var departamento = res.data;
                resolve(departamento);
            });
        });
    }

    updateDepartamento(departamento){
        return new Promise(function(resolve){
            var request = "/api/departamentos";
            var url = Global.urldepartamentoscrud + request;
            axios.put(url, departamento).then(res => {
                resolve(res);
            });
        });
    }

    deleteDepartamento(id) {
        return new Promise(function(resolve){
            var request = "/api/departamentos/" + id;
            var url = Global.urldepartamentoscrud + request;
            axios.delete(url).then(res => {
                resolve(res);
            });
        });
    }
}