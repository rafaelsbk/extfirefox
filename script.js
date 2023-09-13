document.getElementById("botaoSomar").addEventListener("click", soma);

function soma() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var resultado = parseInt(n1) + parseInt(n2);
    document.getElementById("resultado").innerHTML = resultado;
}