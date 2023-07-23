const project = document.querySelectorAll('.project');
const containers = document.querySelectorAll('.container');
const titles = document.querySelectorAll('.title');
const images = document.querySelectorAll('.image');
const descriptions = document.querySelectorAll('.description');
const buttons = document.querySelectorAll('.link');

for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        console.log(xAxis);
        if (i==1) {
            project[i].style.transform = `rotateY(${xAxis}deg) rotateX(${(yAxis/3)}deg)`;
        } else if (i==2) {
            project[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis/6.5}deg)`;
        } else {
            project[i].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
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
}


