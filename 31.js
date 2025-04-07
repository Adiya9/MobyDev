//task1
/*
let input = prompt("write number");
if (input > 10) {
    console.log("Число больше 10");
}
else{
    console.log("Число меньше или равно 10");
}

//task2
let a = confirm("Do you want to delete");
if (a){
    console.log("Файл удален");
}
else{
    console.log("Удаление отменено");
}

//task3
let age = prompt("Your age: ");
if (age < 18){
    console.log("Вы еще подросток");
}
else if (age >= 18 && age <= 30){
    console.log("Вы молодой взрослый");
}
else{
    console.log("Вы взрослый");
}

//task4
let age1 = prompt("write number");
let res = (age1 % 2 == 0)? "Четное число":"Нечетное число";
console.log(res);

//task5
let day = prompt("Day of week: число от 1 до 7");
let d;
switch (day){
    case "1":
        d = "Monday";
        break;
    case "2":
        d = "Tuesday";
        break;
    case "3":
        d = "Wednesday";
        break;
    case "4":
        d = "Thursday";
        break;
    case "5":
        d = "Friday";
        break;
    case "6":
        d = "Saturday";
        break;
    case "7":
        d = "Sunday";
        break;
}
console.log(d);

//task6 1)
let first = prompt("First number: ");
let second = prompt("Second number: ");
if (first === second){
    console.log("Числа равны");
}
else{
    let res = (first > second)?"Первое число больше":"Второе число больше";
    console.log(res);
}
    */
//task 7
let month = prompt("write number to choose season: ");
let m;
switch(month){
    case "1":
    case "2":
    case "12":
        m = "Winter";
        break;
    case "3":
    case "4":
    case "5":
        m = "Spring";
        break;
    case "6":
    case "7":
    case "8":
        m = "Summer";
        break;
    case "9":
    case "10":
    case "11":
        m = "Autumn";
        break;
}
console.log(m);