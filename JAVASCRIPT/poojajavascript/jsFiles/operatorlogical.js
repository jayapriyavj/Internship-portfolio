var java=prompt('enter yes/no if skill java is known');
var sql=prompt('enter yes/no if skill sql is known');
var webtech=prompt('enter yes/no if skill webtech is known');
var python=prompt('enter yes/no if skill python is known');
var testingtool=prompt('enter yes/no if skill testing tool is known');
if(java==="yes" && sql==="yes" && webtech=="yes"){
    document.write("you are eligible to became a full stack developer")
}
else if(java==="yes" || python==="yes" && sql==="yes"  && testingtool==="yes"){
    document.write("you are eligible to became a test engineer")
}