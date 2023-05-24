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
 * * Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
 * * Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
 * * perciò nell’array delle bombe non potranno esserci due numeri uguali.
 * In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati 
 * - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
 * Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
 * La partita termina quando il giocatore clicca su una bomba 
 * o quando raggiunge il numero massimo possibile di numeri consentiti 
 * (ovvero quando ha rivelato tutte le celle che non sono bombe).
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


    //let arraybombe = Bombs(3);
    //console.log(arraybombe);
    //console.log(arraybombe.length);

    
    for(let i = 0; i < 100; i++){
        //GENERO LE CELLE CON IL NUMERO
        let numero = i+1;
        let cella = CreateElement("div", "cella");
        cella.append(numero);

        
        //SE CLICCO COLORA LE CELLE
        cella.addEventListener("click", 
        function(){

            if(numero == arraybombe.find(isBomb)){
                //COLORO SOLO QUELLE PRESENTI NEL MIO ARRAY BOMBE DI ROSSO
                let cellaRossa = CellColor(cella, "color-red");
                console.log(cellaRossa);
                console.log("Hai cliccato il : " + cella.textContent + " è una bomba");
            }
            else{
                //COLORO TUTTE LE CELLE DI AZZURRO SE CLICCATE
                let cellaAzzurra = CellColor(cella, "color-light-blue");
                console.log(cellaAzzurra);
                console.log("Hai cliccato il : " + cella.textContent);
            }
            
        });
        

        //INSERISCE LE CELLE NELLA DIV GRIGLIA
        griglia.appendChild(cella);
    }
    
    /*
    for(let i = 0; i < arraybombe.length; i++){
        //GENERO LE CELLE CON IL NUMERO
        let numero = i+1;
        let cella = CreateElement("div", "cella");
        cella.append(numero);

        //FUNZIONE SE CLICCO COLORA LE CELLE DI ROSSO

        //let cellaRossa = CellColor(cella, "color-red");


        //FUNZIONE SE CLICCO COLORA LE CELLE
        cella.addEventListener("click", 
        function(){

            
            //COLORO TUTTE LE CELLE DI AZZURRO SE CLICCATE
            let cellaRossa = CellColor(cella, "color-red");
            console.log(cellaRossa);
            console.log("Hai cliccato il : " + cella.textContent + " è una bomba");
        });


        //INSERISCE LE CELLE NELLA DIV GRIGLIA
        griglia.appendChild(cella);
    }
    console.log();
    */
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

/*
function getRandomUniqueNumber( minNum, maxNum, elements ){
    const numbersList = [];

    if ( (maxNum - minNum) < elements ){
        return [];
    }

    while (numbersList.length < elements){
        const newRandomNumber = getRandomInt(minNum, maxNum);
        if (!numbersList.includes(newRandomNumber)){
            numbersList.push(newRandomNumber);
        }
    }

    return numbersList;
}

*/

/**
 * 
 * @param {*} numberBombs inserire numero di bombe che vuoi generare
 * @returns ritorna un array con numeri generati casualmente tra 1 e 100 con grandezza del numero di bombe chiesto prima
 */
function Bombs(numberBombs){
    let cellBomb = [];

    while(cellBomb.length < numberBombs){
        let numRand = NumberRandom(1, 5);
        if(!cellBomb.includes(numRand)){
            cellBomb.push(numRand);
        }
    }
    return cellBomb;
}


//TROVA LE BOMBE NELLA MIA GRIGLIA
let arraybombe = Bombs(3);
console.log(arraybombe);


  function isBomb(bomb) {
    return bomb === 3;
  } 
  //console.log("La bomba sta nel : " + arraybombe.find(isBomb));



  function TrovaBombe(cellbomb) {
    let cell;
    for(let i = 0; i < 100; i++){
        cell = (i+1);
    }
    let bomba = cellbomb === cell;
    return bomba;
  }
  
  //console.log(arraybombe.find(TrovaBombe()));