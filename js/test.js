console.log("I am here");

let heroDescription = document.getElementById("description-for-the-hero");
console.log(heroDescription.innerHTML);
console.log("Hello world!");

const myName = "Jonas Schmedtmann";
const h1 = document.getElementById("heading-primary");
console.log(h1);

h1.addEventListener("click", function () {
  h1.textContent = myName;
  h1.style.backgroundColor = "red";
  h1.style.padding = "5rem";
});
