# Klausur / Test 2 am 14.2.2020 um 9:10 Uhr

1. Fehler finden und auf Papier dokumentieren
2. Alles, was in T1/K1 relevant war 
3. selbst etwas ausprogrammieren (GUI oder server.js)
4. SQL. eventuell einen unbekannten SQL-Befehl anhand einer gegebenen Dokumentation selbst erstellen
5. if und else (auch verschachtelt) bitte auch die alten if-else-Sachen anschauen im Trainings-Ordner
6. Symmetrische und asymetrische Verschlüsselung erklären / gegeneinander abgrenzen. Den Sinn jeweils erklären. Die Implementation am Rechner kurz beschreiben.

## Beispiel für If-Else:

```javascript
// Wenn ein Schüler/in nicht volljährig ist, wird "Eintritt verweigert".

var darfHinein = "nein"
var alter = 18;

if (alter >= 18){
    darfHinein = "ja"
}

Console.Log("der Schüler/in darf hinein: " + darfHinein )

``` 

```javascript
// Wenn ein Schüler/in nicht volljährig ist, wird "Eintritt verweigert".

var darfHinein = ""
var alter = 18;

if (alter >= 18){
    darfHinein = "ja"
}else{
    darfHinein = "nein"
}

Console.Log("der Schüler/in darf hinein: " + darfHinein )

``` 

```javascript
// Wenn ein Schüler/in nicht volljährig ist, wird "Eintritt verweigert".

var darfHinein = true
var istVolljaehrig = true;

if (istVolljährig){
    darfHinein = true
    Console.Log("der Schüler/in darf hinein. " )

}else{
    darfHinein = false
    Console.Log("der Schüler/in darf nicht hinein. " )

}

``` 

```javascript
// Wenn ein Schüler/in nicht volljährig ist, wird "Eintritt verweigert".

// Schülerinnen zahlen 3€
// Schüler zahlen 4€

var darfHinein = true
var istVolljaehrig = true;
var geschlecht = "w"

if (istVolljährig){

    darfHinein = true
    if(geschlecht === "w"){
        Console.Log("der Schüler/in darf hinein. Preis: 3 Euro" )
    }else{
        Console.Log("der Schüler/in darf hinein. Preis: 4 Euro" )
    }

}else{
    darfHinein = false
    Console.Log("der Schüler/in darf nicht hinein. " )

}

``` 