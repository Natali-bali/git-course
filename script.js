let i = document.querySelector('#input');
let s = document.querySelector('#start');
let p = document.querySelector('#pause');
let circle = document.querySelector('circle');
let perimeter = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;
let offset;
const a = new Timer(i, s, p, {
    onStart(totalTime) {  
        duration = totalTime;     
    },
    onTick(remainingTime){
        offset = perimeter*remainingTime/duration - perimeter;    
        circle.setAttribute('stroke-dashoffset', offset);
    },
    onComplete(){
        console.log('completed');
    }
});
