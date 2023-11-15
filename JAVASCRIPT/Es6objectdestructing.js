
//object destructing ({})
let personDetails = {
  firstName: "priya",
  lastName: "vinoth",
  age: 28,
  isAlive: true,
  favColor: "blue",
  hobbies: ["sleep", "eat"],
  parent: {
    father: "jayaraman",
    mother: "pichaiyammal"
  },

  fullName() {
    return (`${this.firstName}  ${this.lastName}`);

  }
}
console.log(personDetails.fullName());
//object destructing(extract only fn, and lname) 
//const{oldname:newname, properties, added properties}=Object
const { firstName: myFirstName, lastName, favPerson = "titli", ...restValues } = personDetails
console.log(myFirstName, lastName, favPerson, restValues)
//obj destructing for using variables before declaraing values
let favNum1, favNum2
  ; ({ favNum1, favNum2, ...otherValues } = {
    favNum1: 2,
    favNum2: 4,
    favNum3: 6,
    favNum4: 8
  })
console.log(favNum1, favNum2, otherValues)
//function using obj destru({})
function displayUser({ lastName, age, favColor }) {
  console.log(`Hello my name is ${lastName} and  age is ${age} , my favcolor is ${favColor}`)

}
displayUser(personDetails);
//reactjs object destructing
let employ = {
  nam: "priya",
  position: "developer",
  languages: {
    n1: "java",
    n2: "javascript"
  }
}
let { nam, position, languages: { n1, n2 } } = employ;
console.log(nam);
console.log(n2);
//array destructing
let fruits = ["apple", "mango", "watermelon", "banana"];
//let [a, , , b] = fruits;
// console.log(a)
// console.log(b)
let [a, ...x] = fruits;
console.log(a)
console.log(x)



