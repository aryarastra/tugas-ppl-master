/*
    Gunakan file ini untuk membuat test case dengan Jest
*/
const {
  incrementQty,
  decrementQty,
  recalculateSubtotal,
  calculateDiscount,
} = require("../helpers");

test("hitung diskon dengan kode", () => {
  expect(calculateDiscount(250000, "Hello")).toBe(200000);
});
test("hitung diskon tanpa kode", () => {
  expect(calculateDiscount(200000, "")).toBe(200000);
});
test("Menghitung subtotal 4 barang seharga 20000 menjadi 80000", () => {
  expect(recalculateSubtotal(20000, 4)).toBe(80000);
});
