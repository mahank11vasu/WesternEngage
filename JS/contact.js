let nav = document.getElementById("nav")
let booking = document.getElementById("booking");
let bookcontainer = document.getElementById("bookcontainer");
let forarrow = document.getElementById("forarrow");
let arrow = document.getElementById("arrow");
let num = 0;

window.addEventListener("scroll", fun1);
function fun1() {
  bookcontainer.style.display = "none"
  num = 0;
}

booking.addEventListener("click", fun2)
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

let mid = document.getElementById("mid");
let maincontent = document.getElementById("maincontent");
let contact = document.getElementById("contact")
arrow.addEventListener("click", fun2)


mid.addEventListener("click", fun3);
maincontent.addEventListener("click", fun3);
contact.addEventListener("click", fun3);


function fun3() {
  bookcontainer.style.display = "none";
  num = 0;
}

let name = document.getElementById("name");
let phone = document.getElementById("phone");
let request = document.getElementById("request");
let exit = document.getElementById("close");
let modalcontainer = document.querySelector(".modalcontainer")
let modal = document.querySelector(".modal")
let target = document.getElementById("text");

request.addEventListener("click", fun4)
function fun4() {
  if (name.value == "" || phone.value == "") {
    let html = `Please fill both boxes`;
    target.innerHTML = html;
    name.value = "";
    phone.value = "";
    modalcontainer.classList.add("show");
  }
  else {
    let html = `Thankyou for contacting us. We'll reach you soon!`;
    target.innerHTML = html;
    name.value = "";
    phone.value = "";
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
let num2 = 0;

hamburger.addEventListener("click", () => {
  if (num2 == 1) {
    num2 = 0;
    // links.style = "width: 13vw;transform: translate(0vw,0vh);"
    if (window.matchMedia("(max-width: 850px)").matches) {
      link4.style = " transform: translate(-32vw, 41vh);"
    }else{
      link4.style = " transform: translate(-33vw, 41vh);"
    }
    if (window.matchMedia("(max-width: 785px)").matches) {
      contactcontainer.style = "width: 62vw;transform: translate(15vw, 0vh);"
      link4.style = " transform: translate(-30vw, 41vh);"
    }else{
      contactcontainer.style = "width: 58vw;transform: translate(15vw, 0vh);"
    }
    if (window.matchMedia("(max-width: 730px)").matches) {
      contactcontainer.style = "width: 82vw; transform: translate(0vw, 0vh);"
      link4.style = "transform: translate(-28vw, 38vh);"
    }else{
      contactcontainer.style = "width: 58vw;transform: translate(15vw, 0vh);"
    }
    if (window.matchMedia("(max-width: 667px)").matches) {
      link4.style = "transform: translate(-26vw, 25vh);"
    }else{
      link4.style = " transform: translate(-33vw, 41vh);"
    }
    if (window.matchMedia("(max-width: 579.5px)").matches) {
      contactcontainer.style = "width: 95vw;"
      link4.style = "transform: translate(-22vw, 28vh);"
    }else{
      link4.style = " transform: translate(-33vw, 41vh);"
      contactcontainer.style = "width: 58vw;transform: translate(15vw, 0vh);"
    }
    if (window.matchMedia("(max-width: 480px)").matches) {
      link4.style = "transform: translate(-26vw, 32vh);"
    }
    forarrow.style = "transform:translate(0vw,0vh)";
    bookcontainer.style.display = "none";
    num3 = 0;
  } else {
    // links.style = "width: 18vw;transform: translate(-4vw,4vh);"
    if (window.matchMedia("(max-width: 785px)").matches) {
      link4.style = " transform: translate(30vw, 20vh);"
    }else{
      link4.style = " transform: translate(33vw, 20vh);"
    }
    if (window.matchMedia("(max-width: 730px)").matches) {
      contactcontainer.style = "width: 82vw; transform: translate(0vw, 0vh);"
    }else{
      contactcontainer.style = "width: 65vw; transform: translate(12vw, 0vh);"
    }
    if (window.matchMedia("(max-width: 667px)").matches) {
      link4.style = " transform: translate(28vw, 8vh);"
    }else{
      link4.style = " transform: translate(33vw, 20vh);"
    }
    if (window.matchMedia("(max-width: 579.5px)").matches) {
      contactcontainer.style = "width: 95vw; transform: translate(0vw, 0vh);"
      link4.style = " transform: translate(28vw, 12vh);"
    }else{
      link4.style = " transform: translate(33vw, 20vh);"
      contactcontainer.style = "width: 65vw; transform: translate(12vw, 0vh);"
    }
    if (window.matchMedia("(max-width: 527px)").matches) {
      link4.style = " transform: translate(25vw, 12vh);"
    }else{
      link4.style = " transform: translate(33vw, 20vh);"
    }
    if (window.matchMedia("(max-width: 480px)").matches) {
      link4.style = "transform: translate(30vw, 32vh);"
    }
    num2 = 1;
  }
  hamburger.classList.toggle("active")
  boxcontainer2.classList.toggle("active")
})

// document.querySelectorAll(".items").forEach(n => n.addEventListener("click", () => {

//   hamburger.classList.remove("active")
//   boxcontainer2.classList.remove("active")
// }
// ))

let num3 = 0;
if (window.matchMedia("(max-width: 926px)").matches) {
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
