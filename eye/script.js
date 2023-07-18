const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
});

document.querySelector('body').addEventListener('mousemove',eyeball);

function eyeball() {
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth/2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight/2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180/Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+rotation+"deg)";
    });

    const new_eye = document.querySelectorAll('.new_eye');
    new_eye.forEach(function(new_eye) {
        let x = (new_eye.getBoundingClientRect().left) + (new_eye.clientWidth/2);
        let y = (new_eye.getBoundingClientRect().top) + (new_eye.clientHeight/2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180/Math.PI) * -1) + 270;
        new_eye.style.transform = "rotate("+rotation+"deg)";
    });
}

// document.addEventListener('click', e => {
//     // add a new eyeball inside box div
//     const box = document.querySelector('.box');
//     const newEye = document.createElement('div');
//     newEye.classList.add('new_eye');
//     box.appendChild(newEye);
//     // position based on mouseclick
//     newEye.setAttribute("style", "top: "+(e.pageY-40)+"px; left: "+(e.pageX-60)+"px;");

// });