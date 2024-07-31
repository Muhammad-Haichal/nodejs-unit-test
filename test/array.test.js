const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
  "watermelon",
];

test("the shopping list has watermelon on it", () => {
  expect(shoppingList).toContain("watermelon");
});
