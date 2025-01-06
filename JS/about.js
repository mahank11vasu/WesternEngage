let nav = document.getElementById("nav")
let booking = document.getElementById("booking");
let bookcontainer = document.getElementById("bookcontainer");
let arrow = document.getElementById("arrow");
let num = 0;

window.addEventListener("scroll", fun1);
function fun1() {
  bookcontainer.style.display="none"
  num=0;
}

booking.addEventListener("click", fun2)
function fun2() {
    if (num==1) {
        num=0;
        // console.log(num);
        bookcontainer.style.display = "none";
      }else{
        bookcontainer.style.display = "block";
        num=1;
    }    
}

let mid=document.getElementById("mid")
let maincontent=document.getElementById("maincontent")
let contact=document.getElementById("contact")


arrow.addEventListener("click", fun2)
mid.addEventListener("click",fun3);
maincontent.addEventListener("click",fun3);
contact.addEventListener("click",fun3);


function fun3(){
  bookcontainer.style.display = "none";
  num=0;
}

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
    if (window.matchMedia("(max-width: 899px)").matches) {
      link4.style = "transform: translate(-5vw, 17vh);"
    }
    if (window.matchMedia("(max-width: 850px)").matches) {
      link4.style = "transform: translate(-5vw, 16vh);"
    }
    if (window.matchMedia("(max-width: 806px)").matches) {
      link4.style = "transform: translate(-5vw, 15vh);"
    }
    if (window.matchMedia("(max-width: 730px)").matches) {
      link4.style = "transform: translate(-5vw, 10vh);"
    }
    if (window.matchMedia("(max-width: 639.5px)").matches) {
      link4.style = "transform: translate(-5vw, 5vh);"
    }
    if (window.matchMedia("(max-width: 579.5px)").matches) {
      link4.style = "transform: translate(-5vw, -8vh);"
    }
    if (window.matchMedia("(max-width: 480px)").matches) {
      link4.style = "transform: translate(-27vw, 33vh);"
    }
    forarrow.style = "transform:translate(0vw,0vh)";
    bookcontainer.style.display = "none";
    num3 = 0;
  } else {
    // links.style = "width: 18vw;transform: translate(-4vw,4vh);"
    if (window.matchMedia("(max-width: 899px)").matches) {
      link4.style = " transform: translate(60vw, -6vh);"
    }
    if (window.matchMedia("(max-width: 850px)").matches) {
      link4.style = " transform: translate(58vw, -6vh);"
    }
    if (window.matchMedia("(max-width: 806px)").matches) {
      link4.style = " transform: translate(54vw, -8vh);"
    }
    if (window.matchMedia("(max-width: 806px)").matches) {
      link4.style = " transform: translate(52vw, -10vh);"
    }
    if (window.matchMedia("(max-width: 697px)").matches) {
      link4.style = " transform: translate(49vw, -10vh);"
    }
    if (window.matchMedia("(max-width: 639.5px)").matches) {
      link4.style = " transform: translate(47vw, -12vh);"
    }
    if (window.matchMedia("(max-width: 602px)").matches) {
      link4.style = " transform: translate(46vw, -13vh);"
    }
    if (window.matchMedia("(max-width: 579.5px)").matches) {
      link4.style = " transform: translate(46vw, -25vh);"
    }
    if (window.matchMedia("(max-width: 480px)").matches) {
      link4.style = " transform: translate(30vw, 33vh);"
    }
    num2 = 1;
  }
  hamburger.classList.toggle("active")
  boxcontainer2.classList.toggle("active")
})

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