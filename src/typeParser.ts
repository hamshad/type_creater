const typeParser = (data: any) => {
  if (RegExp(/^\d+$/).test(data)) return "number";
  return Array.isArray(data) ? "array" : typeof data;
};

export default typeParser;
