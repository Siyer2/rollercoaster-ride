import * as readline from "readline";
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Welcome to our Rollercoaster Ride. Before we begin, we need to check some details.\n\n"
);

// Ask first question
function question1() {
  return new Promise((resolve, _) => {
    rl.question("How old are you? ", (answer) => {
      const age = parseInt(answer);
      console.log(`You are ${age} years old.`);

      if (age < 18) {
        console.log("You cannot be here");
      } else {
        console.log("Enjoy the ride!");
      }

      resolve(answer);
    });
  });
}

//==== Don't change this ====//
const main = async () => {
  await question1();

  rl.close();
};
main();
