function mostrarTexto() {
	document.getElementById("texto").style.display = 'block';
}

function ocultarTexto() {
	document.getElementById("texto").style.display = 'none';
}

function trocarCor() {
	document.getElementById("texto").style.color = 'red';
}

function trocarTexto() {
	var textoNovo = document.getElementById("textoInput").value;

	document.getElementById("texto").innerHTML = textoNovo;
}
