import colorText, { consoleColors } from "./colorText";

const jsonCorrector = (invalidJson: string) => {
  var correctedJSON = invalidJson;

  // Adding quotes around keys
  correctedJSON = correctedJSON.replace(/(\w+):( |"|')/g, '"$1":$2');
  // Single to double quotes
  // end quote
  correctedJSON = correctedJSON.replace(/'(?!\d|[\w\s])/g, '"');
  // start quote
  correctedJSON = correctedJSON.replace(/("[:,]\s*\[*)'/g, '$1"');
  // Removing repeated single quotes
  correctedJSON = correctedJSON.replace(/''/g, `'`);
  // Removing repeated double quotes
  correctedJSON = correctedJSON.replace(/""/g, '"');
  // Removing extra commas
  correctedJSON = correctedJSON.replace(/,\s*([\]}])/g, " $1");

  console.log(
    "\n" +
      colorText(
        "-------------------FORMATTED-JSON-------------------",
        consoleColors.BGwhite
      ) +
      "\n" +
      colorText(correctedJSON, consoleColors.yellow)
  );

  return correctedJSON;
};

export default jsonCorrector;
