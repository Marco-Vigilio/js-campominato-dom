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


    for(let i = 0; i < 100; i++){
        let numero = i+1;
        let cella = CreateElement("div", "cella");
        cella.append(numero);

        cella.addEventListener("click", 
        function(){

            let cellaColorata = CellColorBlue(cella);
            console.log("Hai cliccato il : " + cella.textContent);
        });
        
        griglia.appendChild(cella);
    }
    console.log();
    /*
    for(let i = 0; i < 5; i++){
    console.log(NumberRandom(1, 100));
    }
    */

    console.log(  Bombs(5) );
}



function CreateElement(tagName, className){
    let elemento = document.createElement(tagName);
    elemento.classList.add(className);
    return elemento;
}

function CellColorBlue(cell){
    let cellaColorata = cell.classList.toggle("colorato");
    return cellaColorata;
}

function NumberRandom(min, max){
    let number = Math.floor((Math.random()*max) + min);
    return number;
}

function Bombs(numberBombs){
    let cellBomb = [];
    for(let i = 0; i < numberBombs; i++){
        cellBomb[i] = NumberRandom(1, 100);
         
    }
    return cellBomb;
}