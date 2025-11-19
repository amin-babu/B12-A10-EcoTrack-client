# 🌿 EcoTrack — Environmental Challenge & Awareness Platform

**Live Site URL:** https://b12-a10-ec0-track.netlify.app/ <br>
**Server URL:** https://github.com/amin-babu/B12-A10-EcoTrack-Server

---

## 🌱 About the Project
EcoTrack is an interactive platform where users can join eco-friendly challenges, track their progress, and contribute to environmental sustainability. The website promotes green habits through community-driven challenges and environmental awareness.

---

## ✨ Features

1. **User Authentication (Firebase):**  
   Secure login and registration system using Firebase Authentication.

2. **Dynamic Challenges Section:**  
   Users can explore all active environmental challenges and join them instantly.

3. **Participant Progress Tracking:**  
   Each user can monitor and update their individual progress in joined challenges.

4. **Admin Dashboard (Bonus):**  
   Admins can manage challenges, view participants, and oversee the community’s impact.

5. **Interactive UI with Animations:**  
   A clean and responsive UI built with Tailwind CSS and DaisyUI for smooth user experience.

6. **Live Data from MongoDB:**  
   All challenges, events, and progress are fetched dynamically from the MongoDB database.

---

## 🧩 Tech Stack

- **Frontend:** React, React Router, Tailwind CSS, DaisyUI  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** Firebase  
- **Deployment:** Vercel & Netlify (Client & Server)

---

## 📦 Dependencies

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.17",
  "firebase": "^12.5.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.5",
  "sweetalert2": "^11.26.3",
  "swiper": "^12.0.3",
  "tailwindcss": "^4.1.17"
}
```

## 🚀 How to Run This Project Locally

Follow the steps below to set up and run the project on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/amin-babu/B12-A10-EcoTrack-Client.git
cd B12-A10-EcoTrack-Client
npm install
```

### 2️⃣ Environment Setup (.env)

Create a new file named **.env** in the root of the project and paste the following configuration:

```env
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```

### 3️⃣ Start the Development Server
```
npm run dev
```

Now open the project in your browser at:
👉 http://localhost:5173
