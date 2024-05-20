const calculo_salario_liquido = require("./calculo_salario_liquido");
const calculo_inss = require("./calculo_inss");
const calculo_imposto_renda = require("./calculo_imposto_renda");

const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Nome do funcionário: ", (name) => {
  input.question("CPF do funcionário: ", (cpf) => {
    input.question("informe o mês do pagamento: ", (mes) => {
      input.question("Informe o salário bruto: ", (salario_bruto) => {
        const salario_liquido = calculo_salario_liquido(salario_bruto);
        const INSS = calculo_inss(salario_bruto);
        const IR = calculo_imposto_renda(salario_bruto);
        const salario = Number(salario_bruto);

        const holerite = {
          nome_funcionario: name,
          cfp_funcionario: cpf,
          mes_referencia: mes,
          salario_bruto: salario.toFixed(2),
          INSS: INSS,
          IR: IR,
          salario_liquido: salario_liquido,
        };

        console.log(`\n \n------- Folha de Pagamento  mês: ${holerite.mes_referencia}/2024 ----------\n
        Nome: ${holerite.nome_funcionario} \n
        CPF: ${holerite.cfp_funcionario}\n
        Salário Bruto: R$ ${holerite.salario_bruto}\n
        INSS: R$ ${holerite.INSS}\n
        Imposto de Renda: R$ ${holerite.IR}\n
        Salário Líquido: R$ ${holerite.salario_liquido}
        `);

        input.close();
      });
    });
  });
});
