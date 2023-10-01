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

// var images = document.querySelectorAll('

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
  if (scrollY > 0) {
    intro__text.style.opacity = 1 - scrollY / 200;
  }

  // intro__subtitle.style.opacity = 1 - scrollY/400;
  var start = 150;
  // if (scrollY > 1300) {
  if (scrollY > 800) {
    ten.classList = "main.style1 content__line.active ten";
    containsActive(nine);
  }
  // else if (scrollY > 1149) {
  else if (scrollY > 670) {
    nine.classList = "main.style1 content__line.active nine";
    containsActive(eight);
    containsActive(ten);
    containsActive(seven);
  }
  // else if (scrollY > 925) {
  else if (scrollY > 550) {
    seven.classList = "main.style1 content__line.active seven";
    eight.classList = "main.style1 content__line.active eight";
    containsActive(six);
    containsActive(five);
    containsActive(nine);
  } else if (scrollY > 420) {
    five.classList = "main.style1 content__line.active five";
    six.classList = "main.style1 content__line.active six";
    // containsActive(five);
    containsActive(seven);
    containsActive(eight);
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
    containsActive(three);
  } else if (scrollY > start) {
    // content__intro.classList = 'main.style1 content__line_end';
    // one.classList = 'main.style1 content__line.active one';
    containsActive(two);
  } else if (scrollY > start - 50) {
    // content__intro.classList = 'main.style1 content__line.active';
    containsActive(one);
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

navSlide();
