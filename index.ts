import * as readline from "readline";
import colorText, { consoleColors } from "./src/colorText";
import jsonCorrector from "./src/jsonCorrector";
import typeCreater from "./src/typeCreater";

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

rl.addListener("resume", () =>
  console.log(colorText("Enter JSON:", consoleColors.yellow))
);

export const index = () => {
  // [ SINGLE LINE INPUT ]
  // rl.question(
  //   colorText("Enter JSON:", consoleColors.yellow) + "\n",
  //   (answer) => {
  //     if (answer === "exit" || answer === "") rl.close();
  //     else {
  //       console.log(
  //         "\n" +
  //           colorText(
  //             "----------------------RESULT----------------------",
  //             consoleColors.BGcyan
  //           ) +
  //           "\n" +
  //           colorText(typeCreater(jsonCorrector(answer)), consoleColors.cyan) +
  //           "\n\n"
  //       );
  //       index();
  //     }
  //   }
  // );

  // [ MULTI LINE INPUT ]
  var input_json = "";

  console.log(colorText("Enter JSON:", consoleColors.yellow));

  rl.on("line", (line) => {
    if (input_json === "exit") rl.close();
    if (line.trim() === "") {
      main();
      input_json = "";
    } else input_json += " " + line.trim();
  });

  const main = () => {
    rl.pause();
    console.log(
      "\n" +
        colorText(
          "----------------------RESULT----------------------",
          consoleColors.BGcyan
        ) +
        "\n" +
        colorText(typeCreater(jsonCorrector(input_json)), consoleColors.cyan) +
        "\n\n"
    );
    rl.resume();
  };
};

index();
