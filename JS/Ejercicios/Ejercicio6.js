//Crea una función que redondee un número float a un número específico de decimales. 
//La función debe tener dos parámetros: 
//Primer parámetro es un número float con x decimales
//Según parámetro es un int que indique el número de decimales al que redondear
//Evitar usar el método toFixed()


let result

const roundTo = (number, decimals) => {
 
 result= Number(number.toString().slice(0, decimals+1))
 
 return result
}
roundTo(2.123,3)
console.log(result)