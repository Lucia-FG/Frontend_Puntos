
class PuntosApi {
    static API_BASE_URL = "/api/v1";

    static requestHeaders() {
        return {}
    }

    static getAllPuntos() {
       // const headers = this.requestHeaders();
        const request = new Request(PuntosApi.API_BASE_URL + "/puntos", {
            method: 'GET',
            headers: {'x-api-key':'eiWee8ep9due4deeshoa8Peichai8Eih'}
        });


        return fetch(request).then(response => {
            return response.json();
        });
    }

    static postPuntos(dni) {
        alert(dni)
        // const headers = this.requestHeaders();
         const request = new Request(PuntosApi.API_BASE_URL + "/puntos",
          {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key':'eiWee8ep9due4deeshoa8Peichai8Eih'},
            body: JSON.stringify({
                dni: dni,
                }),
            })          

 
         return fetch(request).then(response => {
             return "Añadido correctamente";
         });
     }

    static deletePuntos(dni) {
        // const headers = this.requestHeaders();
         const request = new Request(PuntosApi.API_BASE_URL + "/puntos/"+dni,
          {
             method: 'DELETE',
             headers: {
                'Content-Type': 'application/json',
                'x-api-key':'eiWee8ep9due4deeshoa8Peichai8Eih'},
            body: JSON.stringify({
                dni: dni,
                }),
            })          

 
         return fetch(request).then(response => {
             return "Eliminado correctamente";
         });
     }

     static putPuntos(dni,dni_nuevo) {
        // const headers = this.requestHeaders();
         const request = new Request(PuntosApi.API_BASE_URL + "/puntos/"+dni,
          {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key':'eiWee8ep9due4deeshoa8Peichai8Eih'},
            body: JSON.stringify({
                dni: dni_nuevo,
                }),
            })          

 
         return fetch(request).then(response => {
             return "Modificado correctamente";
         });
     }
    
    }


export default PuntosApi;