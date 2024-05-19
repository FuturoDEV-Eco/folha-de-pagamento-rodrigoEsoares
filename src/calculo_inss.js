function calculo_inss(salario_bruto) {
  const teto_inss = 908.85;
  let desc_inss = 0;
  if (salario_bruto <= 0) {
    return desc_inss;
  }

  if (salario_bruto <= 1412) {
    desc_inss = salario_bruto * 0.075;
    return desc_inss.toFixed(2);
  }

  if (salario_bruto <= 2666.68) {
    desc_inss = salario_bruto * 0.09;
    return desc_inss.toFixed(2);
  }

  if (salario_bruto <= 4000.03) {
    desc_inss = salario_bruto * 0.12;
    return desc_inss.toFixed(2);
  }

  if (salario_bruto > 4000.03) {
    desc_inss = salario_bruto * 0.14;
    if (desc_inss <= teto_inss) {
      return desc_inss.toFixed(2);
    } else {
      return teto_inss.toFixed(2);
    }
  }
}

module.exports = calculo_inss

