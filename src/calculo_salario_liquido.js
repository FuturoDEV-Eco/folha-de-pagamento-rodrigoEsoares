const calculo_imposto_renda = require("./calculo_imposto_renda");
const calculo_inss = require("./calculo_inss");
function calculo_salario_liquido(salario_bruto) {
  const desconto_IR = Number(calculo_imposto_renda(salario_bruto));
  const desconto_INSS = Number(calculo_inss(salario_bruto));
  const salario_liquido = Number(salario_bruto - (desconto_IR + desconto_INSS));

  return salario_liquido.toFixed(2);
}


module.exports = calculo_salario_liquido;
