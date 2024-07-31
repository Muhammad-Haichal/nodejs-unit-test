import sum from "../src/sum.js";

test("sum harus bernilai 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
