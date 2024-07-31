let umur = 18;


test("cek angka lebih dari 17", () => {
  expect(umur).toBeGreaterThan(17);
});

test("cek angka lebih atau sama dengan", () => {
  expect(umur).toBeGreaterThanOrEqual(18);
});

test("cek angka kurang dari", () => {
  expect(umur).toBeLessThan(18);
});

test("cek angka kurang dari atau sama dengan", () => {
  expect(umur).toBeLessThanOrEqual(17);
});
