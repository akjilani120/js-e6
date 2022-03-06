const products={
    productName:"laptop",
    anyProblem: false,
    price:24000,
    color:["silver", "black", 'white'],
    detainls:{
        ram:'4gb',
        rom:"520gb",
        graphics:'4440mb'
    },
    priceDetails: function (){
       return "It is real price 24000. The price is fixed"
    }

}
const total=`${products.color[1]} ${products.detainls.graphics} ${products.priceDetails()}`;
console.log(total)

const number= () => 84
console.log(number())
const divided = divi => divi/7;
console.log(divided(50))
const plus= (num, num2) => (num + num2) /2
console.log(plus(52, 40))
const plusExtra = (num, num2)=>{
    const firstNumber=num + 7;
    const secondNumber=num2 + 7;
    const totalNumber=firstNumber + secondNumber;
    return totalNumber;
}
console.log(plusExtra(50, 100))
const arrayDivided =[40, 80, 70, 90, 50, 70, 40,50];
const addNumber=arrayDivided.map(number => number/2)
console.log(addNumber)

const addFilter=arrayDivided.filter(num  =>{
    return num > 60;
})
console.log(addFilter)
const addFind = arrayDivided.find(num => num > 70)
console.log(addFind)