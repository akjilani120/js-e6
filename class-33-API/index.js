const car={
    name:"BMW",
    color:"black",
    price:14514711,
}
// const carString=JSON.stringify(car)
// console.log(car)
// console.log(carString)
const products={
    name:"laptop",
    color:'Silver',
    price:1454171,
    moreColor:["red", "Black", "white"]
}
const productsString=JSON.stringify(products);
console.log(products)
console.log(productsString)
const productsObject=JSON.parse(productsString)
console.log(productsObject)