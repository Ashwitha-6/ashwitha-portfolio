// ================= THEME SWITCHING =================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }

});


// ================= PROJECT FILTERING =================

const filterButtons = document.querySelectorAll(".filter-button");
const projects = document.querySelectorAll(".project-item");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        const selectedCategory = button.getAttribute("data-filter");

        projects.forEach(function(project) {

            const projectCategory = project.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });

    });

});


// ================= CONTACT FORM VALIDATION =================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent = "Please fill in all the fields.";
        formMessage.style.color = "#d9534f";

    } else {

        formMessage.textContent =
            "Thank you! Your message has been submitted.";

        formMessage.style.color = "#28a745";

        contactForm.reset();
    }

});