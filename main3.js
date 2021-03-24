var lado = parseFloat(prompt('Proporciona el lado del cubo del que deseas conocer su peso en metros: '));

var material = parseInt(prompt('Proporciona el numero que corresponda al material en cuestion 1.-Acero, 2.-Cobre, 3.-Oro, 4.-Plata, 5.-Diamante, 6.-Otro'));

var volumen = lado * lado * lado ;

switch (material) {
  case 1: //Acero 7850 
    var kg = 7850 * volumen;
    alert('El peso del cubo proporcionado es : ' + kg +' kg');
  break;
  case 2: //Cobre 8940 
    var kg = 8940 * volumen;
    alert('El peso del cubo proporcionado es : ' + kg +' kg');
  break;
  case 3: //Oro 19300
    var kg = 19300 * volumen;
    alert('El peso del cubo proporcionado es : ' + kg +' kg');
  break;
  case 4: //Plata 10490
    var kg = 10490 * volumen;
    alert('El peso del cubo proporcionado es : ' + kg +' kg');
  break;
  case 5: //Diamante 3515
    var kg = 3515 * volumen;
    alert('El peso del cubo proporcionado es : ' + kg +' kg');
  break;
  default:
    alert('No tenemos ese material en la tabla')
}