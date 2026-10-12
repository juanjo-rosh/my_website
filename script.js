/* ========================================================= */
/* THEME TOGGLER                                             */
/* ========================================================= */
/* The initial theme is applied by an inline script in <head>
   so the page doesn't flash light mode before this file loads. */

const updateIcon = theme => {
    const icon = document.getElementById("theme-icon");
    if (!icon) return;

    icon.classList.remove("bi-sun-fill", "bi-moon-stars-fill");
    icon.classList.add(theme === "dark" ? "bi-moon-stars-fill" : "bi-sun-fill");
};

const setTheme = theme => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    updateIcon(theme);
};

updateIcon(document.documentElement.getAttribute("data-bs-theme"));

document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-bs-theme");
    setTheme(current === "dark" ? "light" : "dark");
});

/* ========================================================= */
/* MOBILE MENU: close after tapping a link                   */
/* ========================================================= */

const navMenu = document.getElementById("navMenu");
navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
        }
    });
});

/* ========================================================= */
/* FOOTER YEAR                                               */
/* ========================================================= */

document.getElementById("year").textContent = new Date().getFullYear();

/* ========================================================= */
/* TYPING ANIMATION                                          */
/* ========================================================= */

const typingElement = document.getElementById("typing");
const messages = [
    "Data Scientist in progress",
    "Tech enthusiast",
    "Creative problem solver",
    "Future Telecommunications Engineer"
];

let msgIdx = 0, charIdx = 0;

function type() {
    if (charIdx <= messages[msgIdx].length) {
        typingElement.textContent = messages[msgIdx].substring(0, charIdx++);
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIdx >= 0) {
        typingElement.textContent = messages[msgIdx].substring(0, charIdx--);
        setTimeout(erase, 50);
    } else {
        msgIdx = (msgIdx + 1) % messages.length;
        setTimeout(type, 300);
    }
}

if (typingElement) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        typingElement.textContent = messages[0];
    } else {
        type();
    }
}
