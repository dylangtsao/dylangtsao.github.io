// var content__intro = document.querySelector('.content__intro');
// var one = document.querySelector('.one');
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var ten = document.querySelector(".ten");

var intro__text = document.querySelector(".intro__text_line");
// var intro__text_l = document.querySelector(".intro__text__l");
// var intro__subtitle = document.querySelector('.intro__text_subtitle');
// var eleven = document.querySelector('.eleven');

var backdrop = document.querySelector(".backdrop");

var mobile_nav_links = document.querySelectorAll("#header ul li a");

var content_box = document.querySelector(".box.style2");

var experience_one = document.querySelector(".experience.one_e");
var experience_two = document.querySelector(".experience.two_e");
var two_h1 = document.querySelector(".two_e h1");
var experience_header = document.querySelector(".one_e h1");
var two_header = document.querySelector(".two_e h1");
var experience_one_p = document.querySelectorAll(".one_e p");
var experience_two_p = document.querySelectorAll(".two_e p");
var button_124 = document.querySelector(".button_124");
var button_124_plus = document.querySelector(".button_124_plus");
var button_124_exit = document.querySelector(".button_124_exit");
var button_sosp = document.querySelector(".button_sosp");


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function containsActive(num) {
  if (num.classList.contains("content__line.active")) {
    num.classList.remove("content__line.active");
    num.classList.add("content__line_end");
  }
}
window.addEventListener("scroll", (event) => {
  var start = 150;
  // if (scrollY > 1300) {
  if (scrollY > 800) {
    // eight.classList = "main.style1 content__line.active eight";
    // containsActive(nine);
    // containsActive(eight);
    containsActive(seven);
  }
  // else if (scrollY > 1149) {
  else if (scrollY > 670) {
    seven.classList = "main.style1 content__line.active seven";
    // containsActive(eight);
    // containsActive(ten);
    // containsActive(seven);
    containsActive(six);
  }
  // else if (scrollY > 925) {
  else if (scrollY > 550) {
    
    six.classList = "main.style1 content__line.active six";
    // containsActive(six);
    containsActive(five);
    containsActive(seven);
    // containsActive(nine);
  } else if (scrollY > 420) {
    five.classList = "main.style1 content__line.active five";
    
    // containsActive(five);
    containsActive(seven);
    // containsActive(eight);
    containsActive(four);
    // containsActive(six);
  } else if (scrollY > 320) {
    four.classList = "main.style1 content__line.active four";
    containsActive(three);
    containsActive(five);
    containsActive(six);
  }
  // else if (scrollY > 315) {
  else if (scrollY > start + 80) {
    three.classList = "main.style1 content__line.active three";
    containsActive(two);
    containsActive(four);
  }
  // else if (scrollY > 230) {
  else if (scrollY > start) {
    two.classList = "main.style1 content__line.active two";
    one.classList = "main.style1 content__line_end one";
    // containsActive(three);
  } else if (scrollY > start) {
    // content__intro.classList = 'main.style1 content__line_end';
    one.classList = 'main.style1 content__line.active one';
    // containsActive(two);
  } else if (scrollY > start - 50) {
    // content__intro.classList = 'main.style1 content__line.active';
    containsActive(one);
  } else {
    containsActive(one);
    containsActive(two);
    containsActive(three);
    containsActive(four);
    containsActive(five);
    containsActive(six);
    containsActive(seven);
    // containsActive(eight);
    // containsActive(nine);
    // containsActive(ten);
  }
});
window.addEventListener("scroll", function () {
  if (window.scrollY < 450) {
    let rotation = window.scrollY / 5;
    intro__text.style.transform = `rotate3d(0, 0, 1, ${rotation}deg)`;
  }
});
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 972) {
//     let rotation = window.scrollY / 5;
//     content_box.style.transform = `rotate3d(0, 0, 1, ${rotation}deg)`;
//   }
// });
window.addEventListener("scroll", function () {
  if (window.scrollY > 730 && window.scrollY < 1600) {
    let opacity = (window.scrollY - 730) / (1600 - 730);
    content_box.style.opacity = opacity;
  }
});

const navSlide = () => {
  const mobileNav = document.querySelector(".mobile-nav");
  const navLinks = document.querySelector(".nav-links");

  mobileNav.addEventListener("click", () => {
    if (backdrop.style.display == "block" && mobileNav != null) {
      navLinks.style.transform = "translateX(100%)";
      backdrop.style.display = "none";
      for (let i = 0; i < mobile_nav_links.length; i++) {
        mobile_nav_links[i].style.animation = "none";
        mobile_nav_links[i].style.opacity = "0";
      }
    } else {
      // console.log('clicked');
      navLinks.style.transform = "translateX(50%)";
      backdrop.style.display = "block";
      for (let i = 0; i < mobile_nav_links.length; i++) {
        mobile_nav_links[
          i
        ].style.animation = `fade-in ${2}s cubic-bezier(0.215,0.61,0.355,1) 0.5s forwards`;
      }
    }
  });

  backdrop.addEventListener("click", () => {
    if (mobileNav != null) {
      navLinks.style.transform = "translateX(100%)";
      backdrop.style.display = "none";
    }
  });

  for (let i = 0; i < mobile_nav_links.length; i++) {
    mobile_nav_links[i].addEventListener("click", () => {
      console.log("nav");
      if (backdrop.style.display == "block") {
        navLinks.style.transform = "translateX(100%)";
        backdrop.style.display = "none";
      }
    });
  }
};

experience_one.addEventListener("click", function () {
  // if (button_124_plus.style.display = "flex") {
  //   return;

  // }
  console.log("clicked");
  // experience_one.classList.add(".active");
  experience_one.style.background = "transparent";
  experience_one.style.transform = "rotateY(180deg)";
  experience_one.style.transition = "transform 1s";
  experience_header.style.display = "none";
  for (let i = 0; i < experience_one_p.length; i++) {
    experience_one_p[i].style.display = "block";
    experience_one_p[i].style.transition =
      "opacity 0.5s ease-in-out, transform 1s";
    experience_one_p[i].style.opacity = "1";
    experience_one_p[i].style.transform = "rotateY(180deg)";
  }
  button_124_plus.style.display = "flex";
});

experience_two.addEventListener("click", function () {
  two_header.style.display="none";

  experience_two.style.background = "transparent";
  experience_two.style.transform = "rotateY(180deg)";
  experience_two.style.transition = "transform 1s";
  for (let i = 0; i < experience_two_p.length; i++) {
    experience_two_p[i].style.display = "block";
    experience_two_p[i].style.transition =
      "opacity 0.5s ease-in-out, transform 1s";
    experience_two_p[i].style.opacity = "1";
    experience_two_p[i].style.transform = "rotateY(180deg)";
  }
});

button_124_plus.addEventListener("click", function() {
  console.log("Button 124 plus clicked");
  experience_one.style.background= "linear-gradient(to right bottom, rgb(0, 0, 0), rgb(43, 89, 195))";
  experience_one.style.border = "rgb(97, 157, 217) solid 1px";
  experience_one.style.boxShadow = "none";
  // experience_one.style.backgroundColor = "black";
  experience_one.style.transform = "scale(1)";
  experience_one.style.transform = "rotateY(0deg)";
  experience_one.style.transition = "transform 1s";
  // button_124_exit.style.display = "none";
  // button_124_plus.style.display = "none";
  experience_header.style.display = "flex";
  for (let i = 0; i < experience_one_p.length; i++) {
    experience_one_p[i].style.display = "none";
    // experience_one_p[i].style.transition =
    //   "opacity 0.5s ease-in-out, transform 1s";
    // experience_one_p[i].style.opacity = "0";
    // experience_one_p[i].style.transform = "rotateY(0deg)";
  }
  button_124_plus.style.display = "none";
  // button_124.style.display = "flex";
});
// experience_one.addEventListener("click", function () {
//   // console.log("hi");
//   if (button_124.style.display == "none") {
//     console.log("in");
//     for (let i = 0; i < experience_one_p.length; i++) {
//       experience_one_p[i].style.display = "none";
//     }
//     button_124.style.display = "flex";
//     experience_header.style.display = "flex";
//   }
// });

// button_sosp.addEventListener("click", function () {
//   console.log("Button SOSP clicked");
// });

navSlide();
