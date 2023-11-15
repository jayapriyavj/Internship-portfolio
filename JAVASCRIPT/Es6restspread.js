//rest operators
let numbers = (...numbers) => {
    console.log(numbers);
}
numbers(44, 55, 66, 77, 88, 99)
//spread operator
let add = (a, b, c, d) => {
    console.log(a + b + c + d);

}
let array = [10, 20, 30, 40]
add(...array);