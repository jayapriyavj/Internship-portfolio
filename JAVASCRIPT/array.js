//joining  in array
let routine=  ["wake up", "Eat", "sleep"];//["i", "am", "a", "girl"]
let dailyRoutine=routine.join(" . ");
console.log(dailyRoutine);
//splitting in array
 let postTitle="this is my post";
 let postSlug=postTitle.toUpperCase().split(" ");
 console.log(postSlug)
 let finalSlug=postSlug.join("_")
 console.log(finalSlug)
// //for of loop
// for(let dailyRoutines of routine)
// console.log(dailyRoutines);
// //for in loop
// for(let dailyRoutines in routine)
// console.log(dailyRoutines,routine[dailyRoutines]);
// //for each loop(iterating js array)
// routine.forEach(function(dailyRoutine,RoutineIndex) {
//     console.log(RoutineIndex , dailyRoutine)
// });
// //write in arrow function ()=>{};
// routine.forEach((dailyRoutine,RoutineIndex) =>
//     console.log(RoutineIndex , dailyRoutine)
// );
   
// //combining arrays
//   const shoppingCart=[{item:"maggi"}];
//   const addCart=["oil", "vegetables","salt"," matchbox"];
//   //combine
//   let combine=shoppingCart.concat(addCart);
//   shoppingCart[0].item="noodles";
//   console.log(combine);
//   //extract
//   let extract=addCart.slice(1,3)
//   console.log(extract);
//   //spread operator
//   const addUp=[...shoppingCart,...addCart];
//   console.log(addUp);
// // Empty an array
//   let numbers=[1, 2, 3 ,4 ,5];
//   console.log(numbers);
//   //solution 1
//   numbers=[0];
//   console.log(numbers);
//   //solution 2
//   numbers.length=0;
//   console.log(numbers);
  //solution 3
//   numbers.splice(0,numbers.length);
//   console.log(numbers);
//   //solution 4
//   while(numbers.length)
//   numbers.pop();
// console.log(numbers);
// // slice 
// let num1=[1,2,3,4,5,6];//it create new array
// let s1=num1.slice(2,4);//from(start index ,  to end index )cut the element
// console.log(s1) //it willnot affect the original array
// //splice
// let num2=[1,2,3,4,5,6,]
// let s3=num2.splice(2,2)
// console.log(s3)// it will affect the original array
// //finding an element in array(primitive data types)
// let item=["apple","lemon","orange","apple"]
// let i1=item.lastIndexOf("apple")
// console.log(i1)
// let i2=item.indexOf("apple")
// let i3=item.includes("lemon")
// console.log(i2,i3)
// //finding an element in reference data types
// let orders=[

  
//     {id:1 , item:"maggi", quantity:2,},
//     {id:2, item:"noddles", quantity:4,}
  
// ]
// let result=orders.find(orders=>{ return orders.item ==="maggi"})
// console.log(result);
// let result1=orders.findIndex(orders=>{
//   return orders.item==="noddles"
// })
// console.log(result1);
 