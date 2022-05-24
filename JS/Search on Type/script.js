const input = document.getElementById('inputSearch');
const results = document.getElementById('results');
const nombre = document.getElementById('nombre')
const estado = document.getElementById('estado')
const genero = document.getElementById('genero')

let parameter = 'name'
const setParameter = (chosenParameter) => {
    parameter=chosenParameter
    if(parameter === 'name') {
        nombre.classList.add("active");
        estado.classList.remove("active");
        genero.classList.remove("active");
    }
    if(parameter === 'status') {
        estado.classList.add("active");
        genero.classList.remove("active");
        nombre.classList.remove("active");
    }
    if(parameter === 'gender') {
        genero.classList.add("active");
        estado.classList.remove("active");
        nombre.classList.remove("active");
    }

}

const search = async () => {

    let respuesta 
    if(parameter === 0){
        mapedData= ''
    }
    if(parameter === 'name') {
 respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${input.value}`)}
 if(parameter === 'status') {
    respuesta = await fetch(`https://rickandmortyapi.com/api/character/?status=${input.value}`)}
    if(parameter === 'gender') {
        respuesta = await fetch(`https://rickandmortyapi.com/api/character/?gender=${input.value}`)}
const data = await respuesta.json()
const mapedData = await data.results.map(data => {
return  `
<div id='character'>
<div id='character-info'>
<h4>Nombre: ${data.name}</h4>
<h5>Status: ${data.status}</h5>
<h5>Género: ${data.gender}</h5>
</div>
<div id='character-image'>
<img src='${data.image}' alt='${data.name}'>
</div>
</div>
`
})


results.innerHTML = mapedData.join('')

}

