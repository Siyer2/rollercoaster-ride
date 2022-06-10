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

    // Ensure that age is actually a number OR if it is a number, it's less than 120
    if (isNaN(age) || age > 120) {
      console.log(
        "Hey! This is not a number OR this number is WAY too big to be true!"
      );
    } else {
      if (age < 18) {
        console.log("You cannot be here");
      } else {
        console.log("Enjoy the ride!");
      }
    }
  });

  //==== End coding here ====//
}

//==== Don't change this ====//
main();
