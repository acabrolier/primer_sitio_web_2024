function sumar() {
    let valor1 = document.getElementById('num1').value;
    let valor2 = document.getElementById('num2').value;

    try {
        if (valor1 === '' || valor2 === '') throw "Debes ingresar todos los valores solicitados";
        if (isNaN(valor1) || isNaN(valor1)) throw "Debes ingresar solo valores númericos"

        let resultado = Number(valor1) + Number(valor2);

        document.getElementById('resultado').innerHTML = resultado;
    }
    catch (error) {
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = error;
    }

}
function restar() {
    let valor1 = document.getElementById('num1').value;
    let valor2 = document.getElementById('num2').value;
    try {
        if (valor1 === '' || valor2 === '') throw "Debes ingresar todos los valores solicitados";
        if (isNaN(valor1) || isNaN(valor1)) throw "Debes ingresar solo valores númericos"

        let resultado = Number(valor1) - Number(valor2);

        document.getElementById('resultado').innerHTML = resultado;
    }
    catch (error) {
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = error;
    }
}
function multiplicar() {
    let valor1 = document.getElementById('num1').value;
    let valor2 = document.getElementById('num2').value;
    try {
        if (valor1 === '' || valor2 === '') throw "Debes ingresar todos los valores solicitados";
        if (isNaN(valor1) || isNaN(valor1)) throw "Debes ingresar solo valores númericos"

        let resultado = Number(valor1) * Number(valor2);

        document.getElementById('resultado').innerHTML = resultado;
    }
    catch (error) {
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = error;
    }
}
function dividir() {
    let valor1 = document.getElementById('num1').value;
    let valor2 = document.getElementById('num2').value;
    try {
        if (valor1 === '' || valor2 === '') throw "Debes ingresar todos los valores solicitados";
        if (isNaN(valor1) || isNaN(valor1)) throw "Debes ingresar solo valores númericos"
        if (valor2 == 0) throw "Error"

        let resultado = Number(valor1) / Number(valor2);

        document.getElementById('resultado').innerHTML = resultado;
    }
    catch (error) {
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = error;
    }
}
function limpiar() {
    document.getElementById('num1').value = 0;
    document.getElementById('num2').value = 0;
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('error').style.display = 'none';
}