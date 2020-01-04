
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
}

export default PuntosApi;