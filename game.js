let sum = 0
let cardArray =[]
let hasblackjack = false
let isalive = false
let message = ""
let check = true
let amt = 100
let count = 0
document.getElementById("info1").textContent = "Current Amount:- " + amt;
function getrandomcard(){
    let m = Math.floor(Math.random()*13)+1
    if (m > 10){
        return 10
    }
    else if( m === 1){
        return 11
    }
    else{
        return m
    }
}
function rendergame(){
    
    let result = "Cards: "
    for (let i=0; i< cardArray.length;i++){
        result += cardArray[i]+" "
    }
    document.getElementById("sum").textContent = "Sum: " + sum;
    document.getElementById("card").textContent = result;

    if (sum < 21){
        message = "Do you want to draw a card?"
    }
    else if (sum === 21){
        message = "You,ve got BlackJack!"
        hasblackjack = true
        check = false
        amt += (count*10)*2 + 40
        document.getElementById("info1").textContent = "Current Amount:- " + amt;
    }
    else{
        message = "You're out of game!"
        isalive = false
        check = false
    }
    document.getElementById("message").textContent = message;
}
function newcard(){
    if(isalive === true && hasblackjack === false && check === true && amt != 0){
        let n = getrandomcard()
        sum += n
        cardArray.push(n)
        amt -= 10
        document.getElementById("info1").textContent = "Current Amount:- " + amt;
        rendergame()
    }
    else if (amt < 10){
        document.getElementById("error").textContent = "You have no sufficient coins!";
        setTimeout(function(){
            document.getElementById("error").textContent = "";
        },2000);
    }
    else{
        document.getElementById("error").textContent = "You cannot draw a new card!";
        setTimeout(function(){
            document.getElementById("error").textContent = "";
        },2000);

    }
}
function startgame(){
    if(isalive = true && check === true){
        let f= getrandomcard()
        let s = getrandomcard()
        sum = f + s
        cardArray.push(f)
        cardArray.push(s)
        amt -= 20
        count += 1
        document.getElementById("info1").textContent = "Current Amount:- " + amt;
        rendergame()
    }
    else if (amt < 20){
        document.getElementById("error").textContent = "You have no sufficient coins!";
        setTimeout(function(){
            document.getElementById("error").textContent = "";
        },2000);
    }
    else{
        document.getElementById("error").textContent = "You cannot start again, Click 'Play Another Round' or 'Quit'";
        setTimeout(function(){
        document.getElementById("error").textContent = "";
    },2000);
    
    }
}
function quit(){
    setTimeout(function(){
        window.location.replace("end_page.html")
    }, 1000);
} 
function playagain(){
    if (amt >= 20){
        document.getElementById("message").textContent = "Want to play a round?";
        sum = 0
        cardArray =[]
        hasblackjack = false
        isalive = false
        message = ""
        check = true
        count = 0
        rendergame()
    }
    else{
        document.getElementById("error").textContent = "You have no sufficient coins!";
        setTimeout(function(){
            document.getElementById("error").textContent = "";
        },2000);
    }
}
function display(){
    var name = document.getElementById("input_name").value;
    var coins = document.getElementById("input_coins").value;
    document.getElementById("para1").textContent = "!! Hello " + name + " !!";
    document.getElementById("para2").textContent = "You have initially " + coins + " coins";
    document.getElementById("para3").textContent = "For every round of game 20 coins and for drawing each new card 10 coins are deducted...If you won your invested coins will get doubled";
    setTimeout(function(){
        window.location.replace("game_page.html")
    }, 5000);
    document.getElementById("info1").textContent = "Name:- " + name; 
}
