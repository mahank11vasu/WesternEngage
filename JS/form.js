let nav = document.getElementById("nav")
let booking = document.getElementById("booking");
let bookcontainer = document.getElementById("bookcontainer");
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

let mid = document.getElementById("mid")
// let midcontainer2=document.getElementById("midcontainer2")
let midcontainer3 = document.getElementById("midcontainer3")
let formcontainer = document.getElementById("formcontainer")
let contact = document.getElementById("contact")

arrow.addEventListener("click", fun2)
mid.addEventListener("click", fun3);
// midcontainer2.addEventListener("click",fun3);
midcontainer3.addEventListener("click", fun3);
formcontainer.addEventListener("click", fun3);
contact.addEventListener("click", fun3);


function fun3() {
  bookcontainer.style.display = "none";
  num = 0;
}

let submit = document.getElementById("submit");
let exit = document.getElementById("close");
let hotel = document.getElementById("hotel");
let camp = document.getElementById("camp");
let tour = document.getElementById("tour");
let formatfield = document.getElementsByClassName("formatfield");
let date = document.getElementsByClassName("date");
let select = document.getElementsByClassName("select");
let modalcontainer = document.querySelector(".modalcontainer");
let modal = document.querySelector(".modal");
let target = document.getElementById("text");
let textarea = document.getElementById("textarea");


submit.addEventListener("click", fun4)
function fun4() {
  i = 0;
  if (formatfield[i].value == "" || formatfield[i + 1].value == "" || formatfield[i + 2].value == "") {
    let html = `Please fill all the required fields.`;
    target.innerHTML = html;
    formatfield[i].style = `border:3px solid red;`
    formatfield[i + 1].style = `border:3px solid red;`
    formatfield[i + 2].style = `border:3px solid red;`
    modalcontainer.classList.add("show");
  }
  else {
    handler1 = 1;
    handler2 = 1;
    if (formatfield[i + 1].value.length > 0) {
      pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (formatfield[i + 1].value.match(pattern)) {
        handler1 = 1;
      } else {
        let html = `Please enter valid details.`;
        target.innerHTML = html;
        formatfield[i + 1].style = `border:3px solid red;`
        modalcontainer.classList.add("show");
        handler1 = 0;
      }
    }
    // console.log(handler1)

    if (formatfield[i + 2].value.length > 0) {
      pattern2 = /^[6-9]\d{9}$/;
      if (formatfield[i + 2].value.match(pattern2)) {
        handler2 = 1;
      } else {
        let html = `Please enter valid details.`;
        target.innerHTML = html;
        formatfield[i + 2].style = `border:3px solid red;`
        modalcontainer.classList.add("show");
        handler2 = 0;
      }
    }

    if (handler1 == 1 & handler2==1) {
      let html = `Thankyou for contacting us. We'll reach you soon!`;
      target.innerHTML = html;
      modalcontainer.classList.add("show");
    }
  }
}

exit.addEventListener("click", () => {
  modalcontainer.classList.remove("show");
  formatfield[i].style = `border:none;`
  formatfield[i + 1].style = `border:none;`
  formatfield[i + 2].style = `border:none;`
  formatfield[i].value = "";
  formatfield[i + 1].value = "";
  formatfield[i + 2].value = "";
  date[i].value = "";
  date[i + 1].value = "";
  hotel.checked = false;
  camp.checked = false;
  tour.checked = false;
  select[i].selectedIndex = 0;
  select[i + 1].selectedIndex = 0;
  select[i + 2].selectedIndex = 0;
  textarea.value = "";
})

const hamburger = document.querySelector(".hamburger");
const boxcontainer2 = document.querySelector(".boxcontainer2");
const link4 = document.getElementById("link4");
const contactcontainer = document.getElementById("contactcontainer");
const links = document.getElementById("links");
let forarrow = document.getElementById("forarrow");
let num2 = 0;

hamburger.addEventListener("click", () => {
  if (num2 == 1) {
    num2 = 0;
    // links.style = "width: 13vw;transform: translate(0vw,0vh);"
    if (window.matchMedia("(max-width: 928px)").matches) {
      link4.style = "transform: translate(-33vw, 79vh);"
    }
    if (window.matchMedia("(max-width: 875.5px)").matches) {
      link4.style = "transform: translate(-33vw,79vh);"
    }
    if (window.matchMedia("(max-width: 828px)").matches) {
      link4.style = "transform: translate(-30vw,79vh);"
    }
    if (window.matchMedia("(max-width: 807.5px)").matches) {
      link4.style = "transform: translate(-30vw,79vh);"
    }
    if (window.matchMedia("(max-width: 749px)").matches) {
      link4.style = "transform: translate(-27vw, 75vh);"
    }
    if (window.matchMedia("(max-width: 651.5px)").matches) {
      link4.style = "transform: translate(-27vw,75vh);"
    }
    if (window.matchMedia("(max-width: 626px)").matches) {
      link4.style = "transform: translate(-25vw,75vh);"
    }
    if (window.matchMedia("(max-width: 579px)").matches) {
      link4.style = "transform: translate(-24vw,75vh);"
    }
    if (window.matchMedia("(max-width: 558px)").matches) {
      link4.style = "transform: translate(-22vw,75vh);"
    }
    if (window.matchMedia("(max-width: 480px)").matches) {
      link4.style = "transform: translate(-22vw,77vh);"
    }
    forarrow.style = "transform:translate(0vw,0vh)";
    bookcontainer.style.display = "none";
    num3 = 0;
  } else {
    // links.style = "width: 18vw;transform: translate(-4vw,4vh);"
    if (window.matchMedia("(max-width: 928px)").matches) {
      link4.style = " transform: translate(35vw, 58vh);"
    }
    if (window.matchMedia("(max-width: 875.5px)").matches) {
      link4.style = " transform: translate(34vw, 58vh);"
    }
    if (window.matchMedia("(max-width: 828px)").matches) {
      link4.style = " transform: translate(33vw, 58vh);"
    }
    if (window.matchMedia("(max-width: 767.5px)").matches) {
      link4.style = " transform: translate(32vw, 58vh);"
    }
    if (window.matchMedia("(max-width: 749px)").matches) {
      link4.style = " transform: translate(32vw, 58vh);"
    }
    if (window.matchMedia("(max-width: 711.5px)").matches) {
      link4.style = " transform: translate(30vw, 58vh);"
    }
    if (window.matchMedia("(max-width: 651.5px)").matches) {
      link4.style = " transform: translate(28vw, 58vh);"
    }
    if (window.matchMedia("(max-width: 579px)").matches) {
      link4.style = " transform: translate(25vw, 58vh);"
    }
    if (window.matchMedia("(max-width: 558px)").matches) {
      link4.style = " transform: translate(25vw, 58vh);"
    }
    if (window.matchMedia("(max-width: 480px)").matches) {
      link4.style = " transform: translate(27vw, 65vh);"
    }
    num2 = 1;
  }
  hamburger.classList.toggle("active")
  boxcontainer2.classList.toggle("active")
})

let num3 = 0;
if (window.matchMedia("(max-width: 928px)").matches) {
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