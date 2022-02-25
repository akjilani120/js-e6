const countryName= () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => countryList(data))
}
countryName()
const countryList = countries => {
    const divContainer=document.getElementById("container")
    countries.forEach(country => {
       
        const div =document.createElement("div");
        div.classList.add("add-item")
        div.innerHTML=`<p>${country.name.common}</p> 
        <p>${country.capital}</p>
        <button onClick="showFlags('${country.name.common}')">Show country Flag</button>
        `
        
        divContainer.appendChild(div)
    });
}
const showFlags = name =>{
   const url=`https://restcountries.com/v3.1/name/${name}`
   fetch(url)
   .then(res => res.json())
   .then(data => displayFlags(data[0]))
    
}
const displayFlags= flag => {
    console.log(flag)
    const flagShow =document.getElementById("show-flags");
    const div1 =document.createElement("div");
    const img=document.createElement("img");
    img.src=flag.flags.png
    div1.appendChild(img)
    flagShow.appendChild(div1)

}
