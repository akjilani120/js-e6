
const searchBtn = () =>{
   const searchField= document.getElementById("search-input")
   const searchValue=searchField.value;    
  
   searchField.value=" ";
   if( searchValue == ''){
       alert("please give food name")
   }else{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data.meals))
   }
  
  
}
 const displayResult = meals =>{
     
    const displayResult=document.getElementById("show-result")
    displayResult.innerHTML=' ';
    
        meals.forEach(meal => {
            // console.log(meal)
           
           const div =document.createElement("div");
           div.classList.add("col");
           div.innerHTML=`
           <div onclick="showId('${meal.idMeal}')" class="card">
              <img src="${meal.strMealThumb}" width="300" height="300" class="card-img-top" alt="...">
                <div class="card-body">
                 <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                 </div>
              </div>
           `
           displayResult.appendChild(div)
        });
    }
    

 const showId= mealId =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${mealId}` 
    fetch(url)
    .then(res => res.json())
    .then(data => showDetail(data.meals[0]))
 }
 const showDetail = details =>{
    
    const showDetailField=document.getElementById("show-details")    
    const divlist =document.createElement("div")
    divlist.classList.add("card")
    console.log(divlist)
    divlist.innerHTML=`
    <img src="${details.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">    
      <h5 class="card-title">${details.idMeal}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">${details}</a>
    </div>
    `
    console.log(details)
    showDetailField.appendChild(divlist)
 }