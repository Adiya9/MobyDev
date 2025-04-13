//task1
let change = document.getElementById("message");
change.textContent =  "Добро пожаловать в JavaScript!";

//task2
let box_change = document.getElementsByClassName("box");
for (let i = 0; i < box_change.length; i++){
    box_change[i].style.backgroundColor = "green";
}

//task3
let a = document.querySelector("#text");
a.textContent = "Good bye";

let b = document.querySelectorAll(".box");
b.forEach(paragraph =>{
    paragraph.style.backgroundColor = "lightblue";
    paragraph.style.borderColor = "pink";
});

//task4
let c = document.querySelectorAll(".highlight");
c.forEach(paragraph =>{
    paragraph.style.color = "purple";
});