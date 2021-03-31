/*
usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

let mentorsArray = [{
    name: "Israel Salinas Martinez",
    scores: [{
        signature: "HTML",
        score: 10
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 8
      },
      {
        signature: "ReactJS",
        score: 8
      }
    ]
  },
  {
    name: "David Cermeño Moranchel",
    scores: [{
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 7
      },
      {
        signature: "JS",
        score: 10
      },
      {
        signature: "ReactJS",
        score: 10
      }
    ]
  },
  {
    name: "Charles Silva",
    scores: [{
        signature: "HTML",
        score: 9
      },
      {
        signature: "CSS",
        score: 9
      },
      {
        signature: "JS",
        score: 10
      },
      {
        signature: "ReactJS",
        score: 9
      }
    ]
  },
  {
    name: "Michael Villalba Sotelo",
    scores: [{
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 9
      },
      {
        signature: "ReactJS",
        score: 10
      }
    ]
  }
]

/*
const getTotalPrice = (array) => {
  let result = array.reduce((accum, current) => {
    return accum + current.price
  }, 0)

  return result
}

const getAverageCourse = (array) => {
  let averageCourse = mentorsArray.reduce(())
}

let labelsArray = productsList.map((product) => {
  return `El ${product.name} tiene un costo de ${product.price}`
})
*/


let getAverageCourse = mentorsArray.map(( item, index, arr ) => {

  return `El Koder La materia ${item.scores[index].signature} tiene ${item.scores[index].score} `
})

console.log(getAverageCourse)

let courses = []
mentorsArray.forEach((element, index) => courses.push(element.scores[index].signature))
console.log(courses)

let materias = []
mentorsArray.forEach((item, index) => materias.push(item.scores[index].score))
console.log(materias)

/*
const filterByCategory = ( array, selectedCategory ) => array.filter( product => product.category === selectedCategory )

let computers = filterByCategory( productsList, "Computers")
let vegetables = filterByCategory( productsList, "Vegetables")

console.log( computers )
console.log( vegetables )
*/

/*
const califXcategory = ( array, selectedCategory ) => array.filter( materia(item[ , index ] => materia.scores[index].score === selectedCategory )

let HTML = califXcategory( mentorsArray, "HTML")

array.filter()
*/

/*
const filterByCategory = ( array, selectedCategory ) => {
  let result = array.filter( product => product.scores[0].score === selectedCategory )
  return result 
}

filterByCategory()
*/

let result = mentorsArray.filter( ( product, index ) => {
  return product.scores[index].score === "HTML"
  })
console.log(result)
/*




const promedios = mentorsArray.map(( mentor ) => {
  let suma = mentor.reduce((a, b) => a + b)
  return suma/mentor.length
})

console.log(promedios)
*/

/*

const alumnos = [[5, 8, 4], [2, 5, 2], [8, 8, 9]]
const promedios = alumnos.map((alumno) => {
  let suma = alumno.reduce((a,b) => a + b)
  return suma/alumno.length
})

console.log(promedios)

const filterByCategory = ( array, selectedCategory ) => array.filter( product => product.category === selectedCategory )

const promedios = mentorsArray.map(( mentor ) => {
  const filterCourse = ( array, course ) => mentorsArray.filter( materia => materia.score === course )
  return filterCourse
})

*/
