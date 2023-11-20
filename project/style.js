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
        window.scrollTo(0, scrollPosition);
    });
} 


function handleViewpointChange(e) {
    for (let i=0; i < projects.length; i++) {
        project = projects[i];
        backdrop.style.display = "none";
        project.addEventListener("click", () => {
            html.classList.add("prevent-scroll");
            backdrop.style.display = (backdrop.style.display == "none") ? "flex" : "none";
            scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (e.matches) {
                if (projects[i].classList.contains("grape")) {
                    grape_d.style.display = "block";
                } else if (projects[i].classList.contains("resume")) {
                    resume_d.style.display = "block";
                } else if (projects[i].classList.contains("flash")) {
                    flash_d.style.display = "block";
                } else if (projects[i].classList.contains("schedule")) {
                    scholar_d.style.display = "block";
                }
            } else {
                h1s[i].style.display = (h1s[i].style.display == "none") ? "block" : "none";
                ps[i].style.display = (ps[i].style.display == "none") ? "block" : "none";
                
            }
            mediaQuery.addEventListener("change", (e) => {
                if (e.matches) {
                    if (projects[i].classList.contains("grape")) {
                        grape_d.style.display = "block";
                    } else if (projects[i].classList.contains("resume")) {
                        resume_d.style.display = "block";
                    } else if (projects[i].classList.contains("flash")) {
                        flash_d.style.display = "block";
                    } else if (projects[i].classList.contains("schedule")) {
                        scholar_d.style.display = "block";
                    }
                } else {
                    h1s[i].style.display = (h1s[i].style.display == "none") ? "block" : "none";
                    ps[i].style.display = (ps[i].style.display == "none") ? "block" : "none";
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
                h1s[i].style.display = "block";
                ps[i].style.display = "block";
                window.scrollTo(0, scrollPosition);
            });
        });
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

