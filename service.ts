const presentation = require('./presentation.js');
const request = require('request');
const requestPromise = require('request-promise-native');

class Service {
    listerClients(){
        return requestPromise('https://hotel-web-api.herokuapp.com/clients?nom', { json: true })
        .then((clients: any) => clients);
    }

    ajouterClient(nom:any , prenom:any){
        return requestPromise.post('https://hotel-web-api.herokuapp.com/clients?nom', {
            json: {
                "nom": nom,
                "prenoms": prenom
            }
        })

    }
    rechercherParNom(nom:any){
        return requestPromise(`https://hotel-web-api.herokuapp.com/clients?nom${nom}`, { json: true })
        .then((clients: any)=> clients)
        .catch((err: any) => console.log(err))
    }
}

export {Service};