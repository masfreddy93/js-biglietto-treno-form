// creo gli elementi di input in html --> bottone, kmDaPercorrere, eta --> ok
// dichiaro la variabile kmDaPercorrere
const kmDaPercorrere = document.querySelector('input[name="kmDaPercorrere"]');
// dichiaro la variabile eta 
const etaPasseggero = document.querySelector('select[name="eta"]')
console.log(etaPasseggero)
// dichiaro la variabile bottone 
const buttonElement = document.querySelector('input[type="submit"]');
console.log(buttonElement.value);

//aggiungo l'evento 'click' al bottone; dichiaro prezzoBase e lo calcolo all'interno dell'evento

// buttonElement.addEventListener('click', function () {
//     const prezzoBase = parseFloat(kmDaPercorrere.value) * 0.21;
    
//     console.log(prezzoBase);
// })

//dichiaro variabile prezzoFinale e aggiugno condizioni età (esercizio di ieri)

//lego opzioni del select a variabile js

const minorenne = document.querySelector('option[value="option1"]')
const maggiorenne = document.querySelector('option[value="option2"]')
const over65 = document.querySelector('option[value="option3"]')
console.log(minorenne.value, maggiorenne.value, over65.value)

let prezzoFinale;

// if (etaPasseggero == maggiorenne) {
//     prezzoFinale = prezzoBase;
//     } else if (etaPasseggero == minorenne) {
//         prezzoFinale = prezzoBase * 0.8;
//     } else {
//         prezzoFinale = prezzoBase * 0.6;
//     }


    buttonElement.addEventListener('click', function () {
        const prezzoBase = parseFloat(kmDaPercorrere.value) * 0.21;
        
        console.log(prezzoBase);


        if (maggiorenne.value) {
            prezzoFinale = prezzoBase;
            } else if (minorenne.value) {
                prezzoFinale = prezzoBase * 0.8;
            } else {
                prezzoFinale = prezzoBase * 0.6;
            }

    })


console.log(prezzoFinale)