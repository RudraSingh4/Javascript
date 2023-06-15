// Imagine you have a jar of candies, and you want to count how many candies you have. To make it easier, you use a for loop. Here's how it works:

// First, you need to decide how many candies you want to count. Let's say you have 10 candies.

// Then, you need to set up a counter. Let's call it candyCount and set it to 0.

// Now, you tell yourself, "As long as candyCount is less than 10, I will keep counting candies."

// Inside the for loop, you increase the value of candyCount by 1 after each candy you count.

// The loop continues until candyCount becomes 10 (because when it reaches 10, it's not less than 10 anymore), and then you stop counting.

// Here's an example of a for loop in JavaScript that counts the candies:



var candyCount = 0;

for (var i = 1; i <= 10; i++) {
  console.log("Counting candy number " + i);
  
  // You can do more things with the candies here, like eating them!
}

console.log("Finished counting all the candies!");


// In this example, the for loop starts with i (the counter) set to 1. It continues as long as i is less than or equal to 10. After each iteration, i is increased by 1. Inside the loop, it logs the message "Counting candy number" followed by the current value of i to the console.

// The loop runs 10 times, counting each candy. Once i reaches 11, the condition becomes false, and the loop stops. Then, it logs "Finished counting all the candies!" to the console.

// Remember, the for loop helps you repeat a block of code a specific number of times. It uses a counter to keep track of how many times the loop has run.

