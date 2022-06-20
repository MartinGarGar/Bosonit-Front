//Ejercicio 4
//Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];


const filteredArray = () => {
    const filtered1 = arrNumber1.filter( e => arrNumber2.includes(e))
      const result = filtered1.filter((e) => arrNumber3.includes(e))
 
     return result
 }
 console.log(filteredArray());
 
 
let reduceArray = []
reduceArray.push(arrNumber1, arrNumber2, arrNumber3);

const duplicatesNumbers = reduceArray.reduce((e, array) => (
  e.filter(number => array.includes(number))
));
console.log (duplicatesNumbers)



 


 