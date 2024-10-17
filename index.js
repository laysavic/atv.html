function alertarPeso() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let imc = peso / (altura * altura);

    let resultado = document.getElementById('resultado').innerHTML = ('Seu IMc é:' + imc.toFixed(2));
}