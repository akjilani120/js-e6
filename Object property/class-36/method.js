const student={
    name:"Ak Jilani",
    id:15,
    subject:["bangal", "English", "Math"],
    details:function (name){
        this.name =name
        return this.name
    },
    bestFriend:{
        name:"AK",
        age:25,
        look:"handsome"
    }
}
console.log(student.subject[0])
console.log(student.details("AK jlani"))
console.log(student.bestFriend.age)