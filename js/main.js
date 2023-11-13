//chiedere età e chilometri da percorrere
//calcolare il risultato sulla base delle informazioni date e su queste regole 1 prezzo definito dai km (0,21 al km) 2 20% per <18  3 40% >65 


//fase 1 chiedere info
let age = prompt("Inserisci qui l'età");
let km = prompt("Inserire qui i km che si vuole percorrere");

// fase 2 convertire i testi in numeri
age = parseInt(age);
km = parseInt(km);

// calcolare prezzo base biglietto seguendo regole fornite 
let ticketPrice = km * 0.21; 

// calcolare sconti in base all'età


