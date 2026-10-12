# AI Usage Report

## 1. Tools Used & Use Cases

### ChatGPT

I used ChatGPT as an AI-assisted development tool to enhance my personal portfolio website for Assignment 2.

The main use cases included:

- **Feature Planning:** Identifying interactive features that meet the assignment requirements while maintaining the original portfolio design.
- **Dynamic Content:** Getting guidance on implementing Live Project Search using JavaScript event listeners, DOM manipulation, and filtering.
- **Data Handling:** Extending the existing light/dark theme toggle using `localStorage` to save and restore user preferences.
- **Form Validation:** Implementing validation for the Name, Email, and Message fields, including inline error messages and confirmation feedback.
- **Animations:** Learning how to implement fade-in and slide-up animations using CSS transitions and the `IntersectionObserver` API.
- **Code Review and Debugging:** Reviewing code structure, identifying possible errors, and ensuring new features integrate with the existing website.
- **Documentation:** Organizing and improving the README, technical documentation, and AI usage report.

ChatGPT was used to support learning, problem-solving, and development rather than replacing my understanding of the code.

## 2. Benefits & Challenges

### Benefits

Using ChatGPT helped me extend the portfolio developed in Assignment 1 without rebuilding the website from scratch.

It provided step-by-step explanations of JavaScript concepts and helped me understand how to make the website more interactive.

For example, when implementing Live Project Search, I learned how `addEventListener("input")`, `toLowerCase()`, and `includes()` can be combined to filter project cards dynamically based on user input.

ChatGPT also helped me understand how `localStorage` can preserve theme preferences after refreshing or reopening the website.

For the contact form, AI assistance helped explain how to validate inputs, prevent default form submission, and display appropriate error and confirmation messages.

Additionally, I learned how `IntersectionObserver` works with CSS transitions to create smooth animations without external libraries.

### Challenges

One challenge was integrating new features into the existing portfolio without affecting its original functionality or design.

The JavaScript file already contained the theme toggle, so I needed to extend it while keeping the existing behavior working correctly.

Another challenge was ensuring that the Live Project Search remained functional after adding reveal animations to the project cards.

I also needed to make sure that the contact form displayed meaningful feedback and that its success message did not incorrectly suggest that an actual email had been sent.

These challenges showed me that AI-generated suggestions need to be reviewed and tested rather than copied without understanding.

## 3. Learning Outcomes

Using ChatGPT during Assignment 2 helped me develop a better understanding of JavaScript, DOM manipulation, and interactive web development.

### Dynamic Content

I learned how to use event listeners to detect user input and dynamically update the visibility of project cards.

I also learned how to implement case-insensitive searching and display an empty-state message when no results match.

### Data Handling

I learned how to use `localStorage.setItem()` and `localStorage.getItem()` to store and retrieve user preferences.

This helped me understand how browser storage can improve user experience without requiring a backend.

### Form Validation and Feedback

I learned how to use `event.preventDefault()`, `trim()`, and regular expressions to validate form inputs.

I also improved my understanding of how to display inline error messages and confirmation feedback without reloading the page.

### Animation and Accessibility

I learned how CSS transitions and the `IntersectionObserver` API can create smooth animations when elements enter the viewport.

I also learned why `prefers-reduced-motion` is important for users who prefer fewer animations.

### Development Workflow

I improved my ability to organize code changes into meaningful Git commits and document technical implementations.

I also became more comfortable testing new features independently before integrating them into the final website.

## 4. Responsible Use & Modifications

I reviewed AI-generated suggestions before integrating them into the existing portfolio.

Rather than replacing the original project, I adapted the suggested solutions to match its HTML structure, CSS variables, and JavaScript organization.

The main adaptations included:

- **Live Project Search:** Reused the existing project cards and added a search input instead of rebuilding the Projects section.
- **Theme Persistence:** Extended the original theme toggle using `localStorage` while preserving the existing theme icons and accessibility labels.
- **Contact Form Validation:** Added validation and feedback to the existing form instead of replacing it with a new form.
- **User Feedback:** Used a confirmation message that accurately explains that the form is a demonstration and does not send emails.
- **Project Animation:** Applied reveal animations to the existing project cards and included reduced-motion support.
- **Visual Consistency:** Used the existing CSS variables and design structure to keep the new features consistent with the original portfolio.

I reviewed the code changes and checked the interactive features in the browser, including project searching, theme switching, form validation, and animation behavior.

I also used separate Git commits to document each feature and make the development process easier to review.

Throughout the assignment, I used AI as a learning and development assistant. I worked to understand the suggested code, adapt it to my existing project, and verify its behavior.

The final website reflects the improvements made to my original portfolio while maintaining transparency about the use of AI assistance.