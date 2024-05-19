function calculo_imposto_renda(salario_bruto) {
  let deducao_IR = 0;

  if (salario_bruto <= 2112) {
    return deducao_IR;
  }
  if (salario_bruto <= 2826.65) {
    deducao_IR = salario_bruto * 0.075;
    return deducao_IR;
  }
  if (salario_bruto <= 3751.05) {
    deducao_IR = salario_bruto * 0.15;
    return deducao_IR;
  }
  if (salario_bruto <= 4664.68) {
    deducao_IR = salario_bruto * 0.225;
    return deducao_IR;
  } else {
    deducao_IR = salario_bruto * 0.275;
    return deducao_IR;
  }
}

module.exports = calculo_imposto_renda;
