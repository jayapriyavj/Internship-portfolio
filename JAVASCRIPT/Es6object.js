// // let person=new Object();//object constructor syntax
// // let person1={};//object literals syntax
//  let personDetails={
//     firstName:"priya",
// lastName:"vinoth",
// age:28,
// isAlive:true,
// hobbies:["sleep", "eat"],
// parent:{
//     father:"jayaraman",
//     mother:"pichaiyammal"
// },

//    fullName(){ //fullName:function(){
// return (`${this.firstName}  ${this. lastName}`);// return this.firstName + "" +this.lastName

// }
//  }
//  console.log(personDetails.fullName());
//  //getting object values
//  document.getElementById("result").innerHTML=personDetails.fullName()
//  console.log(personDetails.parent.father);
//  console.log(personDetails.hobbies);
// //add new properties to the object
//  personDetails.favColor="yellow"
//  //delete properties
//  delete personDetails.isAlive
//  console.log(personDetails);
//  //object merging 
//  const personMethods={

//     yearOfBirth(){
//         return new Date().getFullYear()-28

//     }
//  }
//  console.log(personMethods.yearOfBirth());     
//  Object.assign(personDetails , personMethods);
//   //object cloning(copy)
//   const clone=Object.assign(personDetails)//Object.assign({} ,personDetails)
//   console.log(clone);
//   //spread operator
//    const spread={...personDetails,...personMethods}
//    console.log(spread);
//    //object property utilisizer(same keyword in the return then ommit)
//    function getFullName(firstName,lastName){
//            return {
//              firstName,//firstName:firstName,
//              lastName,//lastName:lastName,
            

//            }
//    } 
//    console.log(getFullName("priya", "vinoth"))
// //using get method
// //gett- used to get data
//  const p1={
//     favNumbers:[2,4,6,8],
//     get favNumbersCount(){
//          return this.favNumbers.length


//     },
//  };
//  console.log(p1.favNumbersCount)
 //set- used to set data
 let person1={
   firstName:"priya",
lastName:"vinoth",

  get fullName(){
   return (`${person1.firstName} ${person1.lastName}`)
   },
    set fullName(values){
      let v1=values.split(" ");
      this.firstName=v1[0];
      this.lastName=v1[1];
    },
};
person1.fullName="trisha krishnan"
//console.log(person1.fullName);