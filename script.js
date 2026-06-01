// Loading Screen

window.addEventListener("load", () => {

document.getElementById("loader").style.opacity = "0";

setTimeout(() => {
document.getElementById("loader").style.display = "none";
},1000);

});

// Scroll Reveal

const cards = document.querySelectorAll(".car-card");

window.addEventListener("scroll", () => {

cards.forEach(card => {

let top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

});

});

// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

let count=0;

let target=parseInt(counter.innerText);

let interval=setInterval(()=>{

count+=Math.ceil(target/100);

counter.innerText=count;

if(count>=target){

counter.innerText=target;
clearInterval(interval);

}

},20);

});