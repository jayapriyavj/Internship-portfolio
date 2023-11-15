//var age=prompt("enter age");
//var res=(age>=18)?document.write('allow'):document.write('not allow')
 //nested terinary operator
 //vaccination
 //if the individual has taken
  var firstdose=prompt("firstdose is competed yes/no");
  var seconddose=prompt("seconddose is competed yes/no");
  var boosterdose=prompt("boosterdose is competed yes/no");
  var res=((firstdose==="yes")?
  ((seconddose==="yes")?"take booster":"second dose"):
  (seconddose==="yes"&& boosterdose==="yes")?'take care':"take booster")
  console.log(`${res}`);