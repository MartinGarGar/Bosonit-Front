//Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
//La función debe tener 2 parámetros:
//Primer parámetro debe ser el número de bytes
//Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). 
//Por defecto, este parámetro debe de tener un valor de 3.


function fromBytesToFormattedSizeUnits(bytes, digit = 3) {
    const units = [' B', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
    var index = 0;
    do {
      bytes = bytes / 1024;
      index++;
    } while (bytes > 1024 || bytes < -1024);
    if (index >= units.length) {
      return 'bytes converter exceeded';
    };
    return bytes.toPrecision(digit) + units[index];
  }
  
  
  
  
  console.log(fromBytesToFormattedSizeUnits(1024));
  console.log(fromBytesToFormattedSizeUnits(23423552));
  console.log(fromBytesToFormattedSizeUnits(123456789));
  console.log(fromBytesToFormattedSizeUnits(-12145489451.5932, 5));
  console.log(fromBytesToFormattedSizeUnits(634645654644654563465365646.45645546, 10));
  console.log(fromBytesToFormattedSizeUnits(6346456546446545635465365646.45645546, 7));