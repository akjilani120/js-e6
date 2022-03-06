 const submitBtn = () =>{
    sportField()
 }
const spinnering= displayStyle =>{
    const spinnerDiv=document.getElementById('spinner-show')
   const div =document.createElement("div")
   div.innerHTML=`<div class="spinner-border text-primary" id="spinner" role="status">
   <span class="visually-hidden">Loading...</span>
 </div>`
 
    
}
const sportField=()  =>{
    const inputFiedl=document.getElementById('search-input')
    const inputMain=inputFiedl.value;
   
    inputFiedl.value =" "
    spinnering('block')
    const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputMain}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySportsField(data.player))
}
sportField()
const displaySportsField= players =>{
    console.log(players)
    const divContainer=document.getElementById("show-players")
    divContainer.textContent=" ";
    players.forEach(player => {
        console.log(player)
        const div= document.createElement("div")
        div.classList.add("col")
        div.innerHTML=` <div class="card">
        <img src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${player. idTeam}</h5>
          <p class="card-text">${player.strPlayer}</p>
        </div>
      </div>`
      divContainer.appendChild(div)
    });
}