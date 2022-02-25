const usershow = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => showDetails(data.results))
}
const showDetails= results => {
    const divContainer=document.getElementById("container")
   results.forEach(result => {
       console.log(result)
       const div =document.createElement("div")
       div.classList.add("user")
       div.innerHTML=`<h1>${result.phone}</h1>`
       divContainer.appendChild(div)
   });
}