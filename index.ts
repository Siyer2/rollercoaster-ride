import * as readline from "readline";
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  //==== Start coding here ====//

  const question1 =
    "Welcome to our Rollercoaster Ride. Before we begin, we need to check some details.\n\nHow old are you? ";

  rl.question(question1, (answer) => {
    rl.close();

    const age = parseInt(answer);
    console.log(`You are ${age} years old.`);

    // Ensure that age provided is a number and that they are not over 120
    if (isInvalidAge(age)) {
      console.log("BAD USER INPUT!");
      return;
    }

    if (age < 18) {
      console.log("You cannot be here");
    } else {
      console.log("Enjoy the ride!");
    }
  });

  //==== End coding here ====//
}

function isInvalidAge(userInput: number): boolean {
  if (isNaN(userInput) || userInput > 120 || userInput < 0) {
    return true;
  } else {
    return false;
  }
}

//==== Don't change this ====//
main();
