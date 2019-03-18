/**
 * Hier können Sie IF und ELSE trainieren.
 * Am besten dazu den nodemon starten:
 * 
 *      .\node_modules\.bin\nodemon Training\if-else-training.js
 * 
 * Dann die Ausgabe im Terminal beobachten.
 */

// Deklaration und Initialisierung 
// Lies: "der Wert 0 wird zugewiesen an eine Variable namens x"
 let x = 0
 let y = 1

 if("GW11A".endsWith("A") || "GW11A".endsWith("B") || "GW11A".startsWith("GT")){
    console.log("Die Prüfung ist WAHR. Es werden die Anweisungen im Rumpf von IF ausgeführt")
 }else{
    console.log("Die Prüfung ist FALSCH. Es werden die Anweisungen im Rumpf von ELSE ausgeführt")
 }

 // FÄLLE: 

 // 22. if()

 // 21. if("GW11A".endsWith("A"))   Der Ausdruck ist WAHR. Die Funktion prüft, ob eine Zeichenkette mit einer anderen Zeichenkette endet.

 // 20. if("GW11A".includes("11"))  Der Ausdruck ist WAHR. Die Funktion prüft, ob eine Zeichenkette mit einer andere Zeichenkette enthält.

 // 19. if("GW11A".startsWith("G")) Der Ausdruck ist WAHR. Die Funktion prüft, ob eine Zeichenkette mit einer anderen Zeichenkette beginnt.

 // 18. if("Text".length === 4)     Der Ausdruck ist WAHR. Die Eigenschaft .length gibt die Anzahl der Zeichen einer Zeichenkette zurück.

 // 17. if(undefined)               Der Ausdruck ist FALSCH. Ein Objekt ist "undefinded", wenn sie nicht existiert.

 // 16. if(1 > 2 || 1 == 1)         Der Ausdruck ist WAHR, weil mindestens eine Prüfung WAHR ist.

 // 15. if(1 > 2 && 1 == 1)         Der Ausdruck ist FALSCH, weil die erste Prüfung FALSCH ist.
 //                 Alle mit && verketteten Prüfungen müssen WAHR sein, damit die Prüfung insgesamt WAHR wird.

 // 14. if(false)                   Der Ausdruck ist FALSCH.

 // 13. if(true)                    Der Ausdruck ist WAHR.

 // 12. if(0)                       Die Zahl 0 ist FALSCH.

 // 11. if(69)                      Zahlen sind WAHR, außer 0.

 // 10. if("")                      leere Zeichenketten in Javascript sind FALSCH

 // 9. if("Text")                   nicht leere Zeichenketten in Javascript sind WAHR.

 // 8. if(1 != 0)                   Vergleichsoperator: "ungleich"          Der Ausdruck ist WAHR.

 // 7. if(1 <= 1)                   Vergleichsoperator: "kleiner gleich"    Der Ausdruck ist WAHR.

 // 6. if(1 >= 1)                   Vergleichsoperator: "größer gleich"     Der Ausdruck ist WAHR.

 // 5. if(1 === "1")                Vergeleichsoperator: "gleich"           Der Ausdruck ist FALSCH.
 //                 Das 3fache "===" prüft auf Gleichheit des Wertes und des Typs.
 //                 "1" :   Stringn / Zechenkette
 //                 1   :   Zahl

 // 4. if(1 == "1")                 Vergleichsoperator: "gleich"            Der Ausdruck ist WAHR.
 //                 Das Doppelte "==" prüft auf Gleichheit des Wertes,
 //                 aber nicht auf Gleichheit des Typs.

 // 3. if(0 == 1)                   Vergleichsoperator: "gleich"            Der Ausdruck ist FALSCH.

 // 2. if(0 > 1)                    Vergleichsoperator: "größer als"        Der Ausdruck ist FALSCH.

 // 1. if(0 < 1)                    Vergleichsoperator: "kleiner als"       Der Ausdruck ist WAHR.