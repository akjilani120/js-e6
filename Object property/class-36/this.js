const student1={
    name:"AKij",
    id:105,
    money:5000,
    trideMoney2: function(){
        console.log(this)
    },
    trideMoney3: ()=>{
        console.log(this)
    },
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

console.log(student1.trideMoney(400, 600))
function showThis(){
    console.log(this)
}