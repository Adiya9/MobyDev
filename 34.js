//task1
let fruits = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);

//task2
console.log(fruits[0],fruits[2]);
fruits.push("Груша");
console.log(fruits);

//task3
fruits.pop();
fruits.shift();
console.log(fruits);

//task4
fruits.forEach(function(i){
    console.log(i);
});

//task5
let length = fruits.map(fruit => fruit.length);
console.log(length);

//task6
let numbers = [1,2,3,4,5,6,7,8,9,10];
let even = numbers.filter(num => num % 2 === 0);
console.log(even);

//task7
let res = numbers.reduce((a,b) => a+b,0);
console.log(res);

//task8
let h = numbers.find(num => num > 5);
console.log(h);

//task9
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let res1 = arr1.concat(arr2);
console.log(res1);

//task10
let exit = fruits.includes("Банан");
console.log(exit);

//task11
fruits.reverse();
console.log(fruits);