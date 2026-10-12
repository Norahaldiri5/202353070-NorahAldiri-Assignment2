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