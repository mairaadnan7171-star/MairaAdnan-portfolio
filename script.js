// =========================
// Portfolio JavaScript
// =========================

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                e.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

        });
    });

    // Welcome message in browser console
    console.log("Welcome to Maira Adnan's Portfolio");

});