// Theme Toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// Typing Effect
const typing = document.getElementById('typing');
const texts = ["AI/ML Enthusiast", "Problem Solver", "Data Science Learner"];
let i = 0, j = 0, currentText = '', isDeleting = false;

function type() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      currentText = texts[i].substring(0, j++);
      typing.innerHTML = currentText;
      setTimeout(type, 150);
    } else if (isDeleting && j >= 0) {
      currentText = texts[i].substring(0, j--);
      typing.innerHTML = currentText;
      setTimeout(type, 100);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i++;
      if (i === texts.length) i = 0;
      setTimeout(type, 500);
    }
  }
}
type();
