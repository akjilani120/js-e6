const randomUser=() => {
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => displayRandom (data))
}

const displayRandom = randomPerson => {
const buddies=randomPerson.results
console.log(buddies)
const div =document.getElementById("added-random")
for(const person of buddies){
   const p=document.createElement("p")
   p.innerHTML=`Email: ${person.email} <h3> Name:  ${person.name.first} </h3> <h1> Country: ${person.location.country} </h1>` ;
   div.appendChild(p)
}
}