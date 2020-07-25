/*const sections = document.querySelectorAll('section');
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
entries.forEach(entry =>{
const className = entry.target.className;
console.activeAnchor =document.querySelector('[data-page=${className}]');
const gradientIndex= entry.target.getAttribute('data-index');
const coords = activeAnchor.getBoundingClientRect();
const directions = {
    height: coords.height,
    width: coords.width,
    top: coords.top,
    left: coords.left,
};
if(entry.inIntersecting){
    box.style.setProperty('left', '${directions.left}px');
    box.style.setProperty('top', '${directions.top}px');
    box.style.setProperty('width', '${directions.width}px');
    box.style.setProperty('height', '${directions.height}px');

}
});
}
sections.forEach(section =>{
  observer.observe(section);  
});*/