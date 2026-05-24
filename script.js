const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light Mode";
    }
    else {
        themeBtn.textContent = "Dark Mode";
    }
})

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links")
menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("show");
})

const openModalBtn = document.querySelector("#openModalBtn");
const closeModalBtn = document.querySelector("#closeModalBtn");
const overLay = document.querySelector("#overlay");

openModalBtn.addEventListener("click", function() {
    overLay.style.display = "flex";
})

closeModalBtn.addEventListener("click", function() {
    overLay.style.display = "none";
})

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    question.addEventListener("click", function() {
        const answer = question.nextElementSibling;

        if(answer.style.display === "block") {
            answer.style.display = "none";
        }
        else {
            answer.style.display = "block";
        }
    })
})