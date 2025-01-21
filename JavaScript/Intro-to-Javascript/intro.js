// JavaScript/Intro-to-JavaScript/intro.js
// console.log("Hello World!")

// Variables, Data Types
// var num = 5; // General declaration, previously was used to declare global scope
// let num1 = 5; // General declaration, variable takes on current scope
// const num2 = 5; // declaring constants, cannot be changed after

// Boolean - true/false
// null - null value
// undefined - undefined
// Number - number
// String - string (characters )
// Symbol - special type


// Expressions, Operators
// let num1 = 5
// let num2 = 10
// let num3 = 15

// console.log(num1 != num2) // true
// console.log(num1 == num2 && num2 != num3) // false
// console.log(num1 == num2 || num2 != num3) // true

// let add = num1 + num2
// let minus = num1 - num2
// multiply -> *
// division -> /
// modulo -> %

// Loops, Conditionals

// for (let i = 1; i <= 25; i+= 3) { // 1 4 7 10 13
//     if (i % 2 == 0) break
//     console.log(i)
// }

// Arrays, Objects

// let arr = [1,2,3, "hello", {myKey: "value"}, [1,2,3], () => {}]
// console.log(arr[3])

// arr.push("3") // add an element to the array
// arr.pop() // remove an element from the array
// console.log(arr.join()) 


// let arr = [1,2,3,4,5]

// 1. For loop
// for (let i = 0; i < arr.length; i++) {
//     arr[i] += 10
// }
// 2. ForEach
// arr.forEach(function(num, i) {
//     arr[i] += 10
// })

// console.log(arr)

// let car = {
//     brand: "honda", // key:value
//     year: 2005,
//     color: "yellow",
//     type: "odyssey",
//     engine: "off",
//     newCar: {
//         brand: "honda",
//         year: 2005
//     },
//     igniteEngine: () => {
//         this.engine = "on"
//     }
// }


// // Functions
// console.log(sum)
// // Function Declarations
// function sum(a,b) {
//     return a + b
// }
// // Function Expressions
// let sum1 = function (a,b) {
//     return a + b
// }
// // Arrow Functions
// let sum2 = (a,b) => {
//     return a + b
// }
// console.log(sum(10, 20))

// // Classes
// class Car {
//         constructor(type,brand, year, model, color) {
//           this.type= type
//           this.brand = brand
//           this.year = year
//           this.model = model 
//           this.color = color
//         }
//     }



// DOM: Document Object Model 

console.log("Hello World!")
console.log(document)

// document.body.style.backgroundColor = "Yellow" 

// User stories
// 1. AAU, I want to be able to typr a new blog post into a textbox
// 2. AAU, I want to be able to click a button to publish my post
// 3. AAU, I want to be able to view all the blog posts
// 4. Bonus: AAU, I want to be able to delete a blog post


// setup
function setupBlogPage() {
    //create form (after)
    //create input element and display on page
    let blogpost = document.createElement("input")
    blogpost.setAttribute("type", "text")
    blogpost.setAttribute("id", "blogInput")
    document.body.appendChild(blogpost)

    //create button to submit the blog post
    let submitButton = document.createElement("button")
    submitButton.setAttribute("type", "submit")
    submitButton.innerText = "Publish Blog Post"
    submitButton.addEventListener("click", publishPost)
    document.body.appendChild(submitButton)

}
setupBlogPage()

function publishPost(event) {
    //grab data from input field
    let blogInput = document.getElementById("blogInput").value 
    console.log(blogInput)
    let blogPost = document.createElement("div")
    blogPost.innerText = blogInput
    document.body.appendChild(blogPost)
}

//activity;

// 1. store input annd button  elements 