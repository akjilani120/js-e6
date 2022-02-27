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
const student3 ={
    name:"alim",
    id:1024,
    money:10000
}

console.log(student1.trideMoney.call(student2, 500, 700))
console.log(student1.trideMoney.call(student3, 500, 100))