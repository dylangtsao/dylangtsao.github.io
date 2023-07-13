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
}