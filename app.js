// const parents = document.querySelector(".parents");
// const btn = document.querySelector(".question-btn");

// btn.addEventListener('click',function(){
//     parents.classList.toggle("show-child");
// })

// traversing the dom
// const parents = document.querySelector(".parents");
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const parents = e.currentTarget.parentElement.parentElement.parentElement;
//         parents.classList.toggle("show-child");   
//     })
// })

//using selectors inside the element
const parents = document.querySelectorAll(".parents");
parents.forEach(function(parent){
    const btn = parent.querySelector(".question-btn");
    btn.addEventListener('click',function(){
        parent.classList.toggle("show-child");
    })
})