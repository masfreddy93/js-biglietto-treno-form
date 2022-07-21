// creo gli elementi di input in html --> bottone, kmDaPercorrere, eta --> ok
// dichiaro la variabile kmDaPercorrere
let kmDaPercorrere = document.querySelector('input[name="kmDaPercorrere"]');
// dichiaro la variabile eta 
const etaPasseggero = document.querySelector('#etaPass')
// dichiaro la variabile bottone 
const buttonElement = document.querySelector('input[type="submit"]');
console.log(buttonElement.value);


//aggiungo l'evento 'click' al bottone; dichiaro prezzoBase e lo calcolo all'interno dell'evento
//dichiaro variabile prezzoFinale e aggiugno condizioni età (esercizio di ieri)
let prezzoFinale;

buttonElement.addEventListener('click', function () {

    const prezzoBase = parseFloat(kmDaPercorrere.value) * 0.21;

    if (!isNaN(kmDaPercorrere.value) && (kmDaPercorrere.value >= 1)) {

        console.log('Il prezzo base è ' + prezzoBase + '€');

            if (etaPasseggero.value == "option1") {
            prezzoFinale = prezzoBase * 0.8;
            } else if (etaPasseggero.value == "option2") {
                prezzoFinale = prezzoBase;
            } 
            else if (etaPasseggero.value == "option0") {
                alert('Seleziona una fascia d\'età valida');
            } 
            else {
                prezzoFinale = prezzoBase * 0.6;
           }
            console.log('Il prezzo finale è ' + prezzoFinale + '€');
    } else {
        console.log('Attenzione: Sono stati inseriti dei valori non corretti. Per favore, aggiornare la pagina e ripetere la procedura');
    }
})
