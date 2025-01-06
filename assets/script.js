const cards = document.querySelectorAll('.card');
const container = document.querySelector('.showcase');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  root: container,
  rootMargin: 0px,
  threshold: 0.5
});

cards.forEach(card => observer.observe(card));
