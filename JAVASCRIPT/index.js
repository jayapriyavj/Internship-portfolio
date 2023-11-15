6//alert("hello i am learning javascript");
console.log("hello im bulding JS!");
console.log(3+5);
//document.write(`THE SUM OF ${3+5}`);
/*
   rules 
   1.no javascript name should be used as keywords
   2.its shouldnot start with number
   3.it follows camelName/no space & no -
   4.its case-sensitive
   */
//objects
let person={
    name:"jaya priya",
    gender:"female",
    age:27,
    married:true,
    siblings:{
        brother:"santosh",
        sister:"pugalini",
    }}
    //dot notation
console.log(person);
console.log(person.age);
console.log(person.siblings);
console.log(person.siblings.sister);
//bracket notation
console.log(person['gender']);
//array
var favcolors=["red","blue","white","orange"];
console.log(favcolors[3]);
favcolors[5]="green";
console.log(favcolors);
console.log(favcolors.length);
//functions
function greetUser(firstName, lastName){
    var  msg="Hello"+" " +  firstName +" " + lastName + " " + "im learning javascript ";
    console.log(msg)
    // document.write(`hello ${firstName} ${lastName} , im learning javascript`)

}
greetUser("priya" , "vinoth")
greetUser("vinoth", "ayyamperumal")
//OPERATORS
/* 1.airthmetic( +,-,*,/,exponential(**))
2.assignment operators(+= ,-=)
3.camparsion operator
   i. relational operator(=< , >=)
   ii.equality operator
     a.   strict equity operators(data type, value)
console.log(true==="1");
console.log('1'===1);
      b.loose equity operators
console.log('1'==1);
console.log(1=='1');
console.log(true=="1");*/
//terinary operators( condition? 'value1':' value2")
let age=28;
let type= age>18? 'adult ticket':'childticket'
console.log(type);
//4. logical operators
//AND OPERATOR(&&): IF BOTH  OPERANDS ARE TRUE , THEN TRUE
//OR OPERATOR(||): ANYONE OPERANDS IS TRUE, THEN TRUE
//NOT OPERATOR(!): OPPOSITE !(TRUE),THEN FALSE
//conditional statements
var amount=6000;
if(amount>60000){
    console.log("buy an apple mobile");
}
else if(amount>10000)
    console.log("buy an android phone");  

else if(amount>5000 &&  amount<10000)
    console.log("buy an basic phone");
else{
    console.log("you cant afford mobile phones now!");
}
//if else 

//var hour= 15;

 let hours= new Date().getHours();

if(hours >=0 && hours<=13){
    console.log("good morning");
}
else if(hours >=13 && hours<=17){
    console.log("good afternoon");
}
else{
    console.log("good evening");
}

//switch case
let day;
switch (new Date().getDay()){
    case 0:
       day= "sunday";
        break;
    case 1:
        day="monday";
        break;
        case 2:
            day="tuesday";
            break;
            case 3:
                day="wednesday";
                case 4:
                    day="thursday";
                    break;
                    case 5:
                        day="friday";
                        break;
                        case 6:
                            day="saturday";
                            break;

}
var today=new Date();
console.log(today);






