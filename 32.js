//task1
function greet(w){
    return w;
}
console.log(greet("Привет, мир!"));

//task2
let name = prompt("write your name: ");
function sayHello(name){
    console.log("Hi," + name);
}
sayHello(name);

//task3
const sum = function(a, b){
    console.log(a + b);
};
sum(5, 6);

//task4
let k = prompt("write number: ");
k = Number(k);

function isEven(k){
    return k % 2 === 0;
}

let res = isEven(k)? "Even":"Odd";
console.log(res);

//task5
let f = prompt("first num");
let s = prompt("second num");
if (f === s){
    console.log("Числа равны");
}
else{
    const max = function(f,s){
        return f > s;
    }
    if (max(f,s)){
        console.log(f);
    }
    else{
        console.log(s);
    }
}

//task6
let name1 = "Adiya";
let surname = "Tynystan";
function getInitials(name1,surname){
    console.log(name1[0]+"."+surname[0]+".");
}
getInitials(name1,surname);

//task7
let a1 = prompt("write num");
function cube(a1){
    function square(a1){
        return a1**2;
    };
    return square(a1)*a1;
};
console.log(cube(a1));

//task8
sum = (a,b) =>{
    return a + b;
}
console.log(sum(5,9));
