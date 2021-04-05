/*
11. Sabiendo que una cadena de texto contine parentesis. Crear un programa que devuelva la cadena que se encuentra entre los       parentesis.

```
input: 'Hola soy (koder)'
```
```
Output: 'koder'
```

function parenthesesWord(phrase) {

}
*/
/*
12. Crear una funcion que permita solicitar numeros al usuario por medio del prompt y no dejar de solicitarlos hasta que el usuario ya no dese ingresar más. Cáda numero debe ser ingresado a una colecion. **spoiler: Puede que les sirva el metodo confim()**

function myFunction() {
    var txt;
    var r = confirm(prompt("Press a button!\nEither OK or Cancel.\nThe button you pressed will be displayed in the result window."));
    if (r == true) {
        myFunction()

    } else {
        txt = "Has presionado Cancelar para salir";
    }
}
myFunction();
*/
/*
13. Realizar un programa que imprima una pritamide de 1 al 10 de la siguiente forma
```
1
22
333
4444
55555
666666
7777777
88888888
999999999
```

function pyramidNumbres(number) {
    var num = 0
    //var level = 0
    for (var i = 0; i < number; i++) {
        num++
        for (var j = 0; j < num; j++){
            document.write(num)
        }
        document.write("<br>")  
    }
}
pyramidNumbres(prompt('Proporciona el numero de niveles para la piramide'))
*/
/*
14. Realizar un program que imprima una piramida inversa.
```
55555
4444
333
22
1
```

function pyramidInverse ( number ) {
    var num = number
    for (var i = 0; i < number; i++) {
        for (var j = num; j > 0; j--) {
            document.write(num)
        }
        num--
        document.write("<br>")
    }
}
pyramidInverse(prompt('Proporciona el numero de niveles para la piramide'))
*/
/*
15. Teniendo un array de numeros. Determinar por cada elemnto si es multiplo de 4/3/5/2

```
input: [3,4,5,23,20,25,10]
```
```
Output:
Los numeros multiplos de 4 son : [numeros]
Los numeros multiplos de 3 son : [numeros]
Los numeros multiplos de 5 son : [numeros]
Los numeros multiplos de 2 son : [numeros]
```

function multipleNumbers () {
    let arr2, arr3, arr4, arr5 = []
    array = [3,4,5,23,20,25,10]
    const arr = array.map( item => {
        arr2.push( item )
        console.log( arr2 )
        if ( item%5 === 0 ) {
            arr5.push( item )
        } else if ( item%4 === 0 ){
            arr4.push( item )
        } else if ( item%3 === 0 ){
            arr3.push( item )
        } else if ( item%2 === 0 ){
            arr2.push( item )
        }
        /*
        switch (true){
            case ( item%5 === 0 ): arr5.push( item ); break
            case ( item%4 === 0 ): arr4.push( item ); break
            case ( item%3 === 0 ): arr3.push( item ); break
            case ( item%2 === 0 ): arr2.push( item ); break
            default: arr.push( item ); 
        }
        */
       /*
       return arr

    })
    console.log( 'Los numeros multiplos de 5 son : [' + arr5 + ']' )
    console.log( 'Los numeros multiplos de 4 son : [' + arr4 + ']' )
    console.log( 'Los numeros multiplos de 3 son : [' + arr3 + ']' )
    console.log( 'Los numeros multiplos de 2 son : [' + arr2 + ']' )
}
multipleNumbers()
*/
/*
16. Solicitar al usuario un nombre por medio del prompt e ingresarlo a una colección, validando que nose repita ningún nombre.
*/
function namesArray ( name ) {
    array = name
    let arrayNames = array.map( item => {
        if ( item !== name ){
            return arrayNames.push( item )
        }
    })
    console.log(arrayNames)
}
namesArray(prompt('Proporciona un nombre para agregarlo al arreglo'))
/*
17. Solicitar al usuario por medio del prompt una serie de numeros saparados por algun caracter y que cada numero se agregue a una colección
*/
/*
18. Solicitar al usuario por medio del prompt nombres de frutas y guardarlas en una colección. Además solicitar al usuario
    un nombre usuario para poder eliminarlo del array.
*/