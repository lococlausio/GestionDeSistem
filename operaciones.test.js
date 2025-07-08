const { calcular } = require('./operaciones');

describe("Calculadora – operaciones básicas", () => {
  test("sumar 2+3 = 5", () => {
    expect(calcular("2+3")).toBe(5);
  });

  test("restar 5-2 = 3", () => {
    expect(calcular("5-2")).toBe(3);
  });

  test("multiplicar 4*3 = 12", () => {
    expect(calcular("4*3")).toBe(12);
  });

  test("dividir 10/2 = 5", () => {
    expect(calcular("10/2")).toBe(5);
  });

  test("expresión inválida → ‘Error!’", () => {
    expect(calcular("2+*3")).toBe("Error!");
  });
});
