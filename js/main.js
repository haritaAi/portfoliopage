const box1 = document.querySelector(".movie-1");
const box2 = document.querySelector(".movie-2");
const img = document.querySelectorAll(".dog");


box1.addEventListener("click",toggleImage);
box2.addEventListener("click", toggleImage);

function toggleImage(){
  img.forEach(i => i.classList.toggle("hide"));
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click" ,mobilemenu);

const resume = document.getElementById("resume-link");
resume.addEventListener("click",openResume);



function mobilemenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelector("nav-liink");

navLink.forEach(n => {
    n.addEventListener("click",closeMenu);
    
});
function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function openResume(){
    const resDoc = document.querySelector(".resume");    
    const resClose = document.querySelector(".resclose");
      resDoc.classList.toggle("active-resume");
      resClose.addEventListener("Click",closeResume);
    }
function closeResume(){
  
    const resDoc = document.querySelector(".resume");         
     resDoc.classList.remove("active-resume");
}