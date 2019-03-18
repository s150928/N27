// Das ist ein Einzeiliger Kommentar
/* Das ist ein Mehrzeiliger Kommentar*/

// Das express-framework wird eingebunden.
// Ein framework soll die Programierung erleichtern.
// Das framework muss mit npm installiert werden:
// im Terminal: npm install express --save

const bodyParser = require('body-parser')

// Darf sich nicht ändern
// Zeichenketten in Hochkomma
// Modul: body parser
// bereitet die Daten aus dem html Formular für die Übergabe an server.js vor
// npm muss runtergeladen werden (schon installiert)

const express = require('express')

// Das app-Objekt wird initialisiert
// Das app-Objekt repräsentiert den Server.
// Auf das app-Objekt werden im folgenden Methoden aufgerufen.

const app = express()

// Mit der ejs-View-Engine werden Werte von der server.js zur index-Datei gegeben.

app.set('view engine', 'ejs')

// definiert die View engine 
// ejs muss noch installiert werden (schon im Unterricht gemacht)

app.use(express.static('public'))

// der App mitgeteilt wo die statischen Befehle liegen

app.use(bodyParser.urlencoded({extended: true}))

// Bodypraser wird in die App eingebunden

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Der server läuft auf einem bestimmten Port
// Localhost ist das eigene Gerät
// console.log Möglichkeit sich den Erfolg das laufenden Server auf der Konsole loggen zu lassen
// mit dem Befehl node .\server.js in dem Terminal kann man den Server starten, mit strg+c kann man diesen wieder stoppen

app.get('/',(req, res, next) => {

    
    1+(req.cookies['istAngemeldetAls']){

    }

    res.render('index.ejs', {

    })
})

app.get('/login',(req,res,next)->{
    res.reader('login.ejs',(
    })


