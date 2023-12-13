projects = document.querySelectorAll(".project");
h1s = document.querySelectorAll(".project h1");
ps = document.querySelectorAll(".project p");
backdrop = document.querySelector(".backdrop");
backdrop_button = document.querySelector(".backdrop button");
body = document.querySelector("body");
html = document.querySelector("html");
// prs = document.querySelectorAll(".project.right p.default");
p_desc = document.querySelectorAll(".project p.descrpt");

grape_d = document.querySelector(".grape-d");
resume_d = document.querySelector(".resume-d");
flash_d = document.querySelector(".flash-d");
scholar_d = document.querySelector(".scholar-d");
neural_d = document.querySelector(".neural-d");

overlay = document.querySelector(".overlay");

let mediaQuery = window.matchMedia("(max-width: 768px)");

function largeViewportClick() {
    console.log("ion");
    for (let i=0; i < projects.length; i++) {
        projects[i].addEventListener("click", () => {
            h1s[i].style.display = (h1s[i].style.display == "none") ? "block" : "none";
            ps[i].style.display = (ps[i].style.display == "none") ? "block" : "none";
        });
    }
}

function smallViewportClick() {
    let scrollPosition = 0;

    for (let i=0; i < projects.length; i++) {
        project = projects[i];
        backdrop.style.display = "none";
        project.addEventListener("click", () => {
            html.classList.add("prevent-scroll");
            backdrop.style.display = (backdrop.style.display == "none") ? "flex" : "none";
            scrollPosition = window.scrollY || document.documentElement.scrollTop;
            // body.classList.add("prevent-scroll");
            
            // console.log(projects[i].classList);
            if (projects[i].classList.contains("grape")) {
                grape_d.style.display = "block";
            } else if (projects[i].classList.contains("resume")) {
                resume_d.style.display = "block";
            } else if (projects[i].classList.contains("flash")) {
                flash_d.style.display = "block";
            } else if (projects[i].classList.contains("schedule")) {
                scholar_d.style.display = "block";
            } else if (projects[i].classList.containas("neural")) {
                neural_d.style.display = "block";
            }
            // body.bind('touchmove', function(e){e.preventDefault()});
            
            // h1s[i].style.display = (h1s[i].style.display == "none") ? "block" : "none";
            // ps[i].style.display = (ps[i].style.display == "none") ? "block" : "none";
            // prs[i].style.display = (prs[i].style.display == "none") ? "block" : "none";
            // p_desc.forEach((pd) =>{
            //     if (h1s[i].style.display == "none") {
            //         pd.style.fontWeight = "600";
            //         pd.style.fontSize = "1.5em";
            //         pd.style.display = "block";
            //         // project.style.transform("rotateY(180deg)");
            //         // pd.style.transform = "rotateY(180deg)";
            //     } else {
            //         pd.style.display = "none";
            //         // pd.style.transform = "rotateY(0deg)";
            //     }
            // });

            
        });
    }
    backdrop_button.addEventListener("click", () => {
        backdrop.style.display = "none";
        // body.classList.remove("prevent-scroll");
        html.classList.remove("prevent-scroll");
        grape_d.style.display = "none";
        flash_d.style.display = "none";
        resume_d.style.display = "none";
        scholar_d.style.display = "none";
        neural_d.style.display = "none";
        window.scrollTo(0, scrollPosition);
    });
} 


function handleViewpointChange(e) {
    for (let i=0; i < projects.length; i++) {
        // project = projects[i];
        backdrop.style.display = "none";
        projects[i].addEventListener("click", () => {
            // if (html.classList.contains("prevent-scroll")) {
            //     html.classList.remove("prevent-scroll");
            // } else {
            //     html.classList.add("prevent-scroll");
            // }
            // console.log("clicked");
            
            // 
            scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (e.matches) {

                backdrop.style.display = (backdrop.style.display == "none") ? "flex" : "none";
                html.classList.add("prevent-scroll");
                if (projects[i].classList.contains("grape")) {
                    grape_d.style.display = "block";
                } else if (projects[i].classList.contains("resume")) {
                    resume_d.style.display = "block";
                } else if (projects[i].classList.contains("flash")) {
                    flash_d.style.display = "block";
                } else if (projects[i].classList.contains("schedule")) {
                    scholar_d.style.display = "block";
                } else if (projects[i].classList.contains("neural")) {
                    neural_d.style.display = "block";
                }
                
            } else {
                for (let j=0; j < projects.length; j++) {
                    if (projects[j].classList.contains("flipped")) {
                        projects[j].classList.remove("flipped");
                        // overlay.style.display = "none";
                        projects[j].classList.remove("resumev2");
                        projects[j].classList.remove("flashv2");
                        projects[j].classList.remove("scholarv2");
                        projects[j].classList.remove("neuralv2");
                        projects[j].style.zIndex ="0";
                    }
                }
                projects[i].classList.add("flipped");
                overlay.style.display = "block";
                projects[i].style.zIndex ="100";
                if (projects[i].classList.contains("resume")) {
                    projects[i].classList.add("resumev2");
                } else if (projects[i].classList.contains("flash")) {
                    projects[i].classList.add("flashv2");
                } else if (projects[i].classList.contains("schedule")) {
                    projects[i].classList.add("scholarv2");
                } else if (projects[i].classList.contains("neural")) {
                    projects[i].classList.add("neuralv2");
                }
            }
            mediaQuery.addEventListener("change", (e) => {
                if (e.matches) {
                    backdrop.style.display = (backdrop.style.display == "none") ? "flex" : "none";
                    html.classList.add("prevent-scroll");
                    if (projects[i].classList.contains("grape")) {
                        grape_d.style.display = "block";
                    } else if (projects[i].classList.contains("resume")) {
                        resume_d.style.display = "block";
                    } else if (projects[i].classList.contains("flash")) {
                        flash_d.style.display = "block";
                    } else if (projects[i].classList.contains("schedule")) {
                        scholar_d.style.display = "block";
                    } else if (projects[i].classList.contains("neural")) {
                        neural_d.style.display = "block";
                    }
                } else {
                    projects[i].classList.add("flipped");
                    overlay.style.display = "block";
                    projects[i].style.zIndex ="100";
                    if (projects[i].classList.contains("resume")) {
                        projects[i].classList.add("resumev2");
                    } else if (projects[i].classList.contains("flash")) {
                        projects[i].classList.add("flashv2");
                    } else if (projects[i].classList.contains("schedule")) {
                        projects[i].classList.add("scholarv2");
                    } else if (projects[i].classList.contains("neural")) {
                        projects[i].classList.add("neuralv2");
                    }
                }    
            });
            backdrop_button.addEventListener("click", () => {
                backdrop.style.display = "none";
                // body.classList.remove("prevent-scroll");
                html.classList.remove("prevent-scroll");
                grape_d.style.display = "none";
                flash_d.style.display = "none";
                resume_d.style.display = "none";
                scholar_d.style.display = "none";
                neural_d.style.display="none";
                h1s[i].style.display = "block";
                ps[i].style.display = "block";
                window.scrollTo(0, scrollPosition);
            });
        });
        if (!e.matches) {
            let flipbackButton = projects[i].querySelector(".flip-back");
            flipbackButton.addEventListener("click", (e) => {
                projects[i].classList.remove("flipped");
                overlay.style.display = "none";
                projects[i].classList.remove("resumev2");
                projects[i].classList.remove("flashv2");
                projects[i].classList.remove("scholarv2");
                projects[i].classList.remove("neuralv2");
                projects[i].style.zIndex ="0";
                e.stopPropagation();
            });
            // let navbar = document.querySelector(".nav-bar");
            window.addEventListener("scroll", () => {
                let projectRect = projects[i].getBoundingClientRect();
                // let navbarHeight = navbar.offsetHeight;
                if ((projectRect.bottom < 0 || projectRect.top-projectRect.height > window.innerHeight)
                    && projects[i].classList.contains("flipped")) {
                    projects[i].classList.remove("flipped");
                    // console.log("in");
                    overlay.style.display = "none";
                    projects[i].classList.remove("resumev2");
                    projects[i].classList.remove("flashv2");
                    projects[i].classList.remove("scholarv2");
                    projects[i].classList.remove("neuralv2");
                    projects[i].style.zIndex ="0";
                }
            });
        }
        
        // if (e.matches) {
        //     project.addEventListener("click", smallViewportClick);
        // } else {
        //     project.addEventListener("click", largeViewportClick);
        // }
    }
    
    
}

handleViewpointChange(mediaQuery);

mediaQuery.addEventListener("change", handleViewpointChange);
// mediaQuery.addEventListener("change",(e) => {
//     if (e.matches) {
//         // The viewport is less than 768 pixels wide
//         console.log('This is a small screen device');
//         let scrollPosition = 0;

//         for (let i=0; i < projects.length; i++) {
//             project = projects[i];
//             backdrop.style.display = "none";
//             project.addEventListener("click", () => {
//                 html.classList.add("prevent-scroll");
//                 backdrop.style.display = (backdrop.style.display == "none") ? "flex" : "none";
//                 scrollPosition = window.scrollY || document.documentElement.scrollTop;
//                 // body.classList.add("prevent-scroll");
                
//                 // console.log(projects[i].classList);
//                 if (projects[i].classList.contains("grape")) {
//                     grape_d.style.display = "block";
//                 } else if (projects[i].classList.contains("resume")) {
//                     resume_d.style.display = "block";
//                 } else if (projects[i].classList.contains("flash")) {
//                     flash_d.style.display = "block";
//                 } else if (projects[i].classList.contains("schedule")) {
//                     scholar_d.style.display = "block";
//                 }
//                 // body.bind('touchmove', function(e){e.preventDefault()});
                
//                 // h1s[i].style.display = (h1s[i].style.display == "none") ? "block" : "none";
//                 // ps[i].style.display = (ps[i].style.display == "none") ? "block" : "none";
//                 // prs[i].style.display = (prs[i].style.display == "none") ? "block" : "none";
//                 // p_desc.forEach((pd) =>{
//                 //     if (h1s[i].style.display == "none") {
//                 //         pd.style.fontWeight = "600";
//                 //         pd.style.fontSize = "1.5em";
//                 //         pd.style.display = "block";
//                 //         // project.style.transform("rotateY(180deg)");
//                 //         // pd.style.transform = "rotateY(180deg)";
//                 //     } else {
//                 //         pd.style.display = "none";
//                 //         // pd.style.transform = "rotateY(0deg)";
//                 //     }
//                 // });

                
//             });
//         }
//         backdrop_button.addEventListener("click", () => {
//             backdrop.style.display = "none";
//             // body.classList.remove("prevent-scroll");
//             html.classList.remove("prevent-scroll");
//             grape_d.style.display = "none";
//             flash_d.style.display = "none";
//             resume_d.style.display = "none";
//             scholar_d.style.display = "none";
//             window.scrollTo(0, scrollPosition);
//         });

//     } else {
//         // The viewport is at least 768 pixels wide
//         console.log('This is a large screen device');
//         for (let i=0; i < projects.length; i++) {
//             project= projects[i];
//             project.addEventListener("click", () => {
//                console.log("ion"); 
//             });
//         }
//     }
// });

