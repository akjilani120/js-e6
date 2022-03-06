const submitBtn = () =>{
    const searchtextField=document.getElementById("search-input")
    const searchtext=searchtextField.value;
    
    searchtextField.value=" ";
    const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchtext}`
   fetch( url)
//    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
   .then(res => res.json())
   .then(data => displayFood(data.drinks))
}

const displayFood = foods =>{  
    const showFoodField=document.getElementById("show-food") 
    foods.forEach(food => {       
    const div =document.createElement("div")
    div.classList.add("col")
    div.innerHTML=`<div class="card " onclick="showDetails('${food.idDrink}')">
    <img src="${food.strDrinkThumb}" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title">${food.strDrink}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  `
  showFoodField.appendChild(div)
    });
}
const showDetails=cock=>{
    const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cock}`
    fetch(url)
    .then(res => res.json())
    .then(data => showDetailFood(data.drinks))
}
const showDetailFood= details =>{
  const showFoodAbout =document.getElementById("show-details-food")
  showFoodAbout.textContent = ' ';
   details.forEach( detail =>{
       console.log(detail)
   const div =document.createElement("div")
   div.innerHTML=`<div class="card">
   <img src="${detail.strDrinkThumb}" class="card-img-top" alt="...">
   <div class="card-body">
   <h3>${detail.idDrink}</h3>
     <h5 class="card-title">${detail.strInstructionsDE}</h5>
    
   </div>
 </div> `
 showFoodAbout.appendChild(div)
   })
}