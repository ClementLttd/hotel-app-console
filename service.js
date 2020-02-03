var presentation = require('./presentation.js');
var request = require('request');

function listerClients(callBack) {
    request('https://hotel-web-api.herokuapp.com/clients?nom', { json: true }, function(err, res, data) {

        callBack(data);
    });
}

function ajouterClient(nom, prenom) {

    request.post('https://hotel-web-api.herokuapp.com/clients?nom', {
            json: {
                "nom": nom,
                "prenoms": prenom
            }
        },
        (error, res, body) => {
            if (error) {
                console.error(error)
                return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log(body)
        });

}

function chercherNom(nom, callBack) {
    request('https://hotel-web-api.herokuapp.com/clients?nom' + nom, { json: true }, function(err, res, data) {

        callBack(data);
    });
}

exports.ajouterClient = ajouterClient;
exports.listerClients = listerClients;
exports.chercherNom = chercherNom;