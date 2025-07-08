function calcular(expresion)
 {
  try {
    return eval(expresion);
  } catch {
    return "Error!";
  }
}

module.exports = { calcular };
