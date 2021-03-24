var peso = parseFloat(prompt('Proporciona tu peso en kg: '));
var altura = parseFloat(prompt('Proporciona tu altura en m: '));

var imc = ( peso / ( altura * altura ) ).toFixed(2);

if ( imc < 18.5 ) {
  alert('Tu indice de masa corporal es BAJO ya que es de : ' + imc);
} else if ( imc < 24.9 ) {
  alert('Tu indice de masa corporal es NORMAL ya que es de : ' + imc);
} else if ( imc < 29.9 ) {
  alert('Tu indice de masa corporal es ALTO ya que es de : ' + imc);
} else {
  alert('Tu indice de masa corporal marca OBESIDAD ya que es de : ' + imc);
}




