const student ={
    name:'Ak Jilani',
    age:20,
    height:5.7,
    color:"white",
    id:20

}
// Just key show krbe
const key =Object.keys(student);
console.log(key)

// Just key value krbe
const value=Object.values(student)
console.log(value)
// just all value show in Array
const entries=Object.entries(student)
console.log(entries)
// seal()  kono kishu delete hbe na
Object.seal(student)
// delete Object
delete student.name
console.log(student)
