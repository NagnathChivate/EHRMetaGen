# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Work Report - 07 October 2025
Today, I worked on the admin panel of the EHRMetaGen healthcare project on the shivraj branch.

Tasks Completed
Billing Setup: Added a billing setup subpage under the admin panel for managing billing configurations.

Practice Setup: Implemented the practice setup section with three subpages:

Master Physician

Scheduler

User Setup

User Setup Page: Developed the user setup page to include:

A navbar with the following tabs: User, User Group, Document Right, Password Rule, and Add User.

An Add User button that, when clicked, opens a popup form.

Add User Popup Form: Designed an attractive UI popup form with input fields for:

Last Name

First Name

Middle Name

Specialty

NPI

Federal ID

Specialty Code

Title

Signature

The form contains Save and Cancel buttons for user interaction.

This enhancement improves the usability and management capabilities of the admin panel, particularly focusing on user management within the practice setup.