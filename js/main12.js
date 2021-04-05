/*
  Realizar una funcion que reciba como parametro el nombre completo de un koder y retorne sus iniciales
    Ejempllo: 
      input: 'Aaron Barcenas Mondragon'
      output: A.B.M.
  
  Realizar una funcion que reciba n parametros de tipo string y validar por cada string cuantas vocales tiene y retornar el resultado de un objeto. 
    Ejemplo:
      Input: 
        string1: 'Hola mundo'
        string2: 'Soy fullstack'
      Output: 
        {
          Hola Mondo: 4
          Soy fullstack: 3
        }
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
/*
function getQuantityVowels(...string) {
  console.log(string)
  const object = {}
  string.forEach( str => {
    const quantity = str.match(/[aeiou]/gi).length
    object[str] = quantity
  })
  return object
}
console.log(getQuantityVowels("Hola", "Adios", "Como estas", "Hola otra vez"))
*/

/*
Del siguiente arreglo, obtener de cada nombre la siguiente salida 
*/

const arrayNames = [
  ["Ruben", "Flores"],
  ["Andre", "Vazquez"],
  ["Fernanda", "Palacios"],
  ["Goerge", "Camarillo"],
  ["Ale", "Paez"],
  ["Shari", "Andrade"],
  ["Erick", "Trujillo"],
  ["Arce", "Gutiérrez"],
  ["Juan", "Hernandez"]
]
/*
function getInitials () {
  const nameSplited = arrayNames.split(' ')
  console.log(nameSplited)
  
  /*
  let initials = ''
  nameSplited.forEach(element => {
    console.log(element.charAt(0))
    initials += element.charAt(0) + '.' 
  });
  alert(initials)
  
}
*/

//getInitials()
/*
let initials = 0
nameInitials = arrayNames.map((item, index) => {
  //let initials = item[index].charAt(0)
  let newArray = item.join()
  let newArray2 = newArray.split(",")
  initials += item.charAt(0)

  console.log(newArray)
  console.log(newArray2)
  return newArray
})

/*
nameInitials = arrayNames.forEach(element => {
    initials += element.charAt(0) + '.'
})
console.log(initials)
*/


arrayKoders = [
  [
    ["name", "Ruben"],
    ["lastName", "Alvarez"],
    ["generation", 1],
    ["bootcamp", "python"],
    ["score", 90]
  ],
  [
    ["name", "Andre"],
    ["lastName", "Alvarez"],
    ["generation", 1],
    ["bootcamp", "python"],
    ["score", 90]
  ],
  [
    ["name", "Ale"],
    ["lastName", "Paez"],
    ["generation", 1],
    ["bootcamp", "python"],
    ["score", 98]
  ],
  [
    ["name", "Juan Pi"],
    ["lastName", "López"],
    ["generation", 10],
    ["bootcamp", "JavaScript"],
    ["score", 95]
  ],
  [

    ["name", "Cintia"],
    ["lastName", "Gomez"],
    ["generation", 10],
    ["bootcamp", "JavaScript"],
    ["score", 85]
  ],
  [
    ["name", "Shari"],
    ["lastName", "Andrade"],
    ["generation", 10],
    ["bootcamp", "JavaScript"],
    ["score", 90]
  ],
  [
    ["name", "Arce"],
    ["lastName", "Gutierrez"],
    ["generation", 10],
    ["bootcamp", "JavaScript"],
    ["score", 90]
  ],
  [
    ["name", "JC"],
    ["lastName", "Hernandez"],
    ["generation", 10],
    ["bootcamp", "JavaScript"],
    ["score", 90]
  ],
  [
    ["name", "Erick"],
    ["lastName", "Trujillo"],
    ["generation", 10],
    ["bootcamp", "JavaScript"],
    ["score", 90]
  ]
]

function Koder ( name, lastName, generation, bootcamp, score ){
  this.name = name;
  this.lastName = lastName;
  this.generation = generation;
  this.bootcamp = bootcamp;
  this.score = score;
}

const newArrayKoders = arrayKoders.map( arrayPropierties =>{
  //console.log(arrayPropierties)
  const objectKoder = arrayPropierties.reduce( ( object, koderProperty ) => {
    const key = koderProperty[0]
    const value = koderProperty[1]
    object[key] = value
    //console.log(object)
    return object
  }, {})
  console.log(Koder)
  return new Koder(objectKoder.name, objectKoder.lastName, objectKoder.generation, objectKoder.bootcamp, objectKoder.score)
})