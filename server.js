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

// ...

app.use(express.static('public'))

// ...

const bodyParser = require('body-parser')

// ...

app.use(bodyParser.urlencoded({extended: true}))

// ...

const server = app.listen(process.env.PORT || 3000, () => {        console.log('Server lauscht auf Port %s', server.address().port)    })