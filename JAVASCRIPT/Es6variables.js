//1.global scope    it is named according to the environment using browser=>window scope , node=>global scope
    //if you didnt define them , they would assigned to global scope object.
    // if you use var outside of the function , then it belongs to global scope

//2.local scope 
 //i. function scope
   // if you use var inside of the function , then it belongs to function scope
 //ii. block scope
   // if you use var inside of block , i.e for loop, the variable is still available outside of that block

//var variable  
var chocolate="dairy milk"//(global scope)
function changeChocolate(){
    var iceCream="vanilla"//(local scope)
    var chocolate="perk"

    console.log(chocolate, iceCream)
}
console.log(chocolate)
changeChocolate()
console.log(iceCream)// cannot be accessed bcz icecream is in local scope       
 //var disadvantage
  // if you use var inside of block , i.e for loop, the variable is still available outside of that block
  // to overcome this "let" is introduced 