var username=prompt('enter the name');
var kilometer=prompt('enter the kilometer')
var transport=prompt("enter the medium of transport as follow car/auto/bike");
if(transport==='car'){
   
    var travelcost=kilometer*45;
    document.write(`Dear ${username}, as you have travelled ${kilometer} by ${transport} your cost of travelcost to be paid was${travelcost}`)
     console.log(travelcost)
}
if(transport==='auto'){
   
    var travelcost1=kilometer*30;
    document.write(`Dear ${username}, as you have travelled ${kilometer} by ${transport} your cost of travelcost to be paid was${travelcost2}`)
}
if(transport==='bike'){
   
    var travelcost2=kilometer*20;
    document.write(`Dear ${username}, as you have travelled ${kilometer} by ${transport} your cost of travelcost to be paid was${travelcost3}`)
}

