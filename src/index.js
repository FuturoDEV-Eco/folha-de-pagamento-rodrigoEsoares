const calculo_salario_liquido = require("./calculo_salario_liquido");
const calculo_inss = require("./calculo_inss");
const calculo_imposto_renda = require("./calculo_imposto_renda");

const readline = require("readline");
const PDFDocument = require("pdfkit");
const fs = require("fs");

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

        printScreen(holerite);

        input.question(
          `Deseja gerar um PDF com a folha de pagamento do funcionário: ${holerite.nome_funcionario} s/n? `,
          (value) => {
            const resposta = value.toLowerCase();
            if (resposta !== "s" && resposta !== "n") {
              console.log("Entrada inválida. Programa encerrado!");
              return;
            }
            if (resposta === "s") {
              printPDF(holerite);
            } else {
              console.log("Programa encerrado. Obrigado!");
            }
            input.close();
          }
        );
      });
    });
  });
});

function dataAtual(){
  const data = new Date()
  const dia = String(data.getDate()).padStart(2,'0')
  const mes = String(data.getMonth()+1).padStart(2,'0')
  const ano = data.getFullYear()
  return `${dia}/${mes}/${ano}`
}

function printScreen(holerite) {
  console.log(`\n ------- Folha de Pagamento  mês: ${holerite.mes_referencia}/2024 ----------\n
  Nome: ${holerite.nome_funcionario} \n
  CPF: ${holerite.cfp_funcionario}\n
  Salário Bruto: R$ ${holerite.salario_bruto}\n
  INSS: R$ ${holerite.INSS}\n
  Imposto de Renda: R$ ${holerite.IR}\n
  Salário Líquido: R$ ${holerite.salario_liquido}
  `);
}

function printPDF(holerite) {
 
  console.log("Gerando arquivo PDF...")
 
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("holerite.pdf"));
  doc.fontSize(14);
  doc.text("----- Folha de Pagamento ------")
  doc.text(`Mês: ${holerite.mes_referencia}`)
  doc.text(`Data:${dataAtual()} `)
  doc.text(`Funcionário: ${holerite.nome_funcionario}`)
  doc.text(`CPF: ${holerite.cfp_funcionario}`)
  doc.text("----- -----")
  doc.text(`Salário bruto: R$ ${holerite.salario_bruto}`)
  doc.text("----- -----")
  doc.text(`INSS: R$ ${holerite.INSS}`)
  doc.text(`Imposto de renda: R$ ${holerite.IR}`)
  doc.text("Outros descontos: R$ 0.00")
  doc.text("----- -----")
  doc.text(`Salário líquido: R$ ${holerite.salario_liquido}`)
 
  doc.end();
}
