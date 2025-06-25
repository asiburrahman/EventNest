🎉 EventNest

A modern event management and discovery platform built with React, Firebase, Tailwind CSS, and DaisyUI — designed to help users seamlessly browse, manage, and interact with local events such as conferences, exhibitions, sports, and workshops.

🌍 Live Demo: https://preeminent-platypus-50b78a.netlify.app/

🚀 Project Purpose

EventNest was created to simplify the process of finding and managing local events. Whether you're attending a tech conference, an art exhibition, or a local sports tournament, EventNest connects you with events around you and makes it easy to discover and reserve your spot.

🧩 Key Features

✅ Firebase Authentication — Secure login and signup with Firebase

🔍 Event Discovery — Browse and filter through various event categories

📅 Book Reservations — Reserve your place in upcoming events

💻 Modern UI — Built using Tailwind CSS & DaisyUI for a responsive, clean design

🎠 Interactive Carousel — Integrated with Swiper.js for image sliders

🔔 Toast Notifications — Real-time feedback using React Toastify

📱 Mobile Responsive — Optimized layout for phones, tablets, and desktops

♿ Accessible — Keyboard and screen-reader-friendly markup

📊 Animated Stats — Integrated with react-countup for animated counters

🔄 Protected Routes — Prevent unauthorized access to sensitive routes

🌙 Dark Mode Ready — Thanks to DaisyUI theme support

📦 Tech Stack

Frontend: React 19 + Vite

Authentication: Firebase

Styling: Tailwind CSS 4 + DaisyUI

Routing: React Router 7

Carousel/Slider: Swiper.js

Notifications: React Toastify

Icons: React Icons

Counter Animations: React CountUp

🧰 NPM Packages & Dependencies

{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router": "^7.5.2",
  "firebase": "^11.6.1",
  "tailwindcss": "^4.1.4",
  "tailwindcss/vite": "^4.1.4",
  "daisyui": "^4.x",
  "react-icons": "^5.5.0",
  "react-toastify": "^11.0.5",
  "swiper": "^11.2.6",
  "react-countup": "^6.5.3"
}

🛠 Installation & Setup

Clone the repository

git clone https://github.com/your-username/eventnest.git
cd eventnest

Install dependencies

npm install

Configure Firebase

Create a .env file in the root and add your Firebase config:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

Run the project

npm run dev

📁 Folder Structure

src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── EventCard.jsx
│   └── ...
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   └── ...
├── hooks/
│   └── useAuth.js
├── firebase/
│   └── config.js
└── App.jsx

✅ Available Scripts

npm run dev: Run the app in development mode

npm run build: Create a production build

npm run preview: Preview the production build locally

📸 Screenshots

Home Page

Event Details

Dashboard







(Replace the placeholders above with real screenshots)

📌 Future Improvements

Add user event submission forms

Google Maps integration for event locations

Admin panel for event approval

Pagination and load more functionality

Payment integration for paid events

🧑‍💻 Author

Asibur Rahman
📫 Email: Asibur Rahman
🌐 LinkedIn: https://www.linkedin.com/in/asiburrahman/






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



