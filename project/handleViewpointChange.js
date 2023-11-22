function handleViewpointChange(e) {
  for (let i = 0; i < projects.length; i++) {
    // project = projects[i];
    backdrop.style.display = "none";
    projects[i].addEventListener("click", function flipCard() {
      // if (html.classList.contains("prevent-scroll")) {
      //     html.classList.remove("prevent-scroll");
      // } else {
      //     html.classList.add("prevent-scroll");
      // }
      // console.log("clicked");
      projects[i].classList.add("flipped");
      projects[i].removeEventListener("click", flipCard);

      // backdrop.style.display = (backdrop.style.display == "none") ? "flex" : "none";
      // scrollPosition = window.scrollY || document.documentElement.scrollTop;
      // if (e.matches) {
      //     html.classList.add("prevent-scroll");
      //     if (projects[i].classList.contains("grape")) {
      //         grape_d.style.display = "block";
      //     } else if (projects[i].classList.contains("resume")) {
      //         resume_d.style.display = "block";
      //     } else if (projects[i].classList.contains("flash")) {
      //         flash_d.style.display = "block";
      //     } else if (projects[i].classList.contains("schedule")) {
      //         scholar_d.style.display = "block";
      //     }
      // } else {
      //     h1s[i].style.display = (h1s[i].style.display == "none") ? "block" : "none";
      //     ps[i].style.display = (ps[i].style.display == "none") ? "block" : "none";
      // }
      // mediaQuery.addEventListener("change", (e) => {
      //     if (e.matches) {
      //         html.classList.add("prevent-scroll");
      //         if (projects[i].classList.contains("grape")) {
      //             grape_d.style.display = "block";
      //         } else if (projects[i].classList.contains("resume")) {
      //             resume_d.style.display = "block";
      //         } else if (projects[i].classList.contains("flash")) {
      //             flash_d.style.display = "block";
      //         } else if (projects[i].classList.contains("schedule")) {
      //             scholar_d.style.display = "block";
      //         }
      //     } else {
      //         h1s[i].style.display = (h1s[i].style.display == "none") ? "block" : "none";
      //         ps[i].style.display = (ps[i].style.display == "none") ? "block" : "none";
      //     }
      // });
      // backdrop_button.addEventListener("click", () => {
      //     backdrop.style.display = "none";
      //     // body.classList.remove("prevent-scroll");
      //     html.classList.remove("prevent-scroll");
      //     grape_d.style.display = "none";
      //     flash_d.style.display = "none";
      //     resume_d.style.display = "none";
      //     scholar_d.style.display = "none";
      //     h1s[i].style.display = "block";
      //     ps[i].style.display = "block";
      //     window.scrollTo(0, scrollPosition);
      // });
    });
    let flipbackButton = project.querySelector(".flip-back");
    flipbackButton.addEventListener("click", (e) => {
      projects[i].classList.remove("flipped");
      e.stopPropagation();
    });
    // if (e.matches) {
    //     project.addEventListener("click", smallViewportClick);
    // } else {
    //     project.addEventListener("click", largeViewportClick);
    // }
  }
}
