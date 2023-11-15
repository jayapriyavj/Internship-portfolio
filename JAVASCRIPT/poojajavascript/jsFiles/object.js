// var obj={
//     trainername:'pooja',
//     technology:"java developer",
//     duration: "2 months" ,
//     fee:45000

// };
// console.log(obj);
// console.log(obj.fee);//fetch  key value of the object
// console.log(obj.duration="3 months");//change the value of present key  

// //add new key value to existing obj
// var trainer=obj.traineravailable="true"
// console.log(trainer);
// console.log(obj);

// var data=Object.keys(obj);
// // it consoles only key of object in array
// console.log(data);
// var value=Object.values(obj)
// // it consoles only values of object in array
// console.log(value)
// var enter=Object.entries(obj)
// console.log(enter)
// // it will fetch individual key value pair and store in array
// var alpha=Object.assign(obj);
// // clone the object
// console.log(alpha)
// console.log(obj)

//  var product= new Object();
//  console.log(product);


//  var cid=prompt("enter the customer id");
//   var np=prompt('enter the number of products purchased');  
//   var pincode=prompt('enter the pincode');
//   var totalcost=prompt("enter the total cost");
//      const cid1={
//           cid:cid,
//           np:np,
//           pin:pincode,
//           tcost:totalcost,

//      };
//      console.log(cid1);


     //======
     //constructor function
      function customerdata(cid,np,totalcost,pincode){
        this.cid=cid;
        this.np=Number(np);
        this.totalcost=totalcost;
        this.pincode=pincode;
      }
      var c1=  new customerdata('asp123',15,85000,560025);
       console.log(c1);
       var cdata1=Object.values(c1);
          console.log(cdata1);
      //  console.log(cdata1[1]);
      //  //console.log(cdata1[2]);
      //  var dcid1=cdata1[0];
      //   var dnpc1=cdata1[1];
      //   //var dtotalc1=cdata1[2];
        
      if(dnpc1 >=15){
     console.log(`CONGRAGULATIONS DEAR CUSTOMER WITH ${dcid1} you are star customer ,you are rewarded with 10k`)};
      
      // var c1=new customerdata(prompt("enter cid"),prompt('enter tno.of products'), prompt('enter the totalcost'),prompt('enter pincode'));
      //  console.log(c1)  
      //  var c2=new customerdata(prompt("enter cid"),prompt('enter tno.of products'), prompt('enter the totalcost'),prompt('enter pincode'));
      //  console.log(c2)  
      //  var c3=new customerdata(prompt("enter cid"),prompt('enter tno.of products'), prompt('enter the totalcost'),prompt('enter pincode'));
      //  console.log(c3)  
      
//       function ammascake(cid,flavour,kg,cost,deliverydate){
//     this.cid=cid;
//     this.flavour=flavour;
//     this.kg=kg;
//     this.cost=cost;
//     this.deliverydate=deliverydate;
// }
// var c1=new ammascake('AMMA100','blackforest','2','560','14-mar-23')
// console.log(c1);
// c1.occassion='happy birthday to amrutha';
// // individual object
// c1.__proto__.branch='bangalore';
// // add to all the object created using SAME CONSTRUCTOR FUNCTION

// console.log(c1);
// var dc1=Object.values(c1);
// console.log(dc1);
// if(dc1[1]==='blackforest'|| dc1[1]==='redvelvet'){
//     var pay=dc1[3]-dc1[3]*0.3
//     console.log(`dear customer u want to pay ${pay} rs only on offer will be delivered ${dc1[4]}`)
// }
// var c2=new ammascake('AMMA101','redvelvet','3','660','14-mar-23')
// console.log(c2);