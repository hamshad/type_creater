import * as readline from "readline";
import typeParser from "./src/typeParser";
import typeCreater from "./src/typeCreater";

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const index = () => {
  rl.question("Enter JSON:\n", (answer) => {
    if (answer === "exit" || answer === "") rl.close();
    else {
      console.log(
        "\n-------------------RESULT----------------------\n",
        typeCreater(correctJson(answer)) + "\n\n"
      );
      index();
    }
  });
};

const correctJson = (invalidJson: string) => {
  let correctedJSON = invalidJson.replace(/'([^']+)'/g, '"$1"');
  correctedJSON = correctedJSON.replace(/(\w+): /g, '"$1": ');
  correctedJSON = correctedJSON.replace(/""/g, '"');
  console.log("\n-----FORMATTED-JSON------\n", correctedJSON);
  return correctedJSON;
};

index();
