import typeParser from "./typeParser";

const typeCreater = (data: any) => {
  try {
    var json_data = JSON.parse(data);
    return typeParser(json_data) === "object"
      ? obj2str(json_data)
      : typeParser(data);
  } catch (err) {
    console.log("[ERROR]", err);
    return typeParser(data);
  }
};

const obj2str = (data: any, recurse_num: number = 0) => {
  var keys: Array<string> = Object.keys(data);
  var str_value = "{\n";
  var indent = "  ";
  for (var l = 0; l < recurse_num; l++) {
    indent += "  ";
  }
  for (var i in keys) {
    var val_type = typeParser(data[keys[i]]);
    str_value += `${indent}${keys[i]}: ${
      val_type === "object" ? obj2str(data[keys[i]], recurse_num + 1) : val_type
    }\n`;
    if (Number(i) === keys.length - 1) {
      str_value += `${indent}[key: string]: any;\n${indent.slice(2)}}`;
    }
  }
  return str_value;
};

export default typeCreater;
