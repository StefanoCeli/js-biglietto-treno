var tariffa = 0.21;
var costo = km_utente * tariffa;
var percentuale = costo / 100;
var under = percentuale * 20;
var over = percentuale * 40;

var km_utente = parseInt(prompt('Inserisci i km da percorrere'));
if(isNaN(km_utente)){
    alert('inserisci un numero');
}
var eta_utente = parseInt(prompt('Inserisci la tua età'));
if(isNaN(eta_utente)){
    alert('inserisci un numero');
}

if(eta_utente <18){
    document.getElementById('biglietto').innerHTML = "Il prezzo del biglietto è di: " + costo.toFixed(2)  + "€" +" per te riservato con sconto del 20% a: " + (costo - under).toFixed(2) + "€";
}
else if (eta_utente >65){
    document.getElementById('biglietto').innerHTML = "Il prezzo del biglietto è di: " + costo.toFixed(2)  + "€"+" per te riservato con sconto del 40% a: " + (costo - over).toFixed(2) + "€";
}
else{
    document.getElementById('biglietto').innerHTML = "Il prezzo del biglietto è di: " + costo.toFixed(2)  + "€";
}
