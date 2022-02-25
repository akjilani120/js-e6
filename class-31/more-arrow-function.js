const add1= (num, num2) => num +num2
console.log(add1(54, 52));
const add2=(num, num2, num3) => num + num2 *num3;
console.log(add2(20, 50, 2))
const add3= num => num*50;
console.log(add3(10))
const add4=()=>"It have not perametar";
console.log(add4())
const add5=() => 5+5;
console.log( add5())
const add6=(x , y)=>{
    const sum= x +y;
    const minus=x-y;
    const modulas=sum * minus;
    const divided=modulas /10;
    return divided;
}
console.log(add6(50, 10));