# 202353070-NorahAldiri-Assignment2

# Personal Portfolio Website — Interactive Features

A responsive and interactive personal portfolio website developed for **SWE 363: Web Engineering and Development**.

This project builds upon Assignment 1 by enhancing the original portfolio with JavaScript-driven interactivity, data handling, animations, and user feedback while preserving its existing design and content.

The website introduces me as a Software Engineering student at KFUPM with a concentration in Cloud Computing and showcases my academic projects, technical interests, and contact information.

## Features

### Original Features (Assignment 1)

- About Me section introducing my academic background and interests.
- Academic projects showcase featuring RouterRepair: Network Detective and Academic Copilot.
- Contact section with email and GitHub links.
- Responsive design for desktop, tablet, and mobile devices.
- Sticky navigation bar with smooth scrolling.
- Light and dark theme toggle.
- Accessible form labels and descriptive image alternative text.
- Hover effects on navigation links, buttons, and project cards.

### New Features (Assignment 2)

#### 1. Dynamic Content — Live Project Search

- Implemented a live search feature that filters project cards based on user input.
- Users can search by project name, course, or keywords.
- Search results update immediately as the user types.
- Displays a "No projects found" message when no projects match the search.

#### 2. Data Handling — Local Storage & Form Validation

- Used JavaScript `localStorage` to save the user's selected light or dark theme.
- Restored the saved theme automatically when the page is refreshed or revisited.
- Implemented contact form validation for Name, Email, and Message fields.
- Displays confirmation feedback after successful validation without sending an actual email.

#### 3. Animation and Transitions — Project Reveal Animation

- Added a fade-in and slide-up animation to project cards when they enter the viewport.
- Used the `IntersectionObserver` API to trigger animations.
- Preserved existing smooth scrolling and hover effects.
- Supported reduced-motion preferences for accessibility.

#### 4. Error Handling and User Feedback

- Displays inline error messages for empty or invalid contact form fields.
- Shows a confirmation message when all form inputs pass validation.
- Provides a "No projects found" message when a search returns no matches.
- Gives users clear feedback without unnecessary page reloads.

#### 5. AI Enhancement

- Used ChatGPT to support feature planning, code explanations, debugging, and UI/UX improvements.
- Reviewed and adapted AI-assisted suggestions to fit the existing portfolio structure.
- Tested the implemented features to verify their functionality.
- Documented AI assistance in `docs/ai-usage-report.md`.

## Technologies Used

- **HTML5:** Semantic page structure, forms, and accessible content.
- **CSS3:** Responsive layouts, CSS variables, themes, transitions, and animations.
- **JavaScript (ES6):** DOM manipulation, event handling, dynamic content, and form validation.
- **Web Storage API (`localStorage`):** Saving and restoring the user's theme preference.
- **Intersection Observer API:** Triggering animations when project cards enter the viewport.
- **Git and GitHub:** Version control and project management.
- **Visual Studio Code:** Development environment.

## Project Structure

```text
.
├── assets/
│   └── images/
│       ├── academic-copilot.jpg
│       ├── moon.png
│       ├── route-repair.jpg
│       └── sun.png
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── .gitignore
├── index.html
└── README.md
```

## Running the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Norahaldiri5/202353070-NorahAldiri-Assignment2.git
   ```

2. Open the project folder in Visual Studio Code.

3. Open `index.html` directly in a modern browser or use the **Live Server** extension in VS Code.

4. Navigate between the About Me, Projects, and Contact sections.

5. Test the interactive features:
   - Type a keyword in the Project Search field to filter the project cards.
   - Switch between light and dark themes, then refresh the page to verify the saved preference.
   - Enter invalid and valid data in the contact form to test validation and feedback.
   - Scroll to the Projects section to observe the reveal animation.

No package installation or build process is required because the website uses HTML, CSS, and vanilla JavaScript.

## Testing and Validation

The following functionality was tested during development:

- Navigation links scroll to their corresponding sections.
- Project Search filters matching cards and displays an empty-state message when no results are found.
- Clearing the search field restores all project cards.
- Theme preferences persist after refreshing the page.
- The contact form displays inline validation errors for empty fields and invalid email addresses.
- Valid contact form input displays a confirmation message and clears the form.
- Project reveal animations work without interfering with the search functionality.
- Light and dark themes maintain readable text and interface elements.

The contact form is a front-end demonstration only and does not send messages to an email server.

## AI Usage

ChatGPT was used as an AI-assisted development tool for feature planning, code explanations, debugging, UI/UX improvements, and documentation.

For Assignment 2, AI assistance focused on implementing Live Project Search, theme persistence using `localStorage`, contact form validation, and scroll-triggered animations.

AI-assisted suggestions were reviewed and adapted to the existing portfolio structure. The implementation was tested to ensure that the new features worked alongside the original functionality.

For more details, see [AI Usage Report](docs/ai-usage-report.md).

## Technical Documentation

Detailed explanations of the website's structure, functionality, JavaScript features, accessibility considerations, and testing are available in [Technical Documentation](docs/technical-documentation.md).

# 202353070-NorahAldiri-Assignment2

# Personal Portfolio Website — Interactive Features

A responsive and interactive personal portfolio website developed for **SWE 363: Web Engineering and Development**.

This project builds upon Assignment 1 by enhancing the original portfolio with JavaScript-driven interactivity, data handling, animations, and user feedback while preserving its existing design and content.

The website introduces me as a Software Engineering student at KFUPM with a concentration in Cloud Computing and showcases my academic projects, technical interests, and contact information.

## Features

### Original Features (Assignment 1)

- About Me section introducing my academic background and interests.
- Academic projects showcase featuring RouterRepair: Network Detective and Academic Copilot.
- Contact section with email and GitHub links.
- Responsive design for desktop, tablet, and mobile devices.
- Sticky navigation bar with smooth scrolling.
- Light and dark theme toggle.
- Accessible form labels and descriptive image alternative text.
- Hover effects on navigation links, buttons, and project cards.

### New Features (Assignment 2)

#### 1. Dynamic Content — Live Project Search

- Implemented a live search feature that filters project cards based on user input.
- Users can search by project name, course, or keywords.
- Search results update immediately as the user types.
- Displays a "No projects found" message when no projects match the search.

#### 2. Data Handling — Local Storage & Form Validation

- Used JavaScript `localStorage` to save the user's selected light or dark theme.
- Restored the saved theme automatically when the page is refreshed or revisited.
- Implemented contact form validation for Name, Email, and Message fields.
- Displays confirmation feedback after successful validation without sending an actual email.

#### 3. Animation and Transitions — Project Reveal Animation

- Added a fade-in and slide-up animation to project cards when they enter the viewport.
- Used the `IntersectionObserver` API to trigger animations.
- Preserved existing smooth scrolling and hover effects.
- Supported reduced-motion preferences for accessibility.

#### 4. Error Handling and User Feedback

- Displays inline error messages for empty or invalid contact form fields.
- Shows a confirmation message when all form inputs pass validation.
- Provides a "No projects found" message when a search returns no matches.
- Gives users clear feedback without unnecessary page reloads.

#### 5. AI Enhancement

- Used ChatGPT to support feature planning, code explanations, debugging, and UI/UX improvements.
- Reviewed and adapted AI-assisted suggestions to fit the existing portfolio structure.
- Tested the implemented features to verify their functionality.
- Documented AI assistance in `docs/ai-usage-report.md`.

## Technologies Used

- **HTML5:** Semantic page structure, forms, and accessible content.
- **CSS3:** Responsive layouts, CSS variables, themes, transitions, and animations.
- **JavaScript (ES6):** DOM manipulation, event handling, dynamic content, and form validation.
- **Web Storage API (`localStorage`):** Saving and restoring the user's theme preference.
- **Intersection Observer API:** Triggering animations when project cards enter the viewport.
- **Git and GitHub:** Version control and project management.
- **Visual Studio Code:** Development environment.

## Project Structure

```text
.
├── assets/
│   └── images/
│       ├── academic-copilot.jpg
│       ├── moon.png
│       ├── route-repair.jpg
│       └── sun.png
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── .gitignore
├── index.html
└── README.md
```

## Running the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Norahaldiri5/202353070-NorahAldiri-Assignment2.git
   ```

2. Open the project folder in Visual Studio Code.

3. Open `index.html` directly in a modern browser or use the **Live Server** extension in VS Code.

4. Navigate between the About Me, Projects, and Contact sections.

5. Test the interactive features:
   - Type a keyword in the Project Search field to filter the project cards.
   - Switch between light and dark themes, then refresh the page to verify the saved preference.
   - Enter invalid and valid data in the contact form to test validation and feedback.
   - Scroll to the Projects section to observe the reveal animation.

No package installation or build process is required because the website uses HTML, CSS, and vanilla JavaScript.

## Testing and Validation

The following functionality was tested during development:

- Navigation links scroll to their corresponding sections.
- Project Search filters matching cards and displays an empty-state message when no results are found.
- Clearing the search field restores all project cards.
- Theme preferences persist after refreshing the page.
- The contact form displays inline validation errors for empty fields and invalid email addresses.
- Valid contact form input displays a confirmation message and clears the form.
- Project reveal animations work without interfering with the search functionality.
- Light and dark themes maintain readable text and interface elements.

The contact form is a front-end demonstration only and does not send messages to an email server.

## AI Usage

ChatGPT was used as an AI-assisted development tool for feature planning, code explanations, debugging, UI/UX improvements, and documentation.

For Assignment 2, AI assistance focused on implementing Live Project Search, theme persistence using `localStorage`, contact form validation, and scroll-triggered animations.

AI-assisted suggestions were reviewed and adapted to the existing portfolio structure. The implementation was tested to ensure that the new features worked alongside the original functionality.

For more details, see [AI Usage Report](docs/ai-usage-report.md).

## Technical Documentation

Detailed explanations of the website's structure, functionality, JavaScript features, accessibility considerations, and testing are available in [Technical Documentation](docs/technical-documentation.md).


