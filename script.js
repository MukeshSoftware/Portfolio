// Typing Effect

const text = [
"Executive GET - TASL",
"Supply Chain Operations Engineer",
"Manufacturing Process Improvement Specialist",
"Industrial Engineer"
];

let index = 0;
let charIndex = 0;

function typingEffect() {
if (charIndex < text[index].length) {
document.querySelector(".typing").textContent += text[index].charAt(charIndex);
charIndex++;
setTimeout(typingEffect, 100);
} else {
setTimeout(eraseEffect, 2000);
}
}

function eraseEffect() {
if (charIndex > 0) {
document.querySelector(".typing").textContent =
text[index].substring(0, charIndex - 1);
charIndex--;
setTimeout(eraseEffect, 50);
} else {
index = (index + 1) % text.length;
setTimeout(typingEffect, 200);
}
}

typingEffect();


// Projects

const projects = [
{
title:"TASL Supply Chain Operations",
desc:"Supported aerospace production planning, inventory management and continuous improvement initiatives."
},
{
title:"Friction Stir Welding Optimization",
desc:"Optimized Aluminium 6061-T6 welding parameters using experimental techniques."
},
{
title:"Lithium-ion Battery Recycling",
desc:"Developed sustainable recovery and recycling process model."
}
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
const div = document.createElement("div");
div.classList.add("card");

div.innerHTML = `<h3>${project.title}</h3><p>${project.desc}</p>`;
projectList.appendChild(div);
});


// Experience Animation

const cards = document.querySelectorAll(".experience-card");

window.addEventListener("scroll", () => {
cards.forEach(card => {
const pos = card.getBoundingClientRect().top;
const screenPos = window.innerHeight / 1.3;

if (pos < screenPos) {
card.classList.add("show");
}
});
});


// KPI Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;
const inc = target / 100;

if (count < target) {
counter.innerText = Math.ceil(count + inc);
setTimeout(updateCounter, 20);
} else {
counter.innerText = target;
}

};

updateCounter();

});


// EmailJS (Replace with your keys)

(function(){
emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
e.preventDefault();

emailjs.sendForm(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
this
).then(() => {
alert("Message Sent Successfully!");
this.reset();
}, () => {
alert("Message Failed!");
});

});
