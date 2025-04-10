//task1 
let a = 1;
while(a < 11){
    console.log(a);
    a ++;
}

//task2
let a1 = 0;
while(a1 < 11){
    a1 ++;
    if(a1 === 5){
        continue;
    }
    else if(a1 === 8){
        break;
    }
    console.log(a1);
}

//task3
let a2 = 0;
do {
    a2++;
    console.log(a2);
}while(a2 < 5);
//тело будет выполнено хотя бы один раз, даже если условие не подходит.

//task4
while(true){
    console.log("infinite");
    let a3 = prompt("write 10 to stop");
    if (a3 == 10){
        break;
    }
}

//task5
let a4;
for(a4 = 1;a4 < 11; a4++){
    console.log(a4);
}

//task6
let i = 0;
for(;;){
    if (i > 100){
        break;
    }
    console.log("infinite");
    i++;
}

//task7
let numbers = [1,2,3,4,5];
for(let i = 0;i < numbers.length;i ++){
    console.log(numbers[i]);
}

//task8 
//for используем когда знаем число итераций или когда есть массив 
let letters = ['a','b','c','d'];
for(let i = 0;i < letters.length;i++){
    console.log(letters[i]);
}
//while когда количество итераций заранее неизвестно.
while(true){
    let a5 = prompt("write STOP to stop");
    if (a5 == "stop"){
        break;
    }
    console.log("inf")
}

//task9
let a6;
for (a6 = 10;a6 > 0;a6--){
    console.log(a6);
}

//task10
let j;
for(j = 1;j < 11;j ++){
    if (j % 2 === 1){
        continue;
    }
    console.log(j);
}