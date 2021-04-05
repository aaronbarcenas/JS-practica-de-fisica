/*
1. Dado un string de dos palabras realizar una función que devuelva la palabra más larga
```
input: 'Programación Javascript'
```
```
Output: 'Programación'
```


function longestWord ( word ) {
  word[0].length > word[1].length ? alert('La palabra mas grande es ' + word[0]) : alert('La palabra mas larga es: ' + word[1] )
  /*
  word.forEach( ( item, index ) => {

    item.length > lengthy ? lengthy = item.length : lengthy = lengthy
  });
  alert('La palabra mas larga tiene ' + lengthy )
  
  //word1.length > word2.length ? alert('La primera palabra es mas grande... ' + word1 ) : alert('La segunda palabra es mas grande... ' + word2 )
}

// longestWord(prompt('Proporciona la primera palabra: '), prompt('Proporciona la segunada palabra: '))
longestWord(phrase = prompt('Proporciona dos palabras para saber cual es mas grande...').split(' '))
*/


/*
2. Crear un programa que permita detectar si una frase finaliza con punto. Dicho programa debe estar
   encapsulada en una función y recibir el o los parametros necesarios.
   
```
frase: 'Hola soy una desarrollador FullStack.'
```
```
Output: 'Finalizó en punto'
```

```
frase: 'Hola soy una desarrollador FullStack'
```
```
Output: 'No finalizó en punto D:'
```


function endDot ( frase ) {
  frase.charAt(frase.length-1) === '.' ? alert('La frase termina en punto.') : alert('La frase no termina en punto')
}

endDot(prompt('Proporciona una frasepara saber si termina con punto...'))
*/

/*
3. Crear un programa que permita al usuario retornar el numero de coincidencias de una palabra en una frase que el mismo 
   usuario ingrese.

```
input:
palabra a buscar: 'Hola'
frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
```
```
OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'
```

function coincidenseWord ( word, frase ) {
  let contador = 0
  frase.forEach( item => {   //.filter ternario con nuñll y spanglish
    if( item === word ){
      contador = contador + 1
    }
    alert('Hay ' + contador + ' veces la parabra en la frase...')
  });
}
coincidenseWord( prompt('Proporciona una palabra a buscar: '), (fras = prompt('Proporciona una frase: ').split(" ")))
*/
/*
function getInitials ( name ) {
  const nameSplited = name.split(' ')
  console.log(nameSplited)
  let initials = ''
  nameSplited.forEach(element => {
    console.log(element.charAt(0))
    initials += element.charAt(0) + '.' 
  });
  alert(initials)
}

getInitials( prompt('Proporciona tu nombre: ') )
*/

//var hola = 'cual es el estilo de javascript'
//var th = hola.split(" ")
//cgdsffhfgghconsole.log(th) 
/*
4. Crear un programa que permita al usuario extraer una subacadena de una frase dada.

```
Inputs:
cadena a extraer: 'desarrollador'
frase: 'Soy un desarrollador FullStack'
```
```
Output: 'desarrollador'
```
*/
/*
function extractWord ( word, phrase ) {
  phrase.forEach( item => item === word ? alert('se extrajo la palabra: ' + word) : alert('No se encontro la palabra'));
}

extractWord( prompt('Proporciona una palabra para extraer de la frase'), prompt('Proporciona una frase').split(' '))
*/

/*
5. crear un programa que permita comparar dos palabaras das por el usuario y determinar si son iguales.
```
Inputs:
palabra1: 'Hola'
palabra2: 'Hola'
```
```
Output: 'Son iguales :D'
```
```
Inputs:
palabra1: 'Hola'
palabra2: 'Hi'
```
```
Output: 'Son iguales D:'
```
function compareTwoWords ( item ) {
  item[0] === item[1] ? alert( 'Las palabras son iguales.') : alert( 'Las dos palabras no son iguales.')
}
compareTwoWords( prompt('Proporciona dos palabras para saber si son iguales: ').split(' '))
*/
/*
7. Realizar un programa que permita a una cadena de texto convertirlo a Mayusculas.
```
Inputs:
frase: 'Hola soy desarrollador fullstack'
```
```
Output: 'HOLA SOY DESARROLLADOR FULLSTACK'
```

function phraseUppercase ( phrase ) {
  phraseUpper = phrase.toUpperCase()
  alert(phraseUpper)
  return phraseUpper
}
phraseUppercase( prompt( 'Proporciona una frase para convertir en mayusculas'))
*/

/*
8. Crear un programa que permita a una cadena de texto mostrar el sogno '-' entre cada caracter

```
Inputs:
cadena: 'Hola soy un desarrollador'
```
```
Output: 'H-o-la--soy--u-n--d-e-s-a-r-r-o-l-l-a-d-o-r'
```


function hyphenChar ( phrase ) {
  newPhrase = phrase.split("")
  const phraseHyphen = newPhrase.map( item => {
    let newPhrase = item + '-'
    return newPhrase
  })
  let phraseJoined = phraseHyphen.join()
  console.log(phraseJoined)
  
  let withOutComma = ""
  for(let i = 0; i < phraseJoined.length; i++) {
    withOutComma += phraseJoined.charAt(i).replace(",","")
  }
  console.log(withOutComma)
  alert(withOutComma)
  
}
hyphenChar(prompt( 'Proporciona una frase para poner guiones entre cada caracter:'))
*/

/*
9. Crear un programa que devuelva la cantidad de vocales que tenga una frase dada por el usuario.
```
Inputs:
cadena: 'Soy una desarrollador'
```
```
Output: 'La cadena tiene 8 vocales'
```


function quantyVowels ( phrase ) {
  let collector = 0
  
  for ( var i = 0; i < phrase.length; i++ ) {
    console.log(phrase.charAt(i))
    
    if( phrase.charAt(i) == (/[aeiou]/gi) ){
      collector++
      console.log(collector)
    }
  }
  alert('La frase contiene ' + collector + ' vocales')
  return collector
}
quantyVowels(prompt('Proporciona una frase para saber cuantas vocales tiene...'))
*/

/*
10. Crear un programa que permita devolver una cadena de texto de forma inversa a la que el usuario lo ingresa.
```
Inputs:
cadena: 'Hola
```
```
Output: 'aloH'
```


function reverseString ( phrase ) {
  console.log(phrase)
  reversePhrase = phrase.reverse()
  console.log(reversePhrase)
  joinedPhrase = reversePhrase.join(",")
  console.log(joinedPhrase)
  let withOutComma = ""
  for(let i = 0; i < joinedPhrase.length; i++) {
    withOutComma += joinedPhrase.charAt(i).replace(",","")
  }
  console.log(withOutComma)
  alert(withOutComma)
}

reverseString( prompt('Proporciona una frase para invertirla').split(""))
*/
