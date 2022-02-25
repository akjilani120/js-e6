const car=
 
  { brandName:"Mercherish", price:"142454114220", color:{
     colorBlack:"Black", colorWhite:"white", colorRed:{
        colorSun:"sunred", colorYellow:"yellowred", colorBlue:"bluered"
     }
  }}

  const {brandName, price, color}=car;
// console.log(brandName)
// console.log(price)
// console.log(color.colorBlack)
// console.log(color.colorRed.colorSun)
const carList={
   carBrand:{
      firstLabelCar:{
         first:"BMW", second:"Lamborgini", third:"MarcherichBench"
      },
      secondLabel:{
         first:"Toyota", second:"TATA", third:"Parado"
      }
   }
}
// const{first, second, third}=carList.carBrand.firstLabelCar;
const{first, second, third}=carList.carBrand.secondLabel;
console.log(first, second, third)
// console.log(first, second, third)