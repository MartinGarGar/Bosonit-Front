//Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
//La función debe tener un objeto como único parámetro.


const myObject = { NamE: 'Charles', ADDress: 'Home Street' };

const toLowercaseKeys = (param) => {

const result = Object.fromEntries(Object.entries(param).map(([key, value]) => [key.toLowerCase(), value] ))

return result
}

const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }