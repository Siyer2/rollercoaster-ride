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
  });

  //==== End coding here ====//
}

//==== Don't change this ====//
main();
