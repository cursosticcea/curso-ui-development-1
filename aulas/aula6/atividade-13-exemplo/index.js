function calcular(numero1, numero2, OPERACAO) {
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    resultado = 0;

    if (OPERACAO == 'ADICAO') {
        resultado = (numero1 + numero2);
    } else if (OPERACAO == 'SUBTRACAO') {
        resultado = (numero1 - numero2);
    } else if (OPERACAO == 'MULTIPLICACAO') {
        resultado = (numero1 * numero2);
    } else if (OPERACAO == 'DIVISAO') {
        resultado = (numero1 / numero2);
    }
    return resultado;
}

function btnCalcular() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var operacao = document.getElementById("operacao").value;


    if (operacao === "Selecione") {
        alert("Informe uma operação");
        return;
    }
    document.getElementById("resultado").innerHTML = "Resultado: " + calcular(numero1, numero2, operacao);
}