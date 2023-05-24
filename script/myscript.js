/**
 * 
 * *L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
 * *Ogni cella ha un numero progressivo, da 1 a 100. 
 * *Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
 * *Quando l'utente clicca su ogni cella, 
 * *la cella cliccata si colora di azzurro ed emetto un messaggio in console 
 * *con il numero della cella cliccata.
 * 
 */



/**
 * 
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati 
- abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba 
o quando raggiunge il numero massimo possibile di numeri consentiti 
(ovvero quando ha rivelato tutte le celle che non sono bombe).
 * 
 */



const bottone = document.querySelector("#play");

bottone.addEventListener("click", function(){
    Game();
});

function Game(){
    let startGame = "";
    
    griglia = document.querySelector(".griglia");

    griglia.innerHTML = startGame;

    console.log(  Bombs(5) );

    let arraybombe = Bombs(5);

    for(let i = 0; i < 100; i++){
        let numero = i+1;
        let cella = CreateElement("div", "cella");
        cella.append(numero);

        cella.addEventListener("click", 
        function(){

            let cellaAzzurra = CellColor(cella, "color-light-blue");
            console.log(cellaAzzurra);

            console.log("Hai cliccato il : " + cella.textContent);
        });
        
        griglia.appendChild(cella);
    }
    console.log();

}


/**
 * 
 * @param {*} tagName inserisci in tag che vuoi creare
 * @param {*} className inserisci la classe che vuoi aggiungere al tuo tag
 * @returns elemento tag con classe aggiunta
 */
function CreateElement(tagName, className){
    let elemento = document.createElement(tagName);
    elemento.classList.add(className);
    return elemento;
}


/**
 * 
 * @param {*} cell inserisci quale cella vuoi colorare
 * @param {*} className inserire la classe colorata che vuoi che la tua cella abbia
 * @returns 
 */
function CellColor(cell, className){
    let cellaColorata = cell.classList.toggle(className);
    return cellaColorata;
}


/**
 * 
 * @param {*} min numero minimo da inserire
 * @param {*} max numero massimo da inserire
 * @returns ritorna un numero randomico tra il minimo e il massimo
 */
function NumberRandom(min, max){
    let number = Math.floor((Math.random()*max) + min);
    return number;
}


/**
 * 
 * @param {*} numberBombs inserire numero di bombe che vuoi generare
 * @returns ritorna un array con numeri generati casualmente tra 1 e 100 con grandezza del numero di bombe chiesto prima
 */
function Bombs(numberBombs){
    let cellBomb = [];
    for(let i = 0; i < numberBombs; i++){
        cellBomb[i] = NumberRandom(1, 100);
         
    }
    return cellBomb;
}