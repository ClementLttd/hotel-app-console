const presentation = require('./presentation.js');
const request = require('request');
const requestPromise = require('request-promise-native');

class Service {
    listerClients = () => {
        return requestPromise('https://hotel-web-api.herokuapp.com/clients?nom', { json: true })
            .then(clients => clients);
    }

    ajouterClient = (nom, prenom) => {
        return requestPromise.post('https://hotel-web-api.herokuapp.com/clients?nom', {
            json: {
                "nom": nom,
                "prenoms": prenom
            }
        })

    }
    rechercherParNom = nom => {
        return requestPromise(`https://hotel-web-api.herokuapp.com/clients?nom${nom}`, { json: true })
            .then(clients => clients);
    }
}

exports.Service = Service;