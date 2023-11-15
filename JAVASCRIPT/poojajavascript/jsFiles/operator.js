var username=prompt('enter your name');
var product1=Number(prompt('enter product 1 cost'));
var product2=Number(prompt('enter product 2 cost'));
var product3=Number(prompt('enter product 3 cost'));
var product4=Number(prompt('enter product 4 cost'));
var product5=Number(prompt('enter product 5 cost'));
var totalcost=product1+product2+product3+product4+product5;
console.log(totalcost);
if(totalcost>=5000){
    var disc=totalcost-500;
    document.write(`Dear ${username}, your totalcost to be paid was${totalcost},you have discount your payable amount would be ${disc}`)
}
else{
    document.write(`Dear ${username},your payable amount is ${totalcost} there is a discount on purchase of more than 5k  continue shopping thankyou `)
}