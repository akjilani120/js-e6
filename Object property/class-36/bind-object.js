const student1={
    name:"AKij",
    id:105,
    money:5000,
    trideMoney: function (tride, vaja){
        this.money =this.money - tride - vaja
        return this.money;
    }
}
const student2 ={
    name:"Bakij",
    id: 108,
    money:7000,
}
// const trideOverMoney=student1.trideMoney(500)
// const trideOverMoney2=student1.trideMoney(800, 200)
// console.log(trideOverMoney2)
const student2Tride=student1.trideMoney.bind(student2);
console.log(student2Tride(500, 200))