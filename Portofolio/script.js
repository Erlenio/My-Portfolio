let themeSwitch = document.querySelector("#theme");
let body = document.querySelector("body");
let menuBtn = document.querySelector(".bx-menu");
let menu = document.querySelector("#menu");
let savedTheme = localStorage.getItem("theme");

themeSwitch.addEventListener("click", () => {

  if (themeSwitch.classList.contains("bxs-sun")) {
    themeSwitch.className = "bx bxs-moon";
    body.classList.add('dark');
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove('dark');
    localStorage.setItem("theme", "light");
    themeSwitch.className = "bx bxs-sun";
  }
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

if (savedTheme && savedTheme == "dark") {
  body.classList.add("dark");
  themeSwitch.className = "bx bxs-moon";
}

let header = document.querySelector("header");
window.addEventListener("scroll", (event) => {
  let total = body.offsetHeight;
  //parseInt(window.pageYOffset)
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  if (winScroll > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
