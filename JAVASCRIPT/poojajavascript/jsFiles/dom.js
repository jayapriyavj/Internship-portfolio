// var userdata1=document.getElementById("cdata").value;
// console.log(userdata1);
// var userdata2=document.getElementById("adata").value;
// console.log(userdata2);
// var userdata3=document.getElementById("bdata").value;
// console.log(userdata3);
// console.log()
//++++++++++++
function carkms() {
    var cdata = document.getElementById("cdata").value;
    console.log(cdata);
    var totalcost = cdata * 40;
    var ccost = document.getElementById("costc")
    ccost.innerHTML = `The Cost Of Travel in CAR is  ${totalcost}`
}
function autokms() {
    var adata = document.getElementById("adata").value;
    console.log(adata);
    var totalcost = adata * 35
    var acost = document.getElementById("costa")
    acost.innerHTML = `The Cost Of Travel in AUTO is  ${totalcost}`
}
function bikekms() {
    var bdata = document.getElementById("bdata").value;
    console.log(bdata);
    var totalcost = bdata * 25
    var bcost = document.getElementById("costb")
    bcost.innerHTML = `The Cost Of Travel in BIKE is  ${totalcost}`
}