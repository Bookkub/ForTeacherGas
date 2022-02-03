let number = ((Math.floor(Math.random()*100)+1));
let high =100;
let low = 0;
while(true)
{   
    let Guess = prompt("Guess number between " + low + " and " + high);
    Guess = parseInt(Guess);
    if(number > Guess  && Guess > low)
    {
        low = Guess;
    }
    else if(number < Guess && Guess < high)
    {
        high = Guess;
    }
    if(number === Guess)
    {
        alert("You win! The number is : " + number);
        number = ((Math.floor(Math.random()*100)+1));
        high =100;
        low = 0;
    }
    if(Guess < low || Guess > high)
    {
        alert("You lose! The Number is : " + number);
        number = ((Math.floor(Math.random()*100)+1));
        high =100;
        low = 0;
    }
}