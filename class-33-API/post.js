function postData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPost(data))
}
postData()
function displayPost(posts){
    const container=document.getElementById("post-add")
for(const posted of posts){
    const div =document.createElement("div")
    div.classList.add("post")
    div.innerHTML=`<h2> ${posted.title} </h2>  <h4>${posted.id} </h4>`;
    container.appendChild(div)
    console.log(posted)
}
}