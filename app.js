
let closeBtn = document.querySelector(".close");
let openBtn = document.querySelector('.open')
let navBar = document.querySelector('nav');

/* let openIcon = document.querySelector(".fs-bars");
let closeIcon = document.querySelector(".fs-times"); */

openBtn.addEventListener("click", () => {
    navBar.style.right = "0";
})

closeBtn.addEventListener("click", ()=> {
    navBar.style.right = "-100%"; 
  
    
})


