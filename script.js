// let username = window.prompt('What is your username?');

// console.log(username);
// let username;

// document.getElementById('mySubmit').onclick = function(){
//     username = document.getElementById('myText').value;
//     document.getElementById('myH1').textContent = `Zdravo ${username}`;
// }

// let age = window.prompt('How old are you');
// age = Number(age);
// age+=1;

// console.log(age, typeof age);

// let y = '0';
// let x = '0';
// let z = '0';

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const PI = 3.14159;
// let radius;
// let circumferance;

// document.getElementById('mySubmit').onclick = function(){
//     radius = document.getElementById('myText').value;
//     radius = Number(radius);
//     circumferance = 2 * PI * radius;
//     document.getElementById('myH3').textContent = circumferance + "cm";
// }

// const decreaseBtn = document.getElementById('decreaseBtn');
// const resetBtn = document.getElementById('resetBtn');
// const increaseBtn = document.getElementById('increaseBtn');
// const countLabel = document.getElementById('countLabel');
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count
// }
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNum1
//     label2.textContent = randomNum2
//     label3.textContent = randomNum3
// }

// const submit1 = document.getElementById("submit1");
// const message = document.getElementById("message");

// submit1.onclick = function () {
//   let age = document.getElementById("age").value;
//   age = Number(age);
//   if (age >= 18) {
//     message.textContent = `You are old enough to have your licence!`;
//   } else {
//     message.textContent = `You must be 18+ to have a licence!`;
//   }
// };

// Pogadnjanje brojeva pocetak

// const minNum = 1;
// const maxNum = 500;
// const dugme = document.getElementById("dugme");

// dugme.onclick = function () {
//   const answare = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

//   let guess = null;
//   let attempts = 1;

//   while (guess !== answare) {
//     let input = window.prompt(
//       `Guess the number between ${minNum} and ${maxNum}!`
//     );

//     if (input === null) {
//       window.alert("Igra prekinuta.");
//       break;
//     }

//     guess = Number(input);

//     if (isNaN(guess)) {
//       window.alert("Please enter a valid number!");
//     } else if (guess > maxNum || guess < minNum) {
//       window.alert(`Please enter the number in the required range!`);
//     } else if (guess < answare) {
//       window.alert("You're too LOW!");
//       attempts++;
//     } else if (guess > answare) {
//       window.alert("You're too HIGH!");
//       attempts++;
//     } else {
//       window.alert(
//         `You've guessed the right number, it took you ${attempts} attempts!`
//       );
//       break;
//     }
//   }
// };

// Kraj igre pogadjanja

// Pretvaranje temperatura

// const textBox = document.getElementById("textBox");
// const celsius = document.getElementById("celsius");
// const fahrenheit = document.getElementById("fahrenheit");
// const result = document.getElementById("result");

// let temp;

// function convert() {
//   temp = Number(textBox.value);
//   if (celsius.checked) {
//     temp = (5 / 9) * (temp - 32);
//     result.textContent = `${temp}°`;
//   } else if (fahrenheit.checked) {
//     temp = (temp * 9) / 5 + 32;
//     result.textContent = `${temp}°`;
//   } else {
//     result.textContent = `Unesite u sta zelite da pretvorite!`;
//   }
// }

// Kraj pretvaranje temperatura

//  random password


class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTAx){
        return this.price + (this.price * salesTAx);
    }
}

const salesTAx = 0.17;

const product1 = new Products("Shirt", 85.47);

product1.displayProduct();

const total = product1.calculateTotal(salesTAx);
console.log(`Total price (with tax): $${total.toFixed(2)}`);