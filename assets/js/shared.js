var content__intro = document.querySelector('.content__intro');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');
var ten = document.querySelector('.ten');
// var eleven = document.querySelector('.eleven');

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", (event) => {
    console.log(scrollY);
    if (scrollY > 900) {
        ten.classList.remove('content_line');
        ten.classList.add('content__line.active');
        nine.classList.remove('content__line.active');
        nine.classList.add('content__line');
    }
    else if (scrollY > 775) {
        ten.classList.remove('content_line');
        ten.classList.add('content__line.active');
        nine.classList.remove('content__line');
        nine.classList.add('content__line.active');
        eight.classList.remove('content__line.active');
        eight.classList.add('content__line');
        // ten.classList.remove('content__line.active');
        // ten.classList.add('content__line');
    }
    else if (scrollY > 661) {
        eight.classList.remove('content__line');
        eight.classList.add('content__line.active');
        seven.classList.remove('content__line.active');
        seven.classList.add('content__line');
        nine.classList.remove('content__line.active');
        nine.classList.add('content__line');
    }
    else if (scrollY > 562) {
        seven.classList.remove('content__line');
        seven.classList.add('content__line.active');
        six.classList.remove('content__line.active');
        six.classList.add('content__line');
        eight.classList.remove('content__line.active');
        eight.classList.add('content__line');
    }
    else if (scrollY > 483) {
        six.classList.remove('content__line');
        six.classList.add('content__line.active');  
        five.classList.remove('content__line.active');
        five.classList.add('content__line');
        seven.classList.remove('content__line.active');
        seven.classList.add('content__line');
    }
    else if (scrollY > 400) {
        five.classList.remove('content__line');
        five.classList.add('content__line.active');
        four.classList.remove('content__line.active');
        four.classList.add('content__line');
        six.classList.remove('content__line.active');
        six.classList.add('content__line');
    }
    else if (scrollY > 252) {
        four.classList.remove('content__line');
        four.classList.add('content__line.active');
        three.classList.remove('content__line.active');
        three.classList.add('content__line');
        five.classList.remove('content__line.active');
        five.classList.add('content__line');
    }
    else if (scrollY > 170) {
        three.classList.remove('content__line');
        three.classList.add('content__line.active');
        two.classList.remove('content__line.active');   
        two.classList.add('content__line');
        four.classList.remove('content__line.active');
        four.classList.add('content__line');
    }
    else if (scrollY > 116) {
        // content__intro.classList = 'main.style1 content__line';
        two.classList.remove('content__line');
        two.classList.add('content__line.active');
        one.classList.remove('content__line.active');
        one.classList.add('content__line');
        three.classList.remove('content__line.active');
        three.classList.add('content__line');
    }
    else if (scrollY > 32) {
        content__intro.classList = 'main.style1 content__line';
        one.classList.remove('content__line');
        one.classList.add('content__line.active');
        two.classList.remove('content__line.active');
        two.classList.add('content__line');
    } else {
        content__intro.classList = 'main.style1 content__line.active';
        one.classList.remove('content__line.active');
        one.classList.add('content__line');
        
    }
});