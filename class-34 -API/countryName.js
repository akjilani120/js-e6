const countryFile= () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => countrySearch(data))
}
countryFile()
const countrySearch= countries => {
    const divContainer=document.getElementById("container")
    
    for (const country of countries){
        // console.log(country)
        const div=document.createElement("div")
        div.classList.add("country")
        div.innerHTML=`<h1>${country.name.common}</h1> <p>${country.capital}</p>
        <button onclick="showFlag('${country.name.common}')">See Flag</button>
        `

        divContainer.appendChild(div)
    }
}
const showFlag = name =>{
    const url =`https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => countryShow(data))
}
const countryShow = country =>{
const flagShow=document.getElementById("show-flag")
country.forEach(flag => {
    console.log(flag)
   const div =document.createElement("div")
   const img=document.createElement("img")
   img.src=flag.flags.png
   div.appendChild(img)
   flagShow.appendChild(div)
});
}