
let express = require('express');
let app = express();


app.set('views', './views');
app.set('view engine', 'jade');
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: "Vous êtes bien sur la page d'accueil!" });
});
app.get('/about', function (req, res) {
    res.render('index', { title: 'Hey', message: "Vous êtes bien sur la page A propos!" });
});
app.listen(3000, function () {
    console.log('This is the port 3000!')
  })

