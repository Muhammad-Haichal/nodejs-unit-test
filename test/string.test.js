let nama = "Muhammad Haichal";

test("there is no I in nama", () => {
  expect(nama).not.toMatch(/i/);
});

test("there is no I in nama", () => {
  expect(nama).toMatch(/I/);
});

test('but there is a "Hai" in nama', () => {
  expect(nama).toMatch(/Hai/);
});
