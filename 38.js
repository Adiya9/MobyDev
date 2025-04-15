//task1
localStorage.setItem('greeting','Привет, мир!');
const one = localStorage.getItem('greeting');
console.log(one);

//task2
localStorage.removeItem('greeting');
const res = localStorage.getItem('greeting');
console.log(res);

//task3
const data = {
    name: 'Adiya',
    surname: 'Tynystan',
    age: 18,
    height: 168,
    nationality: 'kazakh'
}
const to_str = JSON.stringify(data);
localStorage.setItem('data',to_str);
const get = localStorage.getItem('data');
const result = JSON.parse(get);
console.log(result);


//task4
const user = {
    name: 'Nazym',
    age: 17,
    height: 158
}
const to_str1 = JSON.stringify(user);
localStorage.setItem('user',to_str1);

const get1 = localStorage.getItem('user');
const to_object = JSON.parse(get1);

user.country = "USA";
localStorage.setItem('user',JSON.stringify(user));

const get2 = localStorage.getItem('user');
const to_object1 = JSON.parse(get2);
console.log(to_object1);


//task5
person_name = prompt('write person name:');
let newPerson;
const list = [
    {name: 'Kama', age: 18 },
    {name: 'Bauka', age: 14 },
    {name: 'Aida ', age: 16 }
]
const to_str2 = JSON.stringify(list);
//localStorage.setItem('list',to_str2);

found = false;
for(let i = 0;i < list.length;i ++){
    let person = list[i];
    if (person.name === person_name){
        console.log('Found:' ,person);
        found = true;
        break;
    }
}
if (!found) {
    newPerson = {
        name: person_name,
        age: 20
    }
    list.push(newPerson);
    localStorage.setItem('list',JSON.stringify(list));
    console.log('Added: ',newPerson);
    console.log('Added: ',list);

}

//task6
function clear(){
    localStorage.clear();
    console.log("Cleared");
}

function show(){
    const get4 = localStorage.getItem('list');
    const res6 = JSON.parse(get4);
    console.log(res6);
}