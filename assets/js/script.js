const cards = document.querySelectorAll('.card');
const container = document.querySelector('.showcase');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('focused');
    } else {
      entry.target.classList.remove('focused');
    }
  });
}, {
  root: container,
  threshold: 1
});

cards.forEach(card => observer.observe(card));
