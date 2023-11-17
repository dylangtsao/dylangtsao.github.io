projects = document.querySelectorAll(".project");
h1s = document.querySelectorAll(".project h1");
ps = document.querySelectorAll(".project p");
// prs = document.querySelectorAll(".project.right p.default");
p_desc = document.querySelectorAll(".project p.descrpt");
for (let i=0; i < projects.length; i++) {
    project = projects[i];
    project.addEventListener("click", () => {
        h1s[i].style.display = (h1s[i].style.display == "none") ? "block" : "none";
        ps[i].style.display = (ps[i].style.display == "none") ? "block" : "none";
        // prs[i].style.display = (prs[i].style.display == "none") ? "block" : "none";
        p_desc.forEach((pd) =>{
            if (h1s[i].style.display == "none") {
                pd.style.display = "block";
                // project.style.transform("rotateY(180deg)");
                pd.style.transform = "rotateY(180deg)";
            } else {
                pd.style.display = "none";
                pd.style.transform = "rotateY(0deg)";
            }
        });
        
    });
}