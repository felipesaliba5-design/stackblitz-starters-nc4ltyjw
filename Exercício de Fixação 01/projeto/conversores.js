

function celsiusParaFahrenheit(celsius) {
    let fahrenheit = (9 / 5) * celsius + 32;
    return fahrenheit;
  }

function horasParaMinutos(horas) {
    let minutos = horas * 60; 
    return minutos;
}







  module.exports = { celsiusParaFahrenheit,horasParaMinutos
  };