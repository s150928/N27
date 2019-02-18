// Das ist ein Einzeiliger Kommentar
/* Das ist ein Mehrzeiliger Kommentar*/

// Das express-framework wird eingebunden.
// Ein framework soll die Programierung erleichtern.
// Das framework muss mit npm installiert werden:
// im Terminal: npm install express --save

const express = require('express')

// Das app-Objekt wird initialisiert
// Das spp-Objekt repräsentiert den Server.
// Auf das app-Objekt werden im folgenden Methoden aufgerufen.

const app = express()

// Mit der ejs-View-Engine werden Werte von der server.js zur index-Datei gegeben.

app.set('view engine', 'ejs')

// definiert die View engine 
// ejs muss noch installiert werden (schon im Unterricht gemacht)

app.use(express.static('public'))

// der App mitgeteilt wo die statischen Befehle liegen

const bodyParser = require('body-parser')

// Darf sich nicht ändern
// Zeichenketten in Hochkomma
// Modul: body parser
// bereitet die Daten aus dem html Formular für die Übergabe an server.js vor
// node pa

app.use(bodyParser.urlencoded({extended: true}))

// Bodypraser wird in die App eingebunden

const server = app.listen(process.env.PORT || 3000, () => {        console.log('Server lauscht auf Port %s', server.address().port)    })
