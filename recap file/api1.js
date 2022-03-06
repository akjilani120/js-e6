const albumsFunc= () =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayalbums(data))
} 

const displayalbums= pictures =>{
    const divContainer =document.getElementById("showDisplay")
pictures.forEach(picture => {
    
    const div =document.createElement("div")
    div.classList.add("col")
    div.innerHTML=` <div class="card" onclick="showDetails('${picture.id}')">
    <img src='${picture.url}' class="card-img-top img-fluid" alt="...">
    
  </div>
  `
  divContainer.appendChild(div)
    
});
}
const showDetails= show => {
const url =`https://jsonplaceholder.typicode.com/${show}`;
fetch(url)
.then(res => res.json())
.then(data =>  console.log(data))   
}

// const showDetails= () =>{
//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(res => res.json())
//     .then(data => displayDetails(data))
// }
const displayDetails= details =>{
//     const showTitle=document.getElementById("show-details")
//     details.forEach(detail =>{
//         console.log(detail)
//     const div =document.createElement("div")
//     div.innerHTML=`<div class="card">
//     <img src="" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${detail.title}</h5>
//       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     </div>
//   </div>
//   `
//   showTitle.appendChild(div)
//     })
    console.log(details)
}
