# RevBoost

RevBoost is an AI-powered restaurant review platform designed for mobile users. Customers can scan a QR code, give ratings, generate AI-assisted reviews, and directly open the restaurant’s Google Review page for quick submission.

Built specially for restaurants to improve customer review experience and increase Google review engagement.

<img width="531" height="696" alt="Screenshot 2026-05-23 at 2 21 37 AM" src="https://github.com/user-attachments/assets/9b34fa12-83b3-427c-be7a-b58da01e07a7" />

<img width="374" height="811" alt="Screenshot 2026-05-23 at 2 20 12 AM" src="https://github.com/user-attachments/assets/f2d97f31-f801-43ce-8b07-85f9f08c85e7" />

<img width="370" height="810" alt="Screenshot 2026-05-23 at 2 21 04 AM" src="https://github.com/user-attachments/assets/674303fa-9a05-4b47-92a9-6e8a5f876992" />

---


# Features

- QR-based review system
- Mobile-first responsive UI
- Dynamic star rating system
- Smart tag suggestions based on rating
- AI-generated human-like reviews
- Editable review preview
- Automatic clipboard copy
- Direct Google Review redirection
- Fast and frictionless user flow

---

# Workflow

```text
Scan QR
↓
Give Rating
↓
Select Tags
↓
Generate AI Review
↓
Edit Review
↓
Copy Review Automatically
↓
Open Google Reviews
↓
Paste & Submit
```

---

# Tech Stack

## Frontend
- React.js
- CSS3
- React Router DOM
- Material UI

## AI Integration
- Groq API
- Llama 3.1 Model

---

# AI Prompt Design

The AI generates:
- short
- natural
- human-like
- positive
- mobile-friendly

restaurant reviews.

The generated reviews are optimised for Google Reviews.

---

# Mobile Experience

RevBoost is mainly designed for:
- mobile browsers
- QR-based restaurant flow
- quick customer interaction

The entire review process is optimised to reduce typing effort.

---

# Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── StarRating.jsx
│   ├── TagSelector.jsx
│   ├── GenerateButton.jsx
│
├── pages/
│   ├── ReviewPage.jsx
│   ├── ReviewPreviewPage.jsx
│
├── utils/
│   └── generateReview.js
│
├── App.jsx
└── App.css
```

---

# Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GROQ_API_KEY=your_api_key
```

---

# Installation

## Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

# Future Improvements

- Multi-language reviews
- Voice-based review generation
- Restaurant dashboard
- Analytics system
- Review sentiment analysis
- WhatsApp review sharing
- Dynamic restaurant management

---

# Example Use Case

Restaurant:
Hotel Vedas  
Location:
Pune-Nashik Highway, Sangamner

Customers can:
- scan QR
- generate AI review
- submit Google review instantly

---
