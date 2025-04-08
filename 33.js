//task1
let person = {
    name:"Adiya",
    age:18,
    city:"Almaty"
};
console.log(person);

//task2
console.log(person.name);
console.log(person.age);

person.city = "Astana";
console.log(person.city);

//task3
let person1 = {
    name:"Adiya",
    age:18,
    city:"Almaty",
    greet(){
        console.log("Привет, меня зовут",this.name,"мне",this.age,"лет!");
    }
};
person1.greet();

//task4
let obj1 = { 
    a: 10, 
    b: 20 
};
let obj2 = { 
    a: 10, 
    b: 20 
};
console.log(obj1 == obj2);
console.log(obj1 === obj2);
//переменная хранит не сам объект, а ссылку на область памяти

//task5
let book = {
    title:"doc",
    author:"Alim",
    details: {
        year:2012,
        pages:12
    }
};
let copy_book = Object.assign({},book);
book.details.year = 2022;
console.log(book);
console.log(copy_book);

//task6
let calculator = {
    a:5,
    b:9,
    sum:function(){
        return this.a + this.b;
    },
    multiply:function(){
        return this.a * this.b;
    }
}
console.log(calculator.sum());
console.log(calculator.multiply());

//task7
const car = {
    brand:"BMW",
    model:"X5"
}
car.brand = "Audi";
console.log(car);
//const только гарантирует,
//что переменная не может быть переназначена на другой объект