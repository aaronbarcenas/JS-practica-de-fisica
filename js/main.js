var phrase = "La mejor manera de predecir el futuro es creandolo"
var stringLength = phrase.length
var spaces = 0
var wordA = 0
var newpar = ""
var newnon = ""
var new_phrase = ""

for ( var i = 0; i < stringLength; i++ ) {
  var character = phrase.charAt(i) 
  if ( character === " " ) {
    spaces = spaces + 1
  }
  var words = spaces + 1
  if ( character == "a" || character == "á" || character == "A" || character == "Á") {
    wordA = wordA + 1
    
  }
  if ( i % 2 == 0) {
    newpar += phrase.charAt(i)
    
  } else {
    newnon += phrase.charAt(i)
    
  }


  
}
console.log('La cantidad de palabras es : ' + words )
console.log('La cantidad de letras a es : ' + wordA )
console.log(newpar)
console.log(newnon)



/*
if ( character == "a" ) {
  var worda = worda + 1
  console.log('La cantidad de letras a es : ' + worda)
} if ( character % 2 == 0) {
  var newpar = character
  console.log(newpar)
} else {
  var newnon = character
  console.log(newnon)
}

*/

var limite = parseInt(prompt('Cuantas vees deseas escribir el nombre del koder'));
var name = prompt('Proporciona el nombre que deseas enlistar');

function printName (lim, nam) {
  for(let i; i<=lim; i++) {
    console.log(nam)
  }
}

printName(limite, name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        )