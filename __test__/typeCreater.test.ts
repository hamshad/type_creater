import typeCreater from "../src/typeCreater";

test("typeCreater", () => {
  const data = `{
  "_id": "65ebf7c7be9e54621d45923e",
  "isApproved": true,
  "status": "active",
  "userId": {
    "_id": "65ebf7c6be9e54621d459231",
    "avatar": "https://ui-avatars.com/api/?name=Mohammad Faizan+Shaikh&&color=fff&&background=98b8e1&&rounded=true&&font-size=0.44",
    "email": "mohammad.faizan@mokshasolutions.com",
    "firstName": "Mohammad Faizan",
    "id": "65ebf7c6be9e54621d459231",
    "lastName": "Shaikh"
  },
  "userRole": "companyAdmin"
}`;
  expect(typeCreater(data)).toBeDefined();
  expect(typeCreater("Hello World")).toBe("string");
  expect(typeCreater("Hello World")).not.toBe("number");
  expect(typeCreater(24)).toBe("number");
  expect(typeCreater(24)).not.toBe("string");
});
