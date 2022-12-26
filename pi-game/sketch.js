//variables
let pies = [];
let plate;

let digitsDiv;
let digits='3.';
let piCounter = 0;

let pi;
let piShow='';

let gameOver = false;

function preload() {
    pi = loadStrings('one-million.txt')
}

function setup() {
    pi = pi.join('');
    //console.log(pi);
    createCanvas(800, 400);
    //object
    plate = new Plate(width/2, 50);
    digitsDiv = createDiv(digits);
    digitsDiv.style('font-size','64pt');

    piShow=pi.substring(0,2);
}

function draw() {

    if(gameOver){
        background(255,0,0);
        fill(255);
        textAlign(CENTER,CENTER);
        text("Game Over. \nGo and Enjoy some Pie! 🥧",width/2,height/2);
        return;
    }

    background(0);

    //PiShow
    textSize(48);
    fill(0, 255, 0);
    text(piShow.charAt(0), width - 64, 50);
    text(piShow.charAt(1), width - 32, 50);

    //random number between 0 and 1 and only if less than 0.1 (10% of time), add a new pie
    if(random(1) < 0.04) {
        //object [populating pie in array pies]
        pies.push(new Pie(random(width),random(-100,-20)));
    }

    //show and update each pie of array pies
    for(let pie of pies){
        pie.show();
        pie.update();
    }

    //check if plate catches pie and score keeping
    for(let i=pies.length-1; i>=0; i--){
        if(plate.catches(pies[i])) {
            //catch the pie
            //check what digit was caught and deal with score
            let digit = pies[i].digit;

            let correctDigit = pi.charAt(piCounter);
            if(correctDigit == digit){
                console.log("PIE");
                digits += digit; //to diplsay on browser
                piCounter++;

                //piShow increment
                piShow = pi.substring(piCounter, piCounter+24);
            }else{
                console.log("NOT PIE");
                gameOver=true;
            }

            digitsDiv.html(digits);

            pies.splice(i,1); //Removes elements from an array

        } else if(pies[i].y > height + pies[i].r) {
            //eat the pie
            pies.splice(i,1); //Removes elements from an array
        }
    }

    //plot plate on canvas
    plate.x = mouseX;
    plate.show();

}

