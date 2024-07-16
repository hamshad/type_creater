const typeParser = (data: any) => {
  return Array.isArray(data) ? "array" : typeof data;
};

export default typeParser;
