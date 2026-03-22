// Typing animation
const text = ["Software Test Engineer", "Integration Engineer", "ADAS Validation", "Python Automation"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === text.length) count = 0;
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 120);
}
type();

// Scroll reveal
window.addEventListener("scroll", function() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 50) {
            reveal.classList.add("active");
        }
    });
});

// Back to top
const topBtn = document.getElementById("topBtn");
topBtn.onclick = () => window.scrollTo({top:0, behavior:'smooth'});
