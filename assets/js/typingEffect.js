document.addEventListener("DOMContentLoaded", function () {
  const terms = [
    "Welcome to my website!",
    "I love building things",
    "Let's connect!"
  ];

  let termIndex = 0;
  let charIndex = 0;
  const typingSpeed = 80;
  const erasingSpeed = 60;
  const delayBetweenTerms = 1500;
  const typingElement = document.querySelector(".typing-effect");

  function type() {
    if (charIndex < terms[termIndex].length) {
      typingElement.textContent += terms[termIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenTerms);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = terms[termIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      termIndex = (termIndex + 1) % terms.length;
      setTimeout(type, typingSpeed);
    }
  }

  setTimeout(type, delayBetweenTerms);
});
