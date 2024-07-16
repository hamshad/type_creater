import typeParser from "../src/typeParser";

test("typeParser", () => {
  expect(typeParser("hello")).toBe("string");
  expect(typeParser({ hello: "world" })).toBe("object");
  expect(typeParser([{ hello: "world" }, { hello: "Typescript" }])).toBe(
    "array"
  );
  expect(typeParser(2)).toBe("number");
  expect(typeParser(2.4)).toBe("number");
});
