const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'Training')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Eine KLasse ist ein Baupla. Der Bauplan sieht vor, wie Objekte erstellt werden. 
// Alle Objekte die von einem Bauplan erstellt werden, habene die selben Eigenschaften, aber 
// möglicherweise unterschiedliche Eigenschaftswerte.

// Klassendefinition
// =================

class Rechteck {
    constructor(){
        this.laenge
        this.breite
    }
}

// Klassendefinition für Schüler in einer Schule: 

class Schueler {
    constructor(){
        this.geschlecht
        this.klasse
        this.alter
        this.vorname
        this.nachname
    }
}


class Auto {
    constructor(){
        this.model
        this.baujahr
        this.leistung
        this.zustand
        this.preis
    }
}

// Deklaration eines neuen Objekts vom Typ Rechteck
// Deklaration = Bekanntmachung
// let rechteck = ...

// Instanziierung eines neuen Objekts
// Instanziierng erkennt man im reservierten Wort "new"
// Bei der Instanziierung wird Arbeitsspeicher bereitgestellt
// ... = new Rechteck()

// 1. Deklaration 2. Instanziierung 
let rechteck = new Rechteck()
let schueler = new Schueler()
let auto = new Auto()

// 3. Initianisierung (Konkrete Eigenschaftswerte werden zugewiesen)

rechteck.breite = 2
rechteck.laenge = 3

console.log("Länge:" + rechteck.laenge)
console.log("Breite:" + rechteck.breite)

schueler.geschlecht = "w"
schueler.alter = 17

auto.leistung = "250 ps"
auto.model = "Ford Mustang"
auto.baujahr = 1965
auto.zustand = "unfallfrei"
auto.preis = "35.000 €"

// Wenn localhost:3000/klasse-objekt-ejs-trainieren aufgerufen wird ...

app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', {     
        breite : rechteck.breite,    
        laenge : rechteck.laenge,    
        geschlecht : schueler.geschlecht,
        alter : schueler.alter,
        leistung : auto.leistung,
        model : auto.model,
        baujahr : auto.baujahr,
        zustand : auto.zustand,
        preis : auto.preis    

    })
})
