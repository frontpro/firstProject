const parents = document.querySelector(".parents");
const btn = document.querySelector(".question-btn");

btn.addEventListener('click',function(){
    parents.classList.toggle("show-child");
})