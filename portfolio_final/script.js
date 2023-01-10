/* hamburger menu */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/* scroll */

let endLink = document.querySelector(".end_link");

let topPage = document.querySelector("#top");

function navigateTop() {
  topPage.scrollIntoView({ behavior: "smooth" });
}
/* Tema 1 */

let gwLink = document.querySelector("#gw_link");

let gwHead = document.querySelector("#gw_head");

function navigateGw() {
  gwHead.scrollIntoView({ behavior: "smooth" });
}

/* Tema 2 */
let uxLink = document.querySelector("#ux_link");

let uxHead = document.querySelector("#ux_head");

function navigateUx() {
  uxHead.scrollIntoView({ behavior: "smooth" });
}
/* Tema 3 */
let animationLink = document.querySelector("#animation_link");

let animationHead = document.querySelector("#animation");

function navigateAnimation() {
  animationHead.scrollIntoView({ behavior: "smooth" });
}
/* Tema 4 */
let indholdLink = document.querySelector("#indhold_link");

let indholdHead = document.querySelector("#indhold");

function navigateIndhold() {
  indholdHead.scrollIntoView({ behavior: "smooth" });
}
