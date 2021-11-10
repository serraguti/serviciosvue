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
}