const laodQuotes= () =>{
    fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data =>displayQuote(data) )
}
const displayQuote= quotes => {
    const qouteShow=document.getElementById("code-show")
    qouteShow.style.fontSize="30px";
    qouteShow.style.color="red";
    qouteShow.innerText=quotes.quote;
   
}