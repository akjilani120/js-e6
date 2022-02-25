/* filter() hlo je sorto ta deoya hoy sei sorte je kyta element thake sob gulo return kore
ar jodi sorto thik na thake tahle [] faka string dei*/
const numbers=[10,52, 65,  20, 15, 85, 71, 89,100]
const beggestNumber=numbers.filter(num => num > 20)
const smallestNumber=numbers.filter(num => num < 20)
// console.log(smallestNumber)

const products=[
    {name:"laptop", price:24000, color:"silver"},
    {name:"sound box", price:480, color:"black"},
    {name:"phone", price:14000, color:"black"},
    {name:"keyboard", price:650, color:"black"},
]
// const productPrice=products.filter(pro => pro.price > 5000)
// console.log(productPrice)
// const productsColor=products.filter(pro => pro.color=="black");
// console.log(productsColor)
const productsFilder=[
    {name:"laptop", price:24000, color:"silver"},
    {name:"sound box", price:480, color:"black"},
    {name:"phone", price:14000, color:"black"},
    {name:"keyboard", price:650, color:"black"},
    {name:"laptop", price:240000, color:"silver"}
]
const productFindName=productsFilder.find(pro => pro.name=="laptop")
console.log(productFindName)
const number=[10,52, 65,  20, 15, 85, 71, 89,100];
const findNumbers=number.find(num => num > 50) ;
console.log(findNumbers)