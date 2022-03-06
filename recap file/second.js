const carBrand={
    firstCar:{
        carName:"BMW",
        price:2541847125,
        color:"Silver",
        madeIn:{
            firstClass:"America",
            secondClass:"Soudi Arabia",
            thired:"Canada"
        }
    },
    secondCar:{
        carName:"Lambor gini",
        price:2541847125874,
        color:"Black",
        madeIn:{
            firstClass:"china",
            secondClass:"Dubai",
            thired:"Japan"
        }
    }
}
// const{carName, price, color}=carBrand.firstCar;
// console.log(carName, price, color)
const{carName}=carBrand.secondCar;
const{firstClass}=carBrand.secondCar.madeIn;
console.log(firstClass)
const arraycarList=[
    {name:"BMW", price:2514741,  color:"Black"},
    {name:"Marchiries Brand", price:8745124, color:"Silver"},
    {name:"lambar gini", price:874715421, color:"red"}
]
// const{name, price}=arraycarList[0];
const{name, price}=arraycarList[1];
console.log(name, price)