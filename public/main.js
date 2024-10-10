

// scrooling on navbar
window.onscroll = function(){
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if(window.scrollY > fixedNav){
    header.classList.add("nav-fixed");
  }else{
    header.classList.remove("nav-fixed");
  }
}

// target hamburger
const btn = document.querySelector("#btn");
const menu = document.querySelector("#menu");


// hamburger
function hamburger(e){
  e.classList.toggle("hamburger-active");
  menu.classList.toggle("hidden")
}

//click anywhere
// window.addEventListener("click", e => {
//   if(e.target != btn && e.target != menu){
//     btn.classList.remove("hamburger-active");
//     menu.classList.add("hidden")
//   }
// })

// target darkMode Toggle
const darkToggle = document.querySelector("#darkToggle"),
      html = document.documentElement,
      darkToggleSm = document.querySelector("#darkToggleSm"),
      github = document.querySelector("#github"),
      badgeImg = document.querySelectorAll(".tech");


// techBadge
function techBadge(theme){
  badgeImg.forEach((img) => {
    if (img.src.includes("?theme=")) {
      img.src = img.src.replace(/(theme=)(light|dark)/, `$1${theme}`);
    }
  });
}

// darkMode
function toggleTheme(isDark){
  let theme = html.dataset.theme = isDark ? "dark" : "light";
  darkToggle.checked = isDark;
  darkToggleSm.checked = isDark;

  
  
  if(isDark){
    github.setAttribute("fill","#fff");
    localStorage.theme = "dark";
    techBadge(theme)
  }else{
    github.removeAttribute("fill");
    localStorage.theme = "light";
    techBadge(theme)
  };
}

// if input checked
darkToggle.addEventListener("click",()=>{
  toggleTheme(darkToggle.checked)
})

darkToggleSm.addEventListener("click",()=>{
  toggleTheme(darkToggleSm.checked)
});

// localstorage matchMedia
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
  darkToggleSm.checked = true;
  
} else {
  darkToggle.checked = false;
  darkToggleSm.checked = false;
  
};

//alert coming soon 
function comingSoon(){
  alert("stay tuned, coming soon")
};

//whatsApp message

function sendWhatsApp(){
  let urlToWhatsApp = `https://wa.me/6287762399040?text=hello nama saya ${nama.value} dan saya mau ${caption.value}`;
  window.open(urlToWhatsApp,"_blank");
  }