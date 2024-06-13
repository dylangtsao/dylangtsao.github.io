document.addEventListener("DOMContentLoaded", function () {
  const terms = [
    "UIUC Senior",
    "Software Engineer",
    "Developer",
    "Learner",
    "Math&CS Student",
  ];

  let termIndex = 0;
  let charIndex = 0;
  const typingSpeed = 150;
  const erasingSpeed = 120;
  const delayBetweenTerms = 2000;
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
