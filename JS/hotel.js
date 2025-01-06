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
let midcontainer2=document.getElementById("midcontainer2")
let forbooking=document.getElementById("forbooking")
let contact=document.getElementById("contact")


arrow.addEventListener("click", fun2)
mid.addEventListener("click",fun3);
midcontainer2.addEventListener("click",fun3);
forbooking.addEventListener("click",fun3);
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
    if (window.matchMedia("(max-width: 925px)").matches) {
      link4.style = "transform: translate(-32vw,30vh);"
    }
    if (window.matchMedia("(max-width: 805px)").matches) {
      link4.style = "transform: translate(-30vw,30vh);"
    }
    if (window.matchMedia("(max-width: 747px)").matches) {
      link4.style = "transform: translate(-28vw,4vh);"
    }
    if (window.matchMedia("(max-width: 747px)").matches) {
      link4.style = "transform: translate(-28vw,4vh);"
    }
    if (window.matchMedia("(max-width: 652px)").matches) {
      link4.style = "transform: translate(-26vw,4vh);"
    }
    if (window.matchMedia("(max-width: 579px)").matches) {
      link4.style = "transform: translate(-24vw,4vh);"
    }
    if (window.matchMedia("(max-width: 558px)").matches) {
      link4.style = "transform: translate(-22vw,4vh);"
    }
    if (window.matchMedia("(max-width: 480px)").matches) {
      link4.style = "transform: translate(-22vw,18vh);"
    }
    forarrow.style = "transform:translate(0vw,0vh)";
    bookcontainer.style.display = "none";
    num3 = 0;
  } else {
    // links.style = "width: 18vw;transform: translate(-4vw,4vh);"
    if (window.matchMedia("(max-width: 925px)").matches) {
      link4.style = " transform: translate(35vw, 10vh);"
    }
    if (window.matchMedia("(max-width: 872px)").matches) {
      link4.style = " transform: translate(34vw, 10vh);"
    }
    if (window.matchMedia("(max-width: 826px)").matches) {
      link4.style = " transform: translate(33vw, 8vh);"
    }
    if (window.matchMedia("(max-width: 765px)").matches) {
      link4.style = " transform: translate(32vw, 7vh);"
    }
    if (window.matchMedia("(max-width: 747px)").matches) {
      link4.style = " transform: translate(32vw, -12vh);"
    }
    if (window.matchMedia("(max-width: 712px)").matches) {
      link4.style = " transform: translate(30vw, -12vh);"
    }
    if (window.matchMedia("(max-width: 652px)").matches) {
      link4.style = " transform: translate(28vw, -13vh);"
    }
    if (window.matchMedia("(max-width: 558px)").matches) {
      link4.style = " transform: translate(25vw, -13vh);"
    }
    if (window.matchMedia("(max-width: 480px)").matches) {
      link4.style = " transform: translate(27vw, 4vh);"
    }
    num2 = 1;
  }
  hamburger.classList.toggle("active")
  boxcontainer2.classList.toggle("active")
})

let num3 = 0;
if (window.matchMedia("(max-width: 925px)").matches) {
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