// Escreva um programa que calcule a soma de dois números e exiba o resultado no console.


function somar() {
    let numero1 = parseFloat (document.getElementById("numero1").value)
    let numero2 = parseFloat (document.getElementById("numero2").value)
    
    let resultado = numero1 + numero2;
    document.getElementById("resultado").innerHTML = "O resultado da soma é: " + resultado;
}
