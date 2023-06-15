let day = -1;

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}


var favoriteColor = prompt("What is your favorite color?");

switch (favoriteColor) {
  case "red":
    console.log("Red is a vibrant color!");
    break;
  case "blue":
    console.log("Blue is a calming color!");
    break;
  case "green":
    console.log("Green is a refreshing color!");
    break;
  default:
    console.log("That's a nice color too!");
    break;
}









// In this example, we prompt the user to enter their favorite color and store it in the favoriteColor variable. 
// The switch statement then checks the value of favoriteColor and executes the corresponding code block based on the value.

// If the user enters "red," it will print "Red is a vibrant color!" to the console. If the user enters "blue," it will print "Blue is a calming color!" If the user enters "green," it will print "Green is a refreshing color!" If the user enters any other color, it will print "That's a nice color too!"

// The break statements are used to exit the switch statement once a match is found, preventing it from executing the code blocks of subsequent cases.

// Note: This code assumes that it is being run in an environment that supports the console.log() function and provides a way to prompt the user for input.