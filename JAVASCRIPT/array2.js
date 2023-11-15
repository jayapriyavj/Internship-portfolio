//sort an array(primitive type)
const students=[ 3,8,1];
//students.sort();
//console.log(students)
students.reverse();  
console.log(students)
//sort array (reference type)
const employ=[{id:2 , name:"Senthil",position:"tester"},
 {id:1,  name:"anbu",position:"developer"},]
  employ.sort((a,b)=>{
   //nameA=a.name.toUpperCase();
   //nameB=b.name.toUpperCase();
 //a<b=-1
 //if(nameA < nameB) return -1;
 //a>b=1
 //if( nameA> nameB) return 1;
 if(a.position < b.position) return -1;
 if(a.position > b.position) return 1;
  return 0;
  
 });
 console.log(employ);
 //testing an arrary(array.every & array.some) its give boolean value
  //array.every =>true if all conditions are true if any one false then it will give you false
 let queue_by_age=[13,24,32];
  let adults=queue_by_age.every(function(value){ 
  });
  console.log(adults) // it give only boolean answer
  //array.some =>true if any one conditions are true 
  let numbers1=[2,3,5,7];
  let divi=numbers1.some(function(value){
     return value % 2 ==0;
  });
  console.log(divi);
 //filter
 let queue_by_age1=[13,24,32];
  let adults1=queue_by_age.filter(function(value){
     return value >=18;
  });
  console.log(adults1) // it give the value
  //filter
  let numbers2=[1,2,3,4,5,6,7,8,9,10];
  let evennumbers=numbers2.filter(function(value){
     return value %2==0;
  });
  console.log("even numbers" , evennumbers);
  let oddnumbers=numbers2.filter(function(value){
    return value %2!=0;
 });
 console.log("odd numbers" , oddnumbers);
 //reference type
//  let cart=[{id:1 ,item:"carrot", cost:30},
//  {id:2, item:"onion", cost:40},
//  {id:3, item:"chilles", cost:90}];

//     let finalcart=cart.filter(function(value){
//      return value.cost >=40;
//    });
//    console.log(finalcart);
   //difference b/w find and filter
   //find gives first occurence value(only object)
   //filter gives all the value inside the list (array)
   let cart=[{id:1 ,item:"carrot", cost:30},
 {id:2, item:"onion", cost:40},
 {id:3, item:"chilles", cost:90}];

    let finalcartfilter=cart.filter(function(value){
     return value.cost >=40;
   });
   console.log(finalcartfilter);
   let finalcartfind=cart.find(function(value){
    return value.cost >=40;
  });
  console.log(finalcartfind);
//map(primitive type)
const numbers=[1,2,3,4];
 const numresult=numbers.map(function(value){
  return value*2;
});
console.log(numresult)
//refernce type
 const people=[
    {id:1, fname:"priya", lname:"vinoth"},
    {id:2, fname:"vinoth", lname:"ayyamperumal"},
    {id:3, fname:"shankar", lname:"ayyamperumal"},
 ];
//    let final=people.map(function(value){
//     return [value.fname+ value.lname].join("  ");
//   });
//   console.log(final);

  let finalname=people.map(function(value){
   let fullname=  [value.fname , value.lname].join( "  ");
   let obj={ id:value.id, fullname:fullname};
   return obj;
  });
  console.log(finalname);
//   //////chaining(sort,filter,map)
//   let shoppingcart=[{id:1, item:"smart phone", cost:3000},
//   {id:2, item:"air conditioner", cost:5000},
//   {id:3, item:"tv", cost:2000}];
//   //sort it using lowest value
//     let sortByLowestprice=shoppingcart.sort(function(a,b){
//         return a.cost-b.cost;//ascending order
//         //return b.cost-a.cost;//descending order
       
//    });
//    //sort  by item using ascending
//     let sortByItem=sortByLowestprice.sort(function(a,b){
//         if(a.item < b.item) return -1;
//  if(a.item > b.item) return 1;
//   return 0;  
//    });
//    //filter cost less than 3000
//    let sortByFilter=sortByItem.filter(function(value){
//         return value.cost >=3000;
//    })
//    //map like this "smart phone -3000"
//     let sortByMap=sortByFilter.map(function(value){
//             return value.item + " - " + value.cost;
//    });
//    console.log(sortByMap);
//easy method 
   let shoppingcart=[{id:1, item:"smart phone", cost:3000},
  {id:2, item:"air conditioner", cost:5000},
  {id:3, item:"tv", cost:2000}];
     let final=shoppingcart.sort((a,b)=>{
         a.cost-b.cost;
   }).sort((a,b)=>{
        if(a.item < b.item) return -1;
         if(a.item > b.item) return 1;
           return 0;  
   }).filter((value)=>value.cost >=3000 )
   .map((value)=>value.item + " - " + value.cost);
   console.log(final);

//reduce(primitive type)
let person=[23,45,89,70];
let personsresult=person.reduce(function(accu, value){
     return accu+value;

});
// reduce (reference type)
 let ecommerce=[{ id:1, item:"shoe" , cost:900},
 { id:1, item:"ring" , cost:500},
 { id:1, item:"bag" , cost:1800},
]
 let reduce=ecommerce.reduce(function(acc,value){
    return acc + value.cost;
      
 },0);
console.log(reduce);
//flat

let id=[[1,2,3],[4,5,6]];

console.log(id.flat());
 let matrix=[
    [11,12,13],
    [21,22,23],
    [31,[1,2,3],,33]
 ]
 console.log(matrix.flat());
 console.log(matrix.flat(3));