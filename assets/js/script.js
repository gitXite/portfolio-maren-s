// use Intersection Observer API to detect if a card is in the viewport
const cards = document.querySelectorAll('.card');
const container = document.querySelector('.body');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('hasFocus');
            entry.target.classList.remove('lostFocus')
        } else {
            entry.target.classList.remove('hasFocus');
            entry.target.classList.add('lostFocus')
        }
    });
}, {
    root: container,
    threshold: 1
});

cards.forEach(card => observer.observe(card));


// functions to detect mouse hovering or touch pad
function watchForHover() {
    let lastTouchTime = 0

    function enableHover() {
        if (new Date() - lastTouchTime < 500) return
        document.body.classList.add('hasHover')
    }
    function disableHover() {
        document.body.classList.remove('hasHover')
    }
    function updateLastTouchTime () {
        lastTouchTime = new Date()
    }

    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    document.addEventListener('mousestart', enableHover, true)

    enableHover()
}

watchForHover()


// function to toggle dark mode
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle('dark-mode');
}
