const project = document.querySelectorAll('.project');
const containers = document.querySelectorAll('.container');
const titles = document.querySelectorAll('.title');
const images = document.querySelectorAll('.image');
const descriptions = document.querySelectorAll('.description');
const buttons = document.querySelectorAll('.link');
const backdrop = document.querySelector('.backdrop');
for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        if (i==0) {
            project[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        } else {
            project[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis/(3*i)}deg)`;
        }
    });
    //mouse enter
    containers[i].addEventListener('mouseenter', (e) => {
        project[i].style.transition = `none`;
        titles[i].style.transform = `translateZ(20px)`;
        images[i].style.transform = `translateZ(130px)`;
        descriptions[i].style.transform = `translateZ(20px)`;
        buttons[i].style.transform = `translateZ(20px)`;
    });  
    //mouse leave
    containers[i].addEventListener('mouseleave', (e) => {
        project[i].style.transition = `all 2s ease`;
        project[i].style.transform = `rotateY(0deg) rotateX(0deg)`;
        titles[i].style.transform = `translateZ(0px)`;
        images[i].style.transform = `translateZ(0px)`;
        descriptions[i].style.transform = `translateZ(0px)`;
        buttons[i].style.transform = `translateZ(0px)`;
    });
    images[i].addEventListener('click', (e) => {
        backdrop.style.display='block';
        // images[i].style.maxWidth = "100vw";
        images[i].style.zIndex = "2";
    });
    backdrop.addEventListener('click', (e) => {
        backdrop.style.display='none';
        images[i].style.maxWidth = "75vw";
        images[i].style.zIndex = "0";
    });
}


