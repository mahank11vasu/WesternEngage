const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');

    if (status === 'success') 
    {
        alert('Thank you for your submission!');
    } 
    else if (status === 'error') 
    {
        alert('Oops! Something went wrong.');
    }



const myslide = document.querySelectorAll('.myslide'),
  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(' active', '');
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}


let nav = document.getElementById("nav")
let booking = document.getElementById("booking");
let arrow = document.getElementById("arrow");
let bookcontainer = document.getElementById("bookcontainer");
let num = 0;

window.addEventListener("scroll", fun1);
function fun1() {
  nav.style = "  background-image: linear-gradient(rgba(11, 11, 11), rgba(11, 11, 11));"
  bookcontainer.style = "  background-image: linear-gradient(rgba(11, 11, 11), rgba(11, 11, 11));"
  bookcontainer.style.display = "none"
  num = 0;
  up = window.scrollY;
  if (up == 0) {
    nav.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";
    bookcontainer.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";
  }
}

booking.addEventListener("click", fun2)
arrow.addEventListener("click", fun2)
function fun2() {
  if (num == 1) {
    num = 0;
    // console.log(num);
    bookcontainer.style.display = "none";
  } else {
    bookcontainer.style.display = "block";
    num = 1;
  }
}

let mid = document.getElementById("mid")
let mid2 = document.getElementById("mid2")
let attractions = document.getElementById("attractions")
let accomodations = document.getElementById("accomodations")
let amenities = document.getElementById("amenities")
let customers = document.querySelector(".customers")
let contact = document.getElementById("contact")

mid.addEventListener("click", fun3);
mid2.addEventListener("click", fun3);
attractions.addEventListener("click", fun3);
accomodations.addEventListener("click", fun3);
amenities.addEventListener("click", fun3);
customers.addEventListener("click", fun3);
contact.addEventListener("click", fun3);


function fun3() {
  bookcontainer.style.display = "none";
  num = 0;
  num3=0;
  if (window.matchMedia("(max-width: 925px)").matches) {
    forarrow.style = "transform:translate(0vw,0vh)";
  }
}


let nme = document.getElementById("nme");
let number = document.getElementById("number");
let request = document.getElementById("request");
let exit = document.getElementById("close")
let modalcontainer = document.querySelector(".modalcontainer")
let modal = document.querySelector(".modal")
let target = document.getElementById("text");

request.addEventListener("click", fun4)
function fun4() 
{
  if (nme.value == "" || number.value == "") 
  {
    let html = `Please fill both boxes`;
    target.innerHTML = html;
    nme.value = "";
    number.value = "";
    modalcontainer.classList.add("show");
  }
  else {
    let html = `Thankyou for contacting us. We'll reach you soon!`;
    target.innerHTML = html;
    nme.value = "";
    number.value = "";
    modalcontainer.classList.add("show");
  }
}



exit.addEventListener("click", () => {
  modalcontainer.classList.remove("show");
})



const hamburger = document.querySelector(".hamburger");
const boxcontainer2 = document.querySelector(".boxcontainer2");
const link4 = document.getElementById("link4");
const contactcontainer = document.getElementById("contactcontainer");
const links = document.getElementById("links");
let forarrow = document.getElementById("forarrow");
let num2 = 0;
let num3 = 0;
up = window.scrollY;

hamburger.addEventListener("click", () => {
  bookcontainer.style = "  background-image: linear-gradient(rgba(11, 11, 11), rgba(11, 11, 11));"
  if (num2 == 1) {
    num2 = 0;
    if (window.matchMedia("(max-width: 925px)").matches) {
      if (up == 0) {
        nav.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";
      }
    }
    forarrow.style = "transform:translate(0vw,0vh)";
    bookcontainer.style.display = "none";
    num3 = 0;
  } else {
    if (window.matchMedia("(max-width: 925px)").matches) {
      nav.style.backgroundImage = "linear-gradient(rgba(11,11,11), rgba(11,11,11))";
    }
    num2 = 1;
  }
  hamburger.classList.toggle("active")
  boxcontainer2.classList.toggle("active")
})


if (window.matchMedia("(max-width: 925px)").matches || window.matchMedia("(max-width: 480px)").matches ) {
  booking.addEventListener("click", funx)
  arrow.addEventListener("click", funx)
  function funx() {
    if (num3 == 1) {
      num3 = 0;
      // console.log(num);
      bookcontainer.style.display = "none";
      forarrow.style = "transform:translate(0vw,0vh)";
    } else {
      forarrow.style = "transform:translate(0vw,-5vh)";
      bookcontainer.style.display = "block";
      num3 = 1;
    }
  }
  window.addEventListener("scroll", funy);
  function funy() {
    forarrow.style = "transform:translate(0vw,0vh)";
    bookcontainer.style.display = "none"
    num3 = 0;
  }
}
