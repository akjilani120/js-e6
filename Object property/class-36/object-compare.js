const first ={a:1 , b:2};
const second ={b:2, a:1};
function compareObject(obj1, obj2){
    if(Object.keys(first).length !== Object.keys(second).length){
        return false
    }
    for( const props in obj1){
        if(obj1[props] !== obj2[props]){
            return false
        }
    }
    return true
}
const result =compareObject(first, second)
console.log(result)