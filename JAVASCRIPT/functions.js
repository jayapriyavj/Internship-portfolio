// // //function decelaration
// // function greetings(name,company){
// //     document.write(`Mrs.${name} welcome to our ${company} software company `)

// // }
// // greetings("priya","infosys");
// //=====
// // //function expression
// //  var sal=function greetings(name,company){
// //     document.write(`Mrs.${name} welcome to our ${company} software company `)

// //  }
// //   sal(prompt("name"),prompt("company")); //    sal("name","company");
// // //nested functions
// //  function fullstack(){
// //     var sal=45000;
// //     var name="priya";
// //     console.log(sal);
// //     console.log(name);
// //     function python(){
// //         var days=13;
// //         var sal=34000;
// //         console.log(days);
// //         console.log(sal);
// //         function mangodb(){
// //             let doj="march 2";
// //             let data=30;
// //             console.log(doj);
// //             console.log(data);
// //         }
// //         return mangodb;
// //     }
// //     return python;
// //  }
// //  fullstack()()();
//    function add(){
//            var A=20;
//            var B=50;
//             var rs= A+B;
//             console.log(rs);
//             function sub(){
//                 var C=10;
//                 var rs2=A-C;
//                 console.log(rs2);
//                 function multi(){
//                     var rs3=A*C;
//                     console.log(rs3);

//                 }
//                 return multi;
//             }
//             return sub;
//    }
//    add()()();
// //immediate invoke function  expression(IIFE)
// (function add(){ 
//     let num1=34;
//     let num2=88;
//     let result=num1+num2;  
//     console.log(result);
// })();
// //function arguments
// function sumexpense(){//tiffin,petrol)
//    let total=0;
//    //console.log(arguments);
//    for(let total of  arguments){
//           total+= value ;
//    }
//    return total;
// }
// let  result=sumexpense(45,78,89,90);
// console.log(result);
//rest operator

function sumexpense(loan, ...expenses) {

    let total =  expenses.reduce((a, b) => a + b);
    return total - loan;

}



let result = sumexpense(100, 45, 78, 89, 90);
console.log(`your total expense result is:${result}`);
507948544