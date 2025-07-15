/*

 ********4 Pillers of DOM**********
 1. Selection of an Element
 2. Changing HTML
 3. Changing CSS 
 4. Event Listener

*/

// 1. Selection of an Element from html in JS
// for element 
let a = document.querySelector("h1");
// console.log(a);


 // for ID 
let b= document.querySelector("#myId");
// console.log(b);
// // for Class
// const c = document.querySelector(".Class_Name");
// console.log(c);

/* Piller - 02 */
// for change 
// document.querySelector("h1").innerHTML = "Shairf";
// b.innerHTML = "SUST";

/* Changing CSS -> Piller =03 */
// a.style.backgroundColor = "Green";
// a.style.color = "Yellow";


/* Event Listener */

a.addEventListener("click",function(){
   a.innerHTML = "Hey Sharif";
   a.style.backgroundColor = "skyblue"
})

b.addEventListener("click", function()
{
   b.innerHTML = "Are You actually  read in SUST";
    b.style.backgroundColor = "fresh"
})
