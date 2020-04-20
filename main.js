var numeroKilometri = prompt("Inserisci il numero di kilometri da percorrere");

var eta = prompt("Inserisci la tua età");

var prezzo = numeroKilometri * 0.21;

var sconto;

if (eta < 18) {
    sconto = (prezzo * 20) / 100;
    prezzo = prezzo - sconto;
    prezzo = prezzo.toFixed(2);
    document.getElementById('prezzoBiglietto').innerHTML = ('Dato che sei minorenne, il prezzo del biglietto è di ' + prezzo + ' euro');
}
else if (eta > 65) {
    sconto = (prezzo * 40) / 100;
    prezzo = prezzo - sconto;
    prezzo = prezzo.toFixed(2);
    document.getElementById('prezzoBiglietto').innerHTML = ('Dato che sei un over 65, il prezzo del biglietto è di ' + prezzo + ' euro');
}
else {
    prezzo = prezzo.toFixed(2);
    document.getElementById('prezzoBiglietto').innerHTML = ('Il prezzo del biglietto è di ' + prezzo + ' euro');
}
