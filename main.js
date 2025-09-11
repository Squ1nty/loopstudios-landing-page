let hamburgerMenuIcon = document.querySelector(".topNav__hamburgerContainer");
let closingMenuIcon = document.querySelector(".topNav__closingContainer");
let topNavBar = document.querySelector(".topNav__navbar");

let topNavAnchorS = document.querySelectorAll(".navbar__anchor");
let lastTopNavAnchor = topNavAnchorS[topNavAnchorS.length - 1];

let introImg = document.querySelector(".introSection__img");

// Changes introSection image based off screen size
function handleIntroImg(){
  if(window.innerWidth < 769){
    introImg.setAttribute("src", "./images/mobile/image-interactive.jpg");
  }
  else{
    introImg.setAttribute("src", "./images/desktop/image-interactive.jpg");
  }
}

// Onload and resize
window.addEventListener("load", () => {
  handleIntroImg();
  if(window.innerWidth <  769){
    topNavBar.setAttribute("inert", true);
  }
});
window.addEventListener("resize", () => {
  handleIntroImg();
  if(topNavBar.style.left === "100%"){ // If nav pop-out is already open
    if(window.innerWidth > 768){
      hamburgerMenuIcon.style.display = "none";
      hamburgerMenuIcon.setAttribute("inert", true);
      closingMenuIcon.style.display = "none";
      closingMenuIcon.setAttribute("inert", true);
      topNavBar.removeAttribute("inert");
    }
    else{
      hamburgerMenuIcon.style.display = "block";
      hamburgerMenuIcon.removeAttribute("inert");
      closingMenuIcon.style.display = "none";
      closingMenuIcon.setAttribute("inert", true);
      topNavBar.setAttribute("inert", true);
    }
  }
});

// Handle mobile menu focus-trap
lastTopNavAnchor.addEventListener("keydown", (e) => {
  if(e.key === "Tab"){
    e.preventDefault();
    closingMenuIcon.focus();
  }
});

// Handles opening the menu through the hamburger icon
function handleMenuOpen(){
  topNavBar.removeAttribute("inert");
  topNavBar.style.left = "0";
  topNavBar.classList.add("padding-3");

  hamburgerMenuIcon.style.display = "none";
  hamburgerMenuIcon.setAttribute("inert", true);

  closingMenuIcon.style.display = "block";
  closingMenuIcon.removeAttribute("inert");

  closingMenuIcon.focus();
}
hamburgerMenuIcon.addEventListener("click", () => {
  handleMenuOpen();
});
hamburgerMenuIcon.addEventListener("keydown", (e) => {
  if(e.key === "Enter" || e.key === " "){
    e.preventDefault();
    handleMenuOpen();
  }
});

// Handles closing the menu through the cross icon
function handleMenuClose(){
  topNavBar.setAttribute("inert", true);
  topNavBar.style.left = "100%";
  topNavBar.classList.remove("padding-3");

  hamburgerMenuIcon.style.display = "block";
  hamburgerMenuIcon.removeAttribute("inert");

  closingMenuIcon.style.display = "none";
  closingMenuIcon.setAttribute("inert", true);

  hamburgerMenuIcon.focus();
}
closingMenuIcon.addEventListener("click", () => {
  handleMenuClose();
});
closingMenuIcon.addEventListener("keydown", (e) => {
  if(e.key === "Enter" || e.key === " "){
    e.preventDefault();
    handleMenuClose();
  }
});