const menu = document.querySelector("#menu");

window.onscroll = function(){
  const header = document.querySelector("header")
  const fixedNav = header.offsetTop;

  if(window.scrollY > fixedNav){
    header.classList.add("nav-fixed");
    header.classList.remove("absolute");
  }else{
    header.classList.remove("nav-fixed");
  }
}

let func = "function";

function hamburger(e){
  e.classList.toggle("hamburger-active");
  menu.classList.toggle("hidden")
}

let funct = () => {
  console.log("heder")
}