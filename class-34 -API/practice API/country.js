const clickCountry = () =>{
    const inputSearch=document.getElementById("input-search");
    const inputSearchField=inputSearch.value;    
    const url=`https://restcountries.com/v3.1/name/${inputSearchField}`
    fetch(url)
    .then(res => res.json())
    .then(data => showInput(data))
    
}
const showInput = countries =>{
    const showDetails=document.getElementById("show-country")
   countries.forEach(country => {
       console.log(country)
       const div =document.createElement("div")
       div.innerHTML=`<div class="card">
       <img src="${country.flags.png}" class="card-img-top" alt="...">
       <div class="card-body">
         <h1 class="card-title">   ${country.name.common}</h1>
         <h2> Capital:-  ${country.capital}</h2>
         <h3> Languages:-  ${country.languages.ben}</h3>
         <h4> Area:-  ${country.area}</h4>
         <h5> Population :-  ${country.population}</h5>

       </div>
     </div>`
     showDetails.appendChild(div)
   });
  
   
}