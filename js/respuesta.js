function validar() {
  var numero = document.getElementById("numero").value;

  if (numero.trim() === '') {
    alert('Por favor, no dejes espacios en blanco en los campos.');
  } else {
    var resultado = 0;
    var mensaje = '';
    resultado = CalcularFactorial(numero);

    if (resultado === -1) {
      mensaje = "No se puede calcular el factorial de un número negativo";
    } else {
      mensaje = "El factorial de " + numero + " es igual a " + resultado;
    }

    alert(mensaje);
  }
}

function CalcularFactorial(num) {
  if (num <0) {
    return -1; //"No se puede calcular el factorial de un número negativo";
  } else if (num === 0 || num === 1) {
    return 1; //"El Factorial de " + num + " es igual a 1";
  } else {
    var resultadoFactorial = 1;
    for (var i=2; i<=num; i++) {
      resultadoFactorial *=i;
    }
    return resultadoFactorial; //"El factorial de " + num + " es igual a " + resultadoFactorial;
  }
}