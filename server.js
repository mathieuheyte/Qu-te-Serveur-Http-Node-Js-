let http = require('http');
let express = require('express');
let app = express();
let port = 3000;

let server = http.createServer((request, response) => {
    response.end("Hello NodeJS !")
});

server.listen(port, (err) => {
    if (err)
        return console.log('something bad happened', err)
    console.log(`server is listening on ${port}`)
});
app.set('views', './views');
app.set('view engine', 'jade');
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: "Vous êtes bien sur la page d'accueil!" });
});
app.get('/about', function (req, res) {
    res.render('index', { title: 'Hey', message: "Vous êtes bien sur la page A propos!" });
});
app.listen(3000);