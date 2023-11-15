// //function declaration
// function msg(eid,subject,pdomain){
//     document.write(`dear employee with id ${eid} you have successfully completed ${subject} on ${pdomain}`)
// };
//  msg (prompt("eid"), prompt("subject"), prompt("pdomain"));
//==============
//functional expression
// console.log('functional expression')
//  var sal=function salarycredits(doj, sal,name){
//     if(doj>2020 && sal>35000){

// var nsal=sal+10000;
//     document.write(`Dear ${name} salary credits will be hiked to ${nsal}`)

//     }
// }
//sal("2020", "45000", "priya");
//===============
//nested function
// console.log("nested expression")
//     function javafullstack(){
//         var nj=12;
//         var sal=35000;
//         console.log(nj);
//         console.log (sal);
//         function database(){
//             var data=30;
//             var sal=55000;
//             console.log(data);
//             console.log (sal);
//             function mangodb(){
//                 var sal=70000;
//                 console.log(sal);
//             }
//             return mangodb;


//         }
//         return database;
//     };
//      javafullstack()()();
//====================
//  function ram(){
//     var rbal=450000;
//     var fd=200000;
//     console.log(rbal);
//     console.log(fd);
//     function rita(){
//         var bal=600000;
//         var fd=5000000;
//         var totalbal=rbal+bal;
//         console.log(bal);
//         console.log(fd);
//         console.log(totalbal);

//     }
//     return rita;

//  }
//  ram()();
//=================
//arrow function
// var wishes=(gender)=>{
//     document.write(`Happy ${gender} day`);
// }
// wishes('womens');
//immediate invoke function
//one time usage
// (function name=)
//higher order function(multiple function can be done )
function calci(a,b,task){
    var res=task(a,b);
    return res;
}
 var sum=calci(5,2,(a,b)=>{return a+b});
console.log(sum);
var multiple=calci(5,2,(a,b)=>{return a*b});
console.log(multiple);

  