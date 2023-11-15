function employdetails( eid,name,position,salary){
     this.eid=eid;
     this.name=name;
     this.position=position;
     this.salary=salary;

}
 var e1= new employdetails( 123,"priya","developer",30000);
 console.log(e1);

 e1.doj="12 march";
 console.log(e1);
e1.__proto__.branch="bangalore";
console.log(e1);
var e2=Object.values(e1);
console.log(e2);


if( e2[0]===123 || e2[2] =="developer"){
   console.log(`the employe id is ${e2[0]} and working as a ${e2[2]} with a salary of ${e2[3]} `)
}
else {
    console.log(e1);
}