var customername=prompt('enter the name');
var fdamount=Number(prompt("enter the amount"));
var accbalance=Number(prompt("enter the account balance"));
if(fdamount>="500000" && accbalance>="200000"){
    document.write(`Dear ${customername} our fixed deposit amount ${fdamount}and your account balance${accbalance}, so your are eligible to apply for a loan.kindly contact bank manager for futher updates,thankyou for banking withus.`)

}
else{
    document.write(`Dear ${customername} our fixed deposit amount ${fdamount}and your account balance${accbalance},are low so, you are not eligible to apply for a loan.thankyou for banking with us. `)
}