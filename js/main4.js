var kodersList = [
  [
      "Fernanda",
      "Palacios Vera"
  ],
  [
      "Jorge",
      "Ochoa"
  ],
  [
      "Naomi",
      "Puertos"
  ],
  [
      "Rurick",
      "Maqueo Poissot"
  ]
]
/*
  -crear un nuevo array que contenga los nombres completos de todos los koders de kodersList
*/

var newArray = []

const createNewArray = ()  => {
  for ( var i = 0; i < 4; i++){
    newArray.push( kodersList[i].join(" "))
  }
  return newArray
}

var joinedNames = createNewArray()

console.log( joinedNames )

/* Ingresar un nombre validar si existe algun koder cuyo primer nombre coincida con el nombre escrito */


const checkName = name => {
  for ( i = 0; i < joinedNames.length; i++){
    let firstName = joinedNames[i].split(" ")[0]
    console.log( firstName )
    firstName === name && console.log(' El nombre existe')
  }
}

checkName( "Rurick" )

var productsList = [
  {
      name:"producto 1",
      price:12.45,
      category:"Miscellaneous"
  },
  {
      name:"producto 2",
      price:25.13,
      category:"Vegetables"
  },
  {
      name:"producto 3",
      price:45.00,
      category:"Cloths"
  },
  {
      name:"producto 4",
      price:12500.00,
      category:"Computers"
  },
  {
      name:"producto 5",
      price:15500.00,
      category:"Computers"
  },
  {
      name:"producto 6",
      price:8729.00,
      category:"Computers"
  },{
      name:"producto 7",
      price:150.00,
      category:"Cloths"
  },{
      name:"producto 8",
      price:100.00,
      category:"Miscellaneous"
  },{
      name:"producto 9",
      price:50.00,
      category:"Vegetables"
  },{
      name:"producto 10",
      price:200.00,
      category:"Cloths"
  }
]

/*
  -quiero conocer la cantidad de productos en el array
  -quiero conocer el costo total de todos los productos del array
  -quiero conocer la cantidad de productos de cada categoría
      (Vegetables, Cloths, Miscellaneous, Computers)
  -quiero un nuevo array para cada categoría
  -quiero un nuevo array de strings que tenga lo siguiente
      [
          "El { productName } tiene un costo de { price }"
      ]
*/

var qProducts = productsList.length


var category1 = []
var category2 = []
var category3 = []
var category4 = []

const costoTotal = () => {
  let costo = 0
  for ( i = 0; i < productsList.length; i++ ){
    costo = costo + productsList[i].price
  }
  return costo
}
console.log('El costo total es : ', costoTotal())

const categorysProducts = () => {
  for ( i = 0; i < qProducts; i++){
    switch (productsList[i].category) {
      case 'Vegetables' :
        category1.push(productsList[i])
        break
      case 'Cloths' :
        category2.push(productsList[i])
        break
      case 'Miscellaneous' :
        category3.push(productsList[i])
        break
      case 'Computers' :
      category4.push(productsList[i])
      break
    }
  }
}
categorysProducts()

console.log(category1.length)
console.log(category2.length)
console.log(category3.length)
console.log(category4.length)

console.log(category1)
console.log(category2)
console.log(category3)
console.log(category4)

const enunciados = () => {
  var prodArray = []
  for ( i = 0; i < qProducts; i++){
    prodArray.push(`El ${productsList[i].name} tiene un costo de ${productsList[i].price}`)
  }
  return prodArray
}

console.log(enunciados())

array.forEach(( item, index, arr) => {

})

//funciona para imprimir los nombres en un arreglo de objetos 

const printNames = () => {
  for( let i = 0; i < productsList.length; i++){
    let name = productsList.length[i].name
    console.log( name )
  }
}

printNames()

const printName2 = () => {
  productsList.forEach ( (product, index) => {
    let  
  })
}


// map. Itera dentro de un arrayejecuta una funcion a cada item y devuelve un nuevo array con el resultado de cada funcion. Siempre regresa un array de la misma longitud que el original...
/*  array.map(( item, index, arr ) => {
  item: 
  index: elemento en cada iteracion

})

  filter: Itera dentro de un array, aplica una evaluacion a cada item y devuelve un nuevo array con aquellos items que cumplan la evaluacion 
  array.filter((item, index, arr) => {
    item: 
    index:
    arr:
  })

  reduce: resultado de una funcion aplicada a cada item, dentro de un acumulador
  array.reduce((accum, current, index, arr) => {
    accum:
    current:
    index:
    arr:
    initialValue:
  }, initialValue)

*/
