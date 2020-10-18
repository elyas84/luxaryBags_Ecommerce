
let closeBtn = document.querySelector(".close");
let openBtn = document.querySelector('.open')
let navBar = document.querySelector('nav');
let listItem = document.querySelectorAll('ul li');

/* let openIcon = document.querySelector(".fs-bars");
let closeIcon = document.querySelector(".fs-times"); */

openBtn.addEventListener("click", () => {
    navBar.style.right = "0";

for (var i=0; i<listItem.length; i++) {

    listItem[i].classList.add('animate__animated', 'animate__fadeInRight');
   
}
    
})

closeBtn.addEventListener("click", ()=> {
    navBar.style.right = "-100%"; 
  
})


