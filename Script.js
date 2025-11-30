// Smooth scroll to Menu Section
function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

// Contact Form Submission (Demo Only)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-section form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });
});