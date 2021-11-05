import Global from './../components/Global';
import axios from 'axios';

export default class ServiceEjemplo {
    getSaludo(nombre){
        return "Welcome to my service, " + nombre;
    }

    getPromesa = new Promise(function(resolve, reject){
        var num = 0;
        if (num == 0){
            //DEBEMOS DEVOLVER ALGO EN RESOLVE
            //O EN REJECT
            resolve("Ok!!");
        }else{
            reject("Respuesta ERROR");
        }
    });

    getPromesaSimple = new Promise(function(resolve){
        resolve();
    });

    getEmpleado(){
        var request = "/api/empleados/7839";
        var url = Global.urlapiempleados + request;
        var empleado = {
            apellido: "No soy nadie..."
        };
        axios.get(url).then(res => {
            empleado = res.data;
            console.log(empleado);
            return empleado;
        });
        return empleado;
    }
}

