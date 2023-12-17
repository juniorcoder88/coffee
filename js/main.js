let lin = document.querySelector(".lin");
let nav = document.querySelector("nav");

lin.onclick = function () {
  nav.classList.toggle("hide");
};
nav.onclick = function () {
  nav.classList.remove("hide");
};

let up = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY > 600) {
    up.style.right = "10px";
  } else {
    up.style.right = "-70px";
  }
};
