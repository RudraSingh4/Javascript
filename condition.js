// let age= 14;
// if (age>=14){
//     alert("You can Vote!");
//     alert("hey")
// }

let age1 = 19;
if(age1>18){
    console.log("User can play");
} else {
    console.log("user can play Mario");
}

let num = 14;
if (num%2===0){
    console.log("even");
}else{
    console.log("Odd");
}

// Falsy Value
let firstname = "Rudra";

if(firstname){
    console.log(firstname);
}else{
    console.log("firstname is Kinda empty")
}


  //nested if else

//   winning number 19

//   19 your guess is right
//   17 too low
//   20 too high

let winningNumber = 19;
let userGuess = prompt("Guess a number");

if (userGuess == winningNumber){
    console.log("Your guess is right!!");
}else{
    // console.log("Your guess is wrong!!")
    if(userGuess < winningNumber){
        console.log("too low!!!");
    }else{
        console.log("too high !!!");
    }
}

//else if

let tempInDegree = 15;

if(tempInDegree < 0){
    console.log("extreamly cold outisde");
}else if(tempInDegree < 16){
    console.log("It is Cold outside");
}else if(tempInDegree < 25){
    console.log("wheather is okay");
}else if (tempInDegree < 35){
    console.log("lets go for swim");
}else if (tempInDegree < 45){
    console.log("turn on AC");
}else{
    console.log("too hot!!");
}
