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

var intro__text = document.querySelector('.intro__text_line');
var intro__subtitle = document.querySelector('.intro__text_subtitle');
// var eleven = document.querySelector('.eleven');

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function containsActive(num) {
    if (num.classList.contains('content__line.active')) {
        num.classList.remove('content__line.active');
        num.classList.add('content__line_end');
    }
}
window.addEventListener("scroll", (event) => {
    console.log(scrollY);
    intro__text.style.opacity = 1 - scrollY/200;
    intro__subtitle.style.opacity = 1 - scrollY/400;
    if (scrollY > 1300) {
        ten.classList = 'main.style1 content__line.active ten';
        containsActive(nine);
    }
    else if (scrollY > 1149) {
        nine.classList = 'main.style1 content__line.active nine';
        containsActive(eight);
        containsActive(ten);
        containsActive(seven);

    }
    else if (scrollY > 925) {
        seven.classList = 'main.style1 content__line.active seven';
        eight.classList = 'main.style1 content__line.active eight';
        containsActive(six);
        containsActive(five);
        containsActive(nine);
    }
    else if (scrollY > 670) {
        five.classList = 'main.style1 content__line.active five';
        six.classList = 'main.style1 content__line.active six';
        // containsActive(five);
        containsActive(seven);
        containsActive(eight);
        containsActive(four);
        // containsActive(six);
    }
    else if (scrollY > 473) {
        four.classList = 'main.style1 content__line.active four';
        containsActive(three);
        containsActive(five);
        containsActive(six);

    }
    else if (scrollY > 315) {
        three.classList = 'main.style1 content__line.active three';
        containsActive(two);
        containsActive(four);
    }
    else if (scrollY > 230) {
        two.classList = 'main.style1 content__line.active two';
        one.classList = 'main.style1 content__line_end one';
        containsActive(three)
    }
    else if (scrollY > 150) {
        content__intro.classList = 'main.style1 content__line_end';
        one.classList = 'main.style1 content__line.active one';
        containsActive(two);
    }
    else {
        content__intro.classList = 'main.style1 content__line.active';
        containsActive(one);
    }
});