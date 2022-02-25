const products=[
    {name:"laptop", price:1450 , color:"silver"},
    {name:"Soundbox", price:480, color:"Black"},
    {name:"mouse", price:250, color:"black"}
]
const productAdded=products.map(p => p.name);
console.log(productAdded)
// const productAdded=products.map(p => p.color);
// console.log(productAdded)
products.forEach(pro => console.log(pro.price))
const friendName=["Amin", "Jisan", "Khokon", "Ashikur", "Jahid"];
const addedFriend= friendName.map(friend => friend.length*2);
console.log(addedFriend)