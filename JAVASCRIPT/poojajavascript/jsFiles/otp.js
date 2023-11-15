// //otp generation
// var otp=Math.floor(Math.random()*1000000);
// console.log(otp);
//============
// console.log('otp');
// function otp(){
//     var digits='123456789';
//     var otp="";
//     var len=digits.length;
//     for(let i=0;i<6;i++){
//         otp +=digits[Math.floor(Math.random()*len)]
//     }
//     return otp;
// }
// document.write("otp will be valid for 30sec only");
// document.write(otp());
//==============
 function otp(){
    var p="priya10795";
    var otp="";
    var len=p.length;
    for(let i=0;  i<6; i++){
        otp += p[Math.floor(Math.random()*len)]
    }

    alert(`the otp is valid for 30 sec only :${otp}`)
 }
 otp()
