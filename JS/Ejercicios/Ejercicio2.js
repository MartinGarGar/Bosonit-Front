//Ejercicio 2
//Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

const filteredArray = arrDirty.filter((e) => !isNaN(e) && e !== undefined && e !== false && e !== null);
const filteredArrayByBoolean = arrDirty.filter(Boolean);

console.log("resultados:", filteredArray);
console.log("resultados usando Boolean:", filteredArrayByBoolean);
