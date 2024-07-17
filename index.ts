import * as readline from "readline";
import typeCreater from "./src/typeCreater";
import colorText, { consoleColors } from "./src/colorText";

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const logo: any =
  "\n" +
  "  _                                         _            \n" +
  " | |                                       | |           \n" +
  " | |_ _   _ _ __   ___   ___ _ __ ___  __ _| |_ ___ _ __ \n" +
  " | __| | | | '_ \\ / _ \\ / __| '__/ _ \\/ _` | __/ _ \\ '__|\n" +
  " | |_| |_| | |_) |  __/| (__| | |  __/ (_| | ||  __/ |   \n" +
  "  \\__|\\__, | .__/ \\___| \\___|_|  \\___|\\__,_|\\__\\___|_|   \n" +
  "       __/ | |      ______                               \n" +
  "      |___/|_|     |______|                              \n\n";

console.log(colorText(logo, consoleColors.blue));

rl.addListener("close", () =>
  console.log(colorText("\n👋 Have a good day~", consoleColors.blue))
);

export const index = () => {
  rl.question(
    colorText("Enter JSON:", consoleColors.yellow) + "\n",
    (answer) => {
      if (answer === "exit" || answer === "") rl.close();
      else {
        console.log(
          "\n" +
            colorText(
              "----------------------RESULT----------------------",
              consoleColors.BGcyan
            ) +
            "\n" +
            colorText(typeCreater(correctJson(answer)), consoleColors.cyan) +
            "\n\n"
        );
        index();
      }
    }
  );
};

const correctJson = (invalidJson: string) => {
  let correctedJSON = invalidJson.replace(/'([^']+)'/g, '"$1"');
  correctedJSON = correctedJSON.replace(/(\w+):( |")/g, '"$1":$2');
  correctedJSON = correctedJSON.replace(/""/g, '"');
  // console.log(
  //   "\n" +
  //     colorText(
  //       "-------------------FORMATTED-JSON-------------------",
  //       consoleColors.BGwhite
  //     ) +
  //     "\n" +
  //   colorText(correctedJSON, consoleColors.yellow)
  // );
  return correctedJSON;
};

index();
