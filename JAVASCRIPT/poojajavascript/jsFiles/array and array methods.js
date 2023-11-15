// var arr=[12,'raj',true,1n,null,Symbol,{},()=>{}];
// // array is a collection of homegenous /
// // heterogenous element
// console.log(arr)
// var arr2=new Array();
// console.log(arr2);
// var products=['mobile', 'laptop', 'charger'];
// console.log(products);
// //push: add the element in first index
// products.push('table');
// console.log(products);
// //pop:removes the element in the first index
// products.pop();
// console.log(products);
// //unshift: add element in the last index
// products.unshift("chair");
// console.log(products);
// //shift: removes the element in the last index
// products.shift();
// console.log(products);
 
// //=======
// var products=['watch', 'mobile','laptop', 'speaker', 'mike'];
//  var i=products.indexOf("laptop");
//  //index of element
// console.log(i);
// // includes :  check whether the element is present and returns the value as boolean 
// var r=products.includes('watch');
// console.log(r);
//slice: (startindex , endindex) cut the element
 let trainee=['priya', 'vinoth','dhivya', "santhosh" , "lokesh"];
  var deployed=trainee.slice(0,2);
  console.log(deployed);
  var deployed=trainee.slice(3,4);
  console.log(deployed);
//   // slice element willnot affect the original array
//   console.log(traniee);
// //splice(start count , deletecount(how many elements to be deleted) , add element(item to be added))
// var tr1=traniee.splice( 2,1, "pooja");
// console.log(trainee);
//splice  element will affect original array
//==================
//   
// you shld userdata empname,mailid,contact,designation,sal,branch
// store in array
// designation -developer->30% hike t.e=>25% hike traineer->42% hike
// monthly and show the revised salary and branch,push bm name
// password  of their contact no

// dear empname,
// your sal is revised hikevalue belong to branch bn regards
// //  with branchmanager name your pass is contact
// let userData = new Array();
// var eName = prompt("Enter Employee name");
// userData.push(eName);
// var eMailId = prompt("Enter Employee email id");
// userData.push(eMailId);
// var contact = prompt("Enter Employee contact number");
// userData.push(contact);
//  var designation = prompt("Enter Employee Designation").toLowerCase();
//  userData.push(designation);
//  var eSal = Number(prompt("Enter employee Salary"));
//  userData.push(eSal);
//  var eBranch = prompt("Enter Employee Branch");
//  userData.push(eBranch);
//  if (userData.includes('developer'))
//   { annualeSal = eSal + (eSal*(30/100));
//    userData.push(annualeSal); }
//    else if(userData.includes('test engineer'))
//    { annualeSal = eSal + (eSal*(25/100));                                                                        
//    userData.push(annualeSal); }
//    else if (userData.includes('trainee'))
//    { annualeSal = eSal + (eSal*(42/100));
//    userData.push(annualeSal); }
//    var eBranchManager = "Shubham";
//    userData.push(eBranchManager);
//    var pswrd = contact;
//    userData.push(pswrd);
//    console.log(userData);


//     document.write(`Dear ${userData[0]} your salary is revised hike value belong to ${userData[5]}regards with ${userData[6]} and your pass is your contact number`);

  

