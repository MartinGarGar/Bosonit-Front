let input = document.getElementById('inputSearch');
let parameter = ''
let results = document.getElementById('results');

const setParameter = (chosenParameter) => {
    parameter=chosenParameter

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

