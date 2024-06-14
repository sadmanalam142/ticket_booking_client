# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# To run the project:

* First clone it
* Then run the command 'npm i' and 'npm run dev' to run the project
* If you want to run the project localy, you need to update firebase configaration otherwise authentication will not work
* Here is the live link of the project: [https://ticket-booking-ed2cb.web.app/]

# Project Overview:

* This is a ticket booking website
* If a user want to book a ticket, he must logged in to the site first
* There is a payment option for all tickets except for free tickets using Stripe
* Authentication is secured via jwt

# Technologies used:

* React, Firebase, Tailwindcss, Daisyui, React hot toast, React icons, Modal, Stripe