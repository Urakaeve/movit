// console.log(document.body.children[1]);
// console.log(document.getElementById("joe"));

// document.body.style.backgroundColor = "purple";

// console.log(document.querySelectorAll("p"));

// console.log(document.querySelector("p"));
// console.log(document.getElementsByTagName("p"));

// let pElem = document.querySelector("p");
// document.querySelectorAll("p")[0];
// document.getElementById("Homachi");

// pElem.innerHTML = "Favour Wekpa";
// pElem.style.fontSize = "45px";
// pElem.style.display = "none";

// let redElemCol = document.getElementsByClassName("val");
// redElemCol[1].style.display = "none";

// let divElem = document.getElementById("box");
// // divElem.style.backgroundColor = "pink";

// let bodyElem = document.body;

// // grab the button element
// let btnElem = document.querySelector("button");

// //Add Event listener
// // btnElem.addEventListener("click", clickToChangeColor());

// function clickToChangeColor() {
//     // console.log("Hurray!");
//     bodyElem.style.backgroundColor = "black";
//     bodyElem.style.color = "white";
// }


// function toggleBoxColor() {
//     divElem.classList.toggle("dark");
// }

let loginBtn = document.getElementById("login");
let mainElem = document.getElementById("main");
let closeElem = document.getElementById("close");


// function to open form
function displayForm() {
    // console.log("display");
    mainElem.style.display = "block";
}

// function to close form
function closeForm() {
    mainElem.style.display = "none";

}

