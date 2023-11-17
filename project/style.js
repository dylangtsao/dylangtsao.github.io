projects = document.querySelectorAll(".project");
h1s = document.querySelectorAll(".project h1");
ps = document.querySelectorAll(".project.left p.default");
p_desc = document.querySelectorAll(".project p.descrpt");
for (let i=0; i < projects.length; i++) {
    project = projects[i];
    project.addEventListener("click", () => {
        h1s[i].style.display = (h1s[i].style.display == "none") ? "block" : "none";
        ps[i].style.display = (ps[i].style.display == "none") ? "block" : "none";
        p_desc.forEach((pd) =>{
            pd[i].style.display = (pd[i].style.display == "none") ? "block" : "none";
        });
        
        
    });
}