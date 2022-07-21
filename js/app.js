// creo gli elementi di input in html --> bottone, kmDaPercorrere, eta --> ok
// dichiaro la variabile kmDaPercorrere
const kmDaPercorrere = document.querySelector('input[name="kmDaPercorrere"]');
// dichiaro la variabile eta 
const etaPasseggero = document.querySelector('input[name="kmDaPercorrere"]')
// dichiaro la variabile bottone 
const buttonElement = document.querySelector('input[type="submit"]');
console.log(buttonElement.value);

//aggiungo l'evento 'click' al bottone; dichiaro prezzoBase e lo calcolo all'interno dell'evento

buttonElement.addEventListener('click', function () {
    const prezzoBase = parseFloat(kmDaPercorrere.value) * 0.21;
    
    console.log(prezzoBase);
})