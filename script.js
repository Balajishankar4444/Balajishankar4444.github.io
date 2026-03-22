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
document.getElementById("topBtn").onclick = () =>
    window.scrollTo({top:0, behavior:'smooth'});

// Theme toggle
document.getElementById("themeToggle").onclick = function() {
    document.body.classList.toggle("light-mode");
};

// Cursor glow
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});

// Modal
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Counters
function counter(id, target) {
    let count = 0;
    let interval = setInterval(() => {
        count++;
        document.getElementById(id).innerText = count;
        if(count == target) clearInterval(interval);
    }, 50);
}

counter("exp", 3);
counter("proj", 5);
counter("skillsN", 10);

// Active navbar highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") == "#" + current) {
            a.classList.add("active");
        }
    });
});
