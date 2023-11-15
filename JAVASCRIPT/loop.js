//for( initialExpression; condition ; step)
/**for( let i= 1; i<=15; i++){
    if(i %2 === 0){
       console.log("even number is" + i);
   }
    if(i %2!==0){
        console.log("odd number is" + i);

    }
}*/
/*for( let i=1; i<=15; i++){
   console.log("divisor of 3 is " + i);
}*/
 /*let j=1;
  
 while(j<=15){
    if(j %3===0){

    console.log("multiplication of 3 is" + j);
 }
 j++;
}*/
/*let k=4;
 while(k<=16){
    if(k %4!==0){
        console.log("the number is" + k);
    }
    k++;
 }
 do{

    if(k %4!==0){
        console.log("the number  do while is" + k);
    }
    k++;
}
    while(k<=16);*/
    //=======
    //for in loop
    let persons={
        name: "priya",
        age: 24,
        sex: "female"

    };
    for(let key in persons){
    console.log(key + ":"  ,persons[key]);
    }
    //for 0f loop
 let colors=["red", "blue"];
 for(let key of colors){
    console.log(colors[key]);
 }