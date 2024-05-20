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

        const funcionario = {
          nome: name,
          cpf: cpf,
          mes: mes,
          salario_bruto: salario.toFixed(2),
          INSS: INSS,
          IR: IR,
          salario_liquido: salario_liquido,
        };

        console.log(`\n \n------- Folha de Pagamento  mês: ${funcionario.mes}/2024 ----------\n
        Nome: ${funcionario.nome} \n
        CPF: ${funcionario.cpf}\n
        Salário Bruto: R$ ${funcionario.salario_bruto}\n
        INSS: R$ ${funcionario.INSS}\n
        Imposto de Renda: R$ ${funcionario.IR}\n
        Salário Líquido: R$ ${funcionario.salario_liquido}
        `);

        input.close();
      });
    });
  });
});
