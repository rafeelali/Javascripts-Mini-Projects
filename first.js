// code practice for var

const PromptSync = require("prompt-sync");

// var a = "Ali"
// var a = "Adil"
// //console.log(a)
// a="Rafeel"
// //console.log(a)
// {

// var a = "Ahmed"

// }
// console.log(a)



//code practice for let

// let a = "Pakistan"
// a = "India"

// {
// let a = 26
// console.log(a)

// }
// console.log(a)



// code practice for const

// const a = {name:"Ali", age:31}
// a.name="Adil"
// console.log(a)


// 7 Premitive data types in JS NNSSBBU (Null,Number,Symbol,String,Boolean,BIGINT,Undefined)

// let a=null
// let b=45
// let c=true
// let d=BigInt(420)
// let e=Symbol("Muhammad Ali Adil")
// let f="Ali"
// let g
// console.log(a,b,c,d,e,f,g)

// Non Premitive data types are objects in js

// let item = {

// Sugar: "200KG",
// Rice: "450KG",
// Oil: "650KG",



// }
// console.log("Price for Sugar is " + item.Sugar)



// code practice for printing user input


// let prompt = require ("prompt-sync")()
// let name = prompt("Enter Something: ")
// console.log("You Entered: " + name)

//code for printing items price

// let prompt = require ("prompt-sync")()
// let item = {

// Sugar: "200KG", Oil: "650KG", Rice: "450KG", Egg: "300Doz", DesiGhee: "1200KG"
// }
// while(true)
// {
//     let name = prompt("Type Item Name or 'exit' to stop:")
// if(name=="exit") breaks;
// console.log(item[name] || "Not in Stock")

// }


// Code for BMI Calculator

let prompt = require ("prompt-sync")()
let weight = parseFloat(prompt("Enter Your Weight in Kg: "))
let height = parseFloat(prompt("Enter Your Height in m: "))
let BMI = weight/(height**2)
console.log("Your BMI is: " + BMI.toFixed(2))

if(BMI<18)
{
console.log("Your BMI is:" +BMI+ " Underweight")
}
else if (BMI<25)
{
console.log("Your BMI is:" +BMI+ " Normal")
}
else{
console.log("Your BMI is:" +BMI+ " Overweight")
}

