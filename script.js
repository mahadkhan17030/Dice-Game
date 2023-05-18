let images = ['CSS/images/1.PNG','CSS/images/2.PNG','CSS/images/3.PNG','CSS/images/4.PNG','CSS/images/5.PNG','CSS/images/6.PNG'];
function roll(){
    let randomDice = Math.floor(Math.random() * images.length)
    let dice = document.getElementById('dice').src = images[randomDice];
    let p = document.querySelector('p')
    if(randomDice == 0){

        p.innerHTML = 'Score: 1'
    }
    else if(randomDice == 1){

        p.innerHTML = 'Score: 2'
    }
    else if(randomDice == 2){

        p.innerHTML = 'Score: 3'
    }
    else if(randomDice == 4){

        p.innerHTML = 'Score: 5'
    }
    else if(randomDice == 5){

        p.innerHTML = 'Score: 6'
    }
    
}
// dice.src = images[3]