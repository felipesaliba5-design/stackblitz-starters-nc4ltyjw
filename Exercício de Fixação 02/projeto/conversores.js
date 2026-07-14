

class Conversor {

   celsiusParaFahrenheit(celsius) {
        let fahrenheit = (9 / 5) * celsius + 32;
        return fahrenheit;
      }

    quilometrosParaMilhas(quilometros){
        let Milhas = quilometros * 0.621371;
        return Milhas;  
      }

    minutosParaHoras(minutos){
        let minutos = horas / 60; 
        return minutos;
    }  
}

export { Conversor };