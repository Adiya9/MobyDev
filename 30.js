//task1
let a = 30;
let b = 5;
let c = 2;
console.log(a + b + c);
console.log(a + c - b);
console.log((a * b) / c);
console.log(a % b);

//task2
let x = 7;
++x;
console.log(x);
x++;
console.log(x);
--x;
console.log(x);
x--;
console.log(x);

//task3
let str = "The result is: ";
let a1 = 4;
let b1 = 5;
let plus = String(a1 + b1);
console.log(str + plus);

//task4
let a2 = 25;
let b2 = 12;
console.log(a2 > b2);
console.log(a2 > 0 && b2 > 0)

let c2 = 5;
console.log(c2 < 10 || c2 == 2)

//task5
console.log(10 == "10")// не смотрит на тип данных
console.log(10 === "10") // смотрит на тип данных и из за того что разный тип фолс

//task6
let x1 = 5;
let res = (x1 % 2 || x1 % 3) && (x1 % 6 != 0);
console.log(res);

let y1 = 5;
let res1 = (y1 > 10) || (y1 < 5);
console.log(!res1);


