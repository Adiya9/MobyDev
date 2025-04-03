let name = "Adiya";
console.log(name);
const surname = "Tynystan";
console.log(surname);

name = "Kamila";
console.log(name);

//surname = "Utepderdieva";
console.log(surname); //константы нельзя менять 

//var не имеет блочной области видимости 

let num = 18;
console.log(num,typeof num);

let str = "Nurik";
console.log(str,typeof str);

let bool = true;
console.log(bool,typeof bool);

let major = null;
console.log(major,typeof major);

let job;
console.log(job,typeof job);

let nan = 0/0;
console.log(nan,typeof nan);

let str1 = "123";
let str1_num = Number(str1);
console.log(str1_num)

let num1 = 45899;
let num1_str = String(num1);
console.log(num1_str);

let a;
let a1 = String(a);
console.log(a1);

let b = null;
let b1 = Number(b);
console.log(b1);

let number = 59;
let numbreToStr = String(number);

/*JavaScript сам определяет тип данных переменной 
по значению, которое в нее присваивается.
Переменная может менять свой тип в процессе 
выполнения программы.*/

let man = prompt("writre your name: ")
console.log(man);