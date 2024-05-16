function calculo_inss(valor) {
  if (valor <= 0) {
    return 0;
  }

  if (valor > 0 && valor <= 1412) {
    const resultado = valor * 0.075;
    return resultado.toFixed(2);
  }

  if (valor <= 2666.68) {
    const resultado = valor * 0.09;
    return resultado.toFixed(2);
  }

  if (valor <= 4000.03) {
    const resultado = valor * 0.12;
    return resultado.toFixed(2);
  }

  if (valor > 4000.03) {
    const teto = 908.85;
    const resultado = valor * 0.14;
    if (resultado <= teto) {
      return resultado.toFixed(2);
    } else {
      return teto.toFixed(2);
    }
  }
}


