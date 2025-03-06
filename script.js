document.addEventListener("DOMContentLoaded", function() {
    // Dark Mode Toggle with Local Storage
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });

    // Back-to-Top Button
    const backToTop = document.querySelector(".back-to-top");
    window.addEventListener("scroll", function() {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
    backToTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile Navbar Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function() {
            navLinks.classList.toggle("active");
        });
    }

    // Form Validation Fix
    const loginForm = document.querySelector(".login-box form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Logged in successfully!");
        });
    }

    const signupForm = document.querySelector(".signup-box form");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Signed up successfully!");
        });
    }

    // Fade-in Animation
    document.querySelectorAll(".fade-in").forEach(element => {
        element.classList.add("show");
    });
});
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

function toggleLanguage() {
    const lang = document.documentElement.lang === "en" ? "ar" : "en";
    document.documentElement.lang = lang;
    alert("Language switched to " + (lang === "en" ? "English" : "Arabic"));
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});