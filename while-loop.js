// A while loop in JavaScript is a way to repeat a block of code as long as a certain condition is true.

// Here's an explanation of the while loop using simple language for a 10-year-old:

// Imagine you have a toy robot that can do a dance. You want the robot to keep dancing until you say stop. 

// To make the robot dance, you need to use a while loop. Here's how it works:

// First, you need to set a condition. Let's say you have a variable called isDancing that is initially set to true.

// Then, you tell the robot to start dancing by saying "as long as isDancing is true, keep dancing."

// Inside the while loop, you put the instructions for the dance moves the robot should perform.

// After the robot finishes dancing one round of moves, it goes back to the beginning of the loop and checks the condition again. If isDancing is still true, it keeps dancing. But if you change the value of isDancing to false, the robot will stop dancing and move on to the next part of the program.


// Here's an example of a while loop in JavaScript that you can understand:
// print the Node. 0 to 9.
let i = 0;

while(i<=9){
    console.log(i);
    i++;
}
// Add first 10 natural numbers. 
i=0;
let sum=0;
 while(i<=10)
 {
    sum = sum + i;
    i++;
 }

 console.log(sum);

//  Another way to print first 10 natural numbers. 

let num = 10;
let total = (num*(num+1))/2;
console.log(total);


// While loop 

var isDancing = true;

while (isDancing) {
  console.log("Performing a dance move!");
  
  // More dance moves can go here!
  
  var stopDancing = prompt("Should the robot stop dancing? Enter 'yes' or 'no'.");
  
  if (stopDancing === "yes") {
    isDancing = false; // Changing the condition to false stops the loop.
  }
}

console.log("The dance is over!");


// In this example, the robot starts dancing and performs a dance move, which is logged to the console. Then it asks you if the robot should stop dancing by prompting you for input. If you enter "yes," the value of isDancing becomes false, and the while loop stops. The program then logs "The dance is over!" to the console.

// Remember, the while loop keeps repeating the dance moves as long as the condition (isDancing) is true. It's important to make sure the condition eventually becomes false; otherwise, the loop will keep running indefinitely!