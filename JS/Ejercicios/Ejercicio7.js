//Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
//La fundación debe tener dos parámetros:
//Primer parámetro es un objeto con x número de campos y valores
//Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro


const returnFalsyValues = (object, funcion) => {
   
    let resultArray = []
           
               Object.values(object).map(item => {
               if (!funcion(item)) resultArray.push(item)})
               
            return resultArray
       
    }
    
     const result = returnFalsyValues({ a: 1, b: '2', c: 3, d: 'hola', e: 8 }, x => typeof x === 'string')
    
    console.log(result)

