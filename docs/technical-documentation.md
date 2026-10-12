# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio website developed using HTML, CSS, and JavaScript. The website introduces me as a Software Engineering student at KFUPM with a concentration in Cloud Computing, presents selected academic projects, and provides contact information through links and a contact form.

The website is designed to work across different screen sizes and includes an interactive light/dark theme toggle.

Assignment 2 extends the original portfolio with live project searching, persistent theme preferences using `localStorage`, contact form validation with user feedback, and scroll-triggered project animations. These improvements make the website more interactive and user-friendly while preserving its original design and content.

## 2. Technologies Used

### HTML5

HTML is used to define the structure and content of the portfolio. Semantic elements organize the page, including:

- `<header>` for the introductory content and theme toggle.
- `<nav>` for navigation between the main sections.
- `<main>` for the primary page content.
- `<section>` for the About Me, Projects, and Contact sections.
- `<article>` for individual project cards.
- `<form>` for the contact form.
- `<footer>` for the copyright information.

HTML also provides the project search input, form fields, validation message containers, and accessible labels.

### CSS3

CSS is used for the visual design, layout, responsive behavior, and light/dark themes.

The stylesheet includes:

- Flexbox layouts.
- CSS custom properties.
- Gradients.
- Hover and focus states.
- Sticky navigation.
- Responsive media queries.
- Light and dark theme styles.
- Transitions and visual effects.
- Project reveal animations.
- Error and success message styling.

### JavaScript

JavaScript implements the website's interactive features, including theme switching, live project searching, contact form validation, and scroll-triggered animations.

The script handles user events, dynamically updates page content, stores theme preferences using `localStorage`, validates form inputs, and uses the `IntersectionObserver` API to animate project cards when they enter the viewport.

## 3. Project Structure

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

### File Responsibilities

- `index.html` contains the structure and content of the portfolio, including the project search input and contact form.
- `css/styles.css` contains the layout, colors, themes, responsive design, animations, and feedback styling.
- `js/script.js` implements theme switching, `localStorage` preference persistence, live project search, contact form validation, and project reveal animations.
- `assets/images/` stores project images and theme icons.
- `docs/ai-usage-report.md` documents how AI was used during development.
- `docs/technical-documentation.md` explains the technical implementation.
- `README.md` provides the project overview and local setup instructions.

## 4. Page Structure

The portfolio is divided into three main content sections.

### About Me

The About Me section contains a short introduction, a tagline, and information about my academic background and interests.

### Projects

The Projects section displays two academic projects using reusable project cards:

- RouterRepair: Network Detective.
- Academic Copilot.

Each project includes:

- A project image.
- Project title.
- Related course.
- Project description.
- Additional project information such as the target audience or key features.

The project cards use a Flexbox container on larger screens and change to a vertical layout on smaller screens.

Assignment 2 introduces a live search input above the project cards. Users can search by project name, course, or keyword. When no projects match, the website displays an empty-state message.

### Contact

The Contact section provides:

- An email link.
- A GitHub link.
- A contact form with Name, Email, and Message fields.
- A Send Message button.

In Assignment 2, the contact form was enhanced with JavaScript validation for all three fields.

Invalid submissions display inline error messages, while valid submissions display confirmation feedback and clear the form.

The form remains front-end only and does not connect to a backend service or send actual emails.

## 5. Navigation

The website includes navigation links for:

- About Me
- Projects
- Contact

Each link points to the corresponding section using an HTML fragment identifier.

The navigation bar uses `position: sticky`, allowing it to remain visible at the top of the page while scrolling.

Smooth scrolling is enabled through CSS:

```css
html {
   scroll-behavior: smooth;
}
```

A `scroll-margin-top` value is applied to sections so that section headings remain visible below the sticky navigation bar when a navigation link is selected.

## 6. Responsive Design

The website was designed to support desktop, tablet, and mobile screen sizes.

Flexbox is used for several layouts, including:

- Navigation links.
- Header information.
- Project cards.
- Contact links.

A media query is used for screens with a maximum width of 768px:

```css
@media (max-width: 768px) {
   /* Responsive styles */
}
```

On smaller screens:

- Header spacing and heading size are reduced.
- Header information changes to a vertical layout.
- Project cards change from a horizontal layout to a vertical layout.
- Navigation spacing and font sizes are reduced.
- Contact links can wrap when necessary.
- Form padding is reduced.
- The theme toggle is resized and repositioned.

The responsive behavior can be verified by resizing the browser and using browser developer tools.

## 7. Light and Dark Theme

The website supports both dark and light themes.

CSS custom properties are defined in `:root` for the default dark theme. These variables control:

- Background colors.
- Text colors.
- Accent colors.
- Card colors.
- Borders.
- Form colors.
- Footer colors.
- Shadows.

Example:

```css
:root {
   --background: #071525;
   --text: #c7d5e3;
   --accent: #65b5ed;
}
```

The light theme overrides these variables using the `light-mode` class:

```css
body.light-mode {
   --background: #f4f8fc;
   --text: #34465b;
   --accent: #3977a9;
}
```

Using CSS custom properties allows multiple interface elements to change appearance without creating separate stylesheets.

## 8. JavaScript Theme Toggle

The theme toggle is implemented in `js/script.js`.

JavaScript first accesses the theme button and icon:

```javascript
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
```

A click event listener is attached to the theme button.

When clicked:

1. The `light-mode` class is toggled on the `<body>`.
2. CSS applies the corresponding theme variables.
3. The displayed icon changes between sun and moon.
4. The button's `aria-label` is updated.

In Assignment 2, the theme toggle was extended using `localStorage`.

Each time the user switches themes, the selected preference is saved. When the website is refreshed or revisited, JavaScript retrieves the saved preference and restores the corresponding theme, icon, and accessible button label.

## 9. Accessibility and User Experience

Several design decisions improve usability and accessibility:

- Project images include descriptive `alt` text.
- The theme toggle includes an `aria-label`.
- The theme button's ARIA label updates when the theme changes.
- Form fields are connected to labels using matching `for` and `id` attributes.
- Keyboard focus styles are provided for form inputs and textareas.
- Navigation links use descriptive section names.
- Text and interface colors are designed for readability in both themes.
- Hover effects provide visual feedback.
- Responsive layouts improve usability on smaller screens.
- Contact form errors appear directly below the corresponding fields.
- Feedback containers use `aria-live` attributes.
- Project animations respect reduced-motion preferences.

## 10. Performance and Maintainability

The project uses plain HTML, CSS, and JavaScript without external frameworks or large third-party libraries.

To keep the project organized and maintainable:

- HTML, CSS, and JavaScript are stored in separate files.
- Images are stored in a dedicated assets directory.
- CSS custom properties reduce repeated color values.
- Reusable CSS classes are used for project cards and contact buttons.
- Responsive behavior is grouped inside media queries.
- JavaScript functionality is organized into clearly commented sections for theme management, live project search, form validation, and animations.
- The `IntersectionObserver` API is used to trigger animations efficiently when cards enter the viewport.
- Important sections of the CSS and HTML include comments for readability.

This structure supports future development because content, presentation, and behavior are separated.

## 11. Testing

The website was developed and tested locally using Visual Studio Code and Live Server.

Testing activities include:

- Navigating through the About Me, Projects, and Contact sections.
- Checking sticky navigation and smooth scrolling.
- Switching between light and dark themes.
- Checking theme icon and ARIA label changes.
- Testing the contact form layout and validation.
- Searching for matching and non-matching projects.
- Refreshing the page to check theme persistence.
- Observing project reveal animations.
- Resizing the browser to inspect responsive layouts.
- Checking project images and links.
- Inspecting the browser console for JavaScript errors.

The detailed Assignment 2 test scenarios are described in Section 19.

## 12. Browser and Device Compatibility

The website uses standard HTML5, CSS, and JavaScript features supported by modern web browsers.

The layout adapts to different screen widths using flexible layouts and responsive media queries.

Compatibility should be verified on desktop and mobile screen sizes and across major browsers such as Chrome, Safari, Firefox, and Edge.

## 13. Future Improvements

Possible future improvements include:

- Connecting the contact form to a backend or form-processing service.
- Adding additional portfolio projects.
- Adding more sections such as skills, achievements, or experience.
- Deploying the portfolio using a hosting service such as GitHub Pages.

---

## 14. Assignment 2 — Interactive Features Overview

Assignment 2 extends the original portfolio with JavaScript-driven features that improve interactivity, usability, and user feedback.

The new features include:

1. Live Project Search.
2. Persistent Theme Preference.
3. Contact Form Validation and Feedback.
4. Project Reveal Animation.

These features were implemented using HTML5, CSS3, and vanilla JavaScript without introducing additional frameworks or external libraries.

## 15. Dynamic Content — Live Project Search

### Implementation

A search input was added above the project cards in `index.html`.

JavaScript accesses the search input using `getElementById()` and selects the project cards using `querySelectorAll()`.

An `input` event listener detects changes as the user types.

The entered text is trimmed and converted to lowercase. Each project's text content is also converted to lowercase and compared using `includes()`.

Cards that do not match the search query are hidden using the HTML `hidden` property.

### User Interaction

1. The user navigates to the Projects section.
2. The user enters a project name, course, or keyword.
3. JavaScript compares the entered text with each project card.
4. Matching projects remain visible.
5. Non-matching projects are hidden.
6. Clearing the search field restores all projects.

### Empty State Handling

If no project matches the entered keyword, the website displays:

"No projects found. Try another keyword."

The message disappears when matching projects become available.

### Technologies

- DOM manipulation.
- `addEventListener("input")`.
- `querySelectorAll()`.
- `textContent`.
- `toLowerCase()`.
- `includes()`.
- HTML `hidden` property.

## 16. Data Handling — Persistent Theme Preference

### Implementation

The original theme toggle was extended using the Web Storage API.

When the user changes the theme, JavaScript saves the selected preference using `localStorage.setItem()`.

When the website loads, JavaScript retrieves the preference using `localStorage.getItem()`.

If the saved preference is `"light"`, the `light-mode` class is applied to the body. Otherwise, the default dark theme is used.

The theme icon and accessible label are updated accordingly.

### User Interaction

1. The user clicks the theme toggle.
2. JavaScript switches the theme.
3. The selected preference is saved in `localStorage`.
4. The user refreshes or revisits the website.
5. The saved theme is restored automatically.

### Technologies

- Web Storage API.
- `localStorage.setItem()`.
- `localStorage.getItem()`.
- `classList.toggle()`.
- `classList.add()`.
- DOM attribute updates.

## 17. Data Handling and User Feedback — Contact Form Validation

### Implementation

The contact form was enhanced with JavaScript validation and inline feedback.

The form contains Name, Email, and Message fields.

The `novalidate` attribute enables custom validation instead of default browser validation messages.

A `submit` event listener uses `event.preventDefault()` to prevent the page from reloading.

JavaScript reads the field values and uses `trim()` to detect empty inputs.

A regular expression checks whether the email address follows a basic valid format.

### Validation Rules

- **Name:** Must not be empty.
- **Email:** Must not be empty and must follow a valid email format.
- **Message:** Must not be empty.

### Error Handling

If a field is invalid, an error message appears below the corresponding field.

Examples:

- "Please enter your name."
- "Please enter your email."
- "Please enter a valid email address."
- "Please enter your message."

Previous error messages are cleared before each new submission.

### Successful Validation

When all fields are valid, the website displays:

"Your message has been validated successfully. This form is a demo and does not send emails."

The form is then cleared using `contactForm.reset()`.

The contact form does not send emails or store submitted messages in a database.

### Technologies

- `addEventListener("submit")`.
- `event.preventDefault()`.
- `trim()`.
- Regular expressions.
- DOM text updates.
- `form.reset()`.

## 18. Animation and Transitions — Project Reveal Animation

### Implementation

A fade-in and slide-up animation was added to project cards.

The animation uses CSS transitions for opacity and vertical movement.

JavaScript uses `IntersectionObserver` to detect when a project card enters the viewport.

Before becoming visible, a card receives the `reveal-pending` class, which reduces opacity and moves the card downward.

When the card enters the viewport, JavaScript removes `reveal-pending` and adds `reveal-visible`.

The card then transitions to full opacity and its original position.

### Animation Behavior

1. The user opens the portfolio.
2. The user scrolls to the Projects section.
3. The observer detects when a project card enters the viewport.
4. The card fades in and slides upward.
5. The observer stops tracking the card after its first reveal.

### Accessibility

The animation respects the user's `prefers-reduced-motion` setting.

When reduced motion is enabled, the animation is skipped.

### Technologies

- CSS transitions.
- CSS `opacity`.
- CSS `transform`.
- `IntersectionObserver`.
- `classList.add()`.
- `classList.remove()`.
- `prefers-reduced-motion`.

## 19. Assignment 2 — Testing and Verification

The following test scenarios are used to verify the interactive features.

### Dynamic Content Testing

| Test | Expected Result |
|---|---|
| Search for "network" | Only RouterRepair appears. |
| Search for "academic" | Only Academic Copilot appears. |
| Search for an unrelated keyword | Empty-state message appears. |
| Clear the search input | Both project cards reappear. |

### Theme Persistence Testing

| Test | Expected Result |
|---|---|
| Switch to Light Mode | Light theme is applied. |
| Refresh while in Light Mode | Light theme remains active. |
| Switch to Dark Mode | Dark theme is applied. |
| Refresh while in Dark Mode | Dark theme remains active. |

### Contact Form Testing

| Test | Expected Result |
|---|---|
| Submit empty fields | Inline error messages appear. |
| Enter an invalid email | Email validation error appears. |
| Enter valid data | Confirmation feedback appears. |
| Submit valid data | Form fields are cleared. |

### Animation Testing

| Test | Expected Result |
|---|---|
| Scroll to Projects | Cards reveal smoothly. |
| Scroll away and return | Animation does not repeat. |
| Search after animation | Project filtering still works. |
| Enable reduced motion | Reveal animation is skipped. |

### Regression Testing

Existing features from Assignment 1 should also be checked to ensure the new functionality does not interfere with navigation, responsive layouts, theme switching, or project content.

## 20. Assignment 2 — Future Improvements

Potential future improvements include:

- Adding more academic projects and project categories.
- Connecting the contact form to a secure backend service.
- Adding advanced project filters and sorting options.
- Improving keyboard accessibility and interactive feedback.
- Deploying the website using GitHub Pages.
- Adding sections for technical skills and professional experience.