$(".owl-carousel").owlCarousel({
  items: 2,
  loop: true,
  center: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      loop: true,
      center: false,
    },
    1000: {
      items: 2,
      loop: true,
    },
  },
});

const form = document.querySelector("form");
const errorMessage = document.querySelector(".error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target.elements[0].value;
  if (!validateEmail(email)) {
    errorMessage.style.display = "block";
    e.target.elements[0].classList.add("error");
  } else {
    errorMessage.style.display = "none";
    e.target.elements[0].classList.remove("error");
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("nav ul");
const overlay = document.querySelector(".overlay");
const overflow = document.querySelector(".overflow");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("displayBlock");
  hamburger.childNodes[1].classList.toggle("displayNone");
  hamburger.childNodes[3].classList.toggle("displayBlock");
  if (navBar.classList.contains("displayBlock")) {
    overlay.style.display = "Block";
    overflow.style.overflow = "hidden";
  } else {
    overlay.style.display = "None";
    overflow.style.overflow = "visible";
  }
});

overlay.addEventListener("click", () => {
  navBar.classList.toggle("displayBlock");
  hamburger.childNodes[1].classList.toggle("displayNone");
  hamburger.childNodes[3].classList.toggle("displayBlock");
  if (navBar.classList.contains("displayBlock")) {
    overlay.style.display = "Block";
    overflow.style.overflow = "hidden";
  } else {
    overlay.style.display = "None";
    overflow.style.overflow = "visible";
  }
});
