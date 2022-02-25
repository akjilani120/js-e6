

function userDataLoad(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>userData(data) )
}
function userData(data){
for(const user of data){
    const ul= document.getElementById('users')
    
    const li =document.createElement("li");
    li.innerText=` Name : ${user.name} Email:   ${user.email}`;
    ul.appendChild(li)
}
}