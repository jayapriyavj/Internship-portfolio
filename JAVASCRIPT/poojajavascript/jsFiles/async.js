// setTimeout(()=>{
//     document.write("login completed")
// },5000);
// setInterval(()=>{
//     document.write("wish you al the best for stay in industry")
// },3000);
//========
// promise
 var p =new Promise((resolve, reject)=>{
    let js="true";
    if(js==="true"){
        resolve("i have got knowledge on js")
    }
    else{
        reject("i will try getting it soon")
    }

 })
 console.log(p);
 p.catch((msg)=>{
    console.log("i cant take js requirements now")
 })

    p.then((msg)=>{
        console.log("i am pro with js check me and hire now")
     })
     p.finally((msg)=>{
        console.log("i am developer and i will be developer")
     })


 