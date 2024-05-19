function calculo_inss(salario_bruto) {
  const teto_INSS = 908.85;
  let desc_INSS = 0;
  if (salario_bruto <= 0) {
    return desc_INSS;
  }

  if (salario_bruto <= 1412) {
    desc_INSS = salario_bruto * 0.075;
    return desc_INSS.toFixed(2);
  }

  if (salario_bruto <= 2666.68) {
    desc_INSS = salario_bruto * 0.09;
    return desc_INSS.toFixed(2);
  }

  if (salario_bruto <= 4000.03) {
    desc_INSS = salario_bruto * 0.12;
    return desc_INSS.toFixed(2);
  }

  if (salario_bruto > 4000.03) {
    desc_INSS = salario_bruto * 0.14;
    if (desc_INSS <= teto_INSS) {
      return desc_INSS.toFixed(2);
    } else {
      return teto_INSS.toFixed(2);
    }
  }
}


module.exports = calculo_inss

