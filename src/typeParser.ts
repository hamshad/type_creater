import { types } from "./types";

const typeParser = (data: any): types => {
  if (isNIL(data)) return "any";
  if (RegExp(/^\d+$/).test(data)) return "number";
  if (typeof data === "string" && isBoolean(data)) return "boolean";
  return Array.isArray(data) ? "array" : typeof data;
};

const isBoolean = (data: string): boolean => {
  return data.trim() === "true" || data.trim() === "false";
};

const isNIL = (data: any) => {
  return typeof data === "undefined" || data === null || data === undefined;
};

export default typeParser;
