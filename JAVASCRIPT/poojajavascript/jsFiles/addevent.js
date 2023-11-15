//target name.addeventlist
//  function blacktheme(){
var black = document.getElementById('bla');
console.log(black);
var blue = document.getElementById('blu');
console.log(blue);
black.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
})
var blue = document.getElementById('blu');
blue.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
})
var like = document.getElementById('like');
count = 0;
like.onclick = function () {
    count += 1
    like.innerHTML = "👍" + count;
}