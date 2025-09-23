const { sum } = require("../Components/sum");

test("should return sum of two numbers", () => {
  const result = sum(3, 7);
  expect(result).toBe(10);
});
