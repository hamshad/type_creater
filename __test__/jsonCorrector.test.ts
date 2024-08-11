import jsonCorrector from "../src/jsonCorrector";

test("jsonCorrector", () => {
  const data = `{ data: 'hello', name: 'typescript's father isn't a javascript, instead I don't even care and you shouldn't too. If you do than you're time is being wasted', }`;
  expect(jsonCorrector(data)).toBe(
    `{ "data": "hello", "name": "typescript's father isn't a javascript, instead I don't even care and you shouldn't too. If you do than you're time is being wasted" }`
  );
  expect(jsonCorrector("{greet: 'good', greets: ['morning', 'afternoon', 'evening', 'night']}")).toBe(
    `{"greet": "good", "greets": ["morning", "afternoon", "evening", "night"]}`
  );
});
