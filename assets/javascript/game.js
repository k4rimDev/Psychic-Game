//global variables

let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let winScore = 0;
let loseScore = 0;
let guesScore = 9;
let guesLetter = "";
let randomLetter;


function getRandomLetter(){
    let randomNumber = Math.floor(Math.random() * letters.length);
    randomLetter = letters[randomNumber];
}

// Random letter function
getRandomLetter();

function keyListener(event){


    // KeyListener function
    let key = event.key;
    console.log(key);
    guesLetter = key;
    if (key == randomLetter){
        alert("win")
        winScore ++;
        guesScore = 9;

        // Random letter function
        getRandomLetter();

    }else{
        guesScore --;
        console.log(guesScore)
        if (guesScore == 0){
            alert("Lose");
            loseScore ++;
            guesScore = 9;

            // Random letter function
            getRandomLetter();

        }
    }

    document.querySelector("#gues-score").innerHTML = guesScore;
    document.querySelector("#win-score").innerHTML = winScore;
    document.querySelector("#lose-score").innerHTML = loseScore;
    document.querySelector("#gues-far").innerHTML = guesLetter;

}

document.addEventListener('keydown', keyListener);


