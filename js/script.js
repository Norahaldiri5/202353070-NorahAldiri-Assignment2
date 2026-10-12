const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

/* =========================
   Save Theme Preference
========================= */

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
   document.body.classList.add("light-mode");
   themeIcon.src = "assets/images/moon.png";
   themeToggle.setAttribute("aria-label", "Switch to dark mode");
}

themeToggle.addEventListener("click", function () {

   document.body.classList.toggle("light-mode");

   localStorage.setItem(
      "portfolio-theme",
      document.body.classList.contains("light-mode") ? "light" : "dark"
   );


   if (document.body.classList.contains("light-mode")) {

      themeIcon.src = "assets/images/moon.png";

      themeToggle.setAttribute(
         "aria-label",
         "Switch to dark mode"
      );

   }
   else {

      themeIcon.src = "assets/images/sun.png";

      themeToggle.setAttribute(
         "aria-label",
         "Switch to light mode"
      );

   }

});

/* =========================
   Live Project Search
========================= */

const projectSearch = document.getElementById("project-search-input");
const projectCards = document.querySelectorAll(".project-card");
const noProjectsMessage = document.getElementById("no-projects-message");

projectSearch.addEventListener("input", function () {
   const searchText = projectSearch.value.trim().toLowerCase();
   let visibleProjects = 0;

   projectCards.forEach(function (card) {
      const projectText = card.textContent.toLowerCase();
      const matchesSearch = projectText.includes(searchText);

      card.hidden = !matchesSearch;

      if (matchesSearch) {
         visibleProjects++;
      }
   });

   noProjectsMessage.hidden = visibleProjects > 0;
});


/* =========================
   Contact Form Validation
========================= */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
   event.preventDefault();

   const name = document.getElementById("name").value.trim();
   const email = document.getElementById("email").value.trim();
   const message = document.getElementById("message").value.trim();

   const nameError = document.getElementById("name-error");
   const emailError = document.getElementById("email-error");
   const messageError = document.getElementById("message-error");
   const formFeedback = document.getElementById("form-feedback");

   // Clear previous messages
   nameError.textContent = "";
   emailError.textContent = "";
   messageError.textContent = "";
   formFeedback.textContent = "";

   let isValid = true;

   // Name validation
   if (name === "") {
      nameError.textContent = "Please enter your name.";
      isValid = false;
   }

   // Email validation
   if (email === "") {
      emailError.textContent = "Please enter your email.";
      isValid = false;
   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
   }

   // Message validation
   if (message === "") {
      messageError.textContent = "Please enter your message.";
      isValid = false;
   }

   // Show success feedback only if all fields are valid
   if (isValid) {
      formFeedback.textContent =
         "Your message has been validated successfully. This form is a demo and does not send emails.";

      contactForm.reset();
   }
});
