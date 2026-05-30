const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarmenuBtn = document.querySelector('.nav-menu-btn');
const navbarForm= document.querySelector('.navbar-form');
const navbarformclsbtn= document.querySelector('.navbar-form-close');
const navbarsearchbtn=document.querySelector('.nabar-search-btn');

function navisactive(){
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navbarmenuBtn.classList.toggle('active');
}


navbarmenuBtn.addEventListener('click', navisactive);

