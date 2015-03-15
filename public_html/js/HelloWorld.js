
// includiamo il modulo HTTP
var http = require('http');

// oggetto di tipo http.Server e che come parametro prende una funzione callback
//
// La callback sarà invocata dal motore V8 ogni volta che il server riceverà una
// richiesta e assumerà come parametri:
//      request: un oggetto della classe http.ServerRequest che rappresenta la richiesta HTTP e
//               dalla quale poter leggere eventuali parametri inviati in GET o POST, la querystring etc.
//      response: un’istanza della classe http.ServerResponse, utile per impostare il contenuto che
//                si vorrà inviare all’utente ed eventuali altre informazioni.
var server = http.createServer(function (req, res) {

    // impostiamo nell’header HTTP della risposta il codice HTTP 200 (OK) e il Content-Type di tipo “text/plain”.
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // alla funzione end passiamo la stringa da ritornare al client.
    res.end('Hello World!');
});


// Una volta definito il comportamento del nostro server web grazie alla callback possiamo
// finalmente metterlo in ascolto sfruttando la funzione listen passando numero di porta e
// ip dell’interfaccia di rete da utilizzare.
server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');


