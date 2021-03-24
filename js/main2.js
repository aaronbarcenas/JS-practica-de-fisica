var height = parseFloat(prompt('Proporciona tu altura en cm: '));

var country = parseInt(prompt('Proporiona tu pais con el num que corresponda: 1-México, 2.-Australia, 3.-Canada, 4.-Brsil, 5.-Reino Unido 6.-Otro'));

var gender = parseInt(prompt('Proporciona tu genero: 1.-Hombre 2.-Mujer'));

switch ( country ) {
  case 1:
    if ( gender === 1 ) {
      if ( height < 170 ) {
        alert('tienes una estatura menor al promedio')
      } else {
        alert('Tienes una estatura mayor al promedio')
      }
    } else if ( gender === 2 ) {
      if ( height < 160.8 ) {
        alert('Tienes una estatura mayor al promedio')
      }
    }
  break
  case 2:
    if ( gender === 1 ) {
      if ( height < 179.2 ) {
        alert('tienes una estatura menor al promedio')
      } else {
        alert('Tienes una estatura mayor al promedio')
      }
    } else if ( gender === 2 ) {
      if ( height < 165.9 ) {
        alert('Tienes una estatura mayor al promedio')
      }
    }
  break
  case 3:
    if ( gender === 1 ) {
      if ( height < 178.1 ) {
        alert('tienes una estatura menor al promedio')
      } else {
        alert('Tienes una estatura mayor al promedio')
      }
    } else if ( gender === 2 ) {
      if ( height < 163.9 ) {
        alert('Tienes una estatura mayor al promedio')
      }
    }
  break
  case 4:
    if ( gender === 1 ) {
      if ( height < 173.6 ) {
        alert('tienes una estatura menor al promedio')
      } else {
        alert('Tienes una estatura mayor al promedio')
      }
    } else if ( gender === 2 ) {
      if ( height < 160.9 ) {
        alert('Tienes una estatura mayor al promedio')
      }
    }
  break
  case 5:
    if ( gender === 1 ) {
      if ( height < 177.5 ) {
        alert('tienes una estatura menor al promedio')
      } else {
        alert('Tienes una estatura mayor al promedio')
      }
    } else if ( gender === 2 ) {
      if ( height < 164.4 ) {
        alert('Tienes una estatura mayor al promedio')
      }
    }
  break
  default:
    alert('Tu pais no se enuentra en las estadisticas')
}