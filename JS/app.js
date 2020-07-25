const sections = document.querySelectorAll('section');
const box = document.querySelector('.box');
const gradients =[
    " linear-gradient(to right top, #ed4264, #ffedbc)",
    " linear-gradient(to right top, #ed4264, #ffedbc)",
    " linear-gradient(to right top, #ed4264, #ffedbc)",
];

const options= {
    threshold:0.7
};

let observer = new IntersectionObserver (navCheck, options);

function navCheck(entries){
    
}