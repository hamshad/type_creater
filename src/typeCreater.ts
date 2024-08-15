import colorText, { consoleColors } from "./colorText";
import typeParser from "./typeParser";
import { types } from "./types";

const typeCreater = (data: any) => {
  try {
    var json_data = JSON.parse(data);
    return typeParser(json_data) === "object"
      ? obj2type(json_data)
      : typeParser(data);
  } catch (err) {
	  const isJsonRegex =/[{}\[\]:]/; 
    if (RegExp(isJsonRegex).test(data)) {
      console.log(
        colorText("\n[ERROR]", consoleColors.BGred),
        colorText("" + err, consoleColors.red)
      );
    }
    return typeParser(data);
  }
};

const obj2type = (data: any, recurse_num: number = 0) => {
  var keys: Array<string> = Object.keys(data);
  var str_value = "{\n";
  var indent = "  ";
  for (var l = 0; l < recurse_num; l++) {
    indent += "  ";
  }
  for (var i in keys) {
    var val_type: types = typeParser(data[keys[i]]);
    str_value += `${indent}${keys[i]}: ${
      val_type === "object"
        ? obj2type(data[keys[i]], recurse_num + 1)
        : val_type === "array"
        ? arr2type(data[keys[i]], recurse_num + 1)
        : val_type
    };\n`;
    if (Number(i) === keys.length - 1) {
      str_value += `${indent}[key: string]: any;\n${indent.slice(2)}}`;
    }
  }
  return str_value;
};

// i want to get type of all objects from array
// and replace the keys with any type to the its original type if exists
const arr2type = (data: Array<any>, recurse_num: number) => {
  return (
    data.length > 0
      ? typeParser(data[0]) === "object"
        ? obj2type(data[0], recurse_num)
        : typeParser(data[0])
      : "any"
  ).concat("[]");
};

export default typeCreater;
