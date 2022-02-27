const products ={
    name:"Hp laptop",
    price:24000,
    color:"Silver",
    ram:"5gb"

}
for(const product in products){
    console.log(product)
}
for(const [key , value] of Object.entries(products)){
    console.log(key, value);
}