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