const randomUser = ()=>{
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(data => showPost(data))
}

const showPost= posts =>{
    const container=document.getElementById("show")
    posts.forEach(post => {
        console.log(post)
        const p = document.createElement("p")
       p.innerHTML=`<h1>${post.title}</h1>
       <h1>${post.id}</h1>
       `
       container.appendChild(p)
    });
    
    
}