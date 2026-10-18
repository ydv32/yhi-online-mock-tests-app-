# YHI Online Mock Tests 📝✨
### Curated & Powered by ARVIND YADAV ✨

A responsive browser-based CBT (Computer Based Test) examination platform and Android container for online mock examinations, featuring unique student roll numbers, live exam timers, automatic scoring, step-by-step answer explanations, and administrative test authoring.

---

## 🌟 Key Features

1. **Student Registration & Permanent Roll Number Generation**
   - Candidates register with their Full Name, Email, and Target Exam (SSC CGL/CHSL, Railways RRB, Banking IBPS/SBI, UPSC/State PSC, CUET, etc.).
   - Automatically generates a permanent unique Roll Number formatted as `YHI-2026-XXXX`.
   - Generates an official printable/viewable **Student Admit / Roll Number ID Card**.
   - One-Click **Guest Login** mode available for instant testing without registration.

2. **Authentic CBT (Computer Based Test) Exam Engine**
   - Real-time countdown timer with color alerts (warning under 3 minutes).
   - Interactive **Question Palette** showing live status:
     - 🟢 Answered
     - 🔴 Not Answered / Skipped
     - 🟡 Marked for Review
     - ⚪ Not Visited
   - Options to **Mark for Review & Next**, **Clear Response**, and **Save & Next**.
   - Adjustable question typography size (A+ / A-) for accessibility.
   - Automatic submission when the exam timer expires.

3. **Subject-Wise Mock Test Bank (Curated with Detailed Explanations)**
   - 📐 **Mathematics & Quantitative Aptitude** (Percentages, Profit & Loss, Speed-Distance, Time & Work, Algebra).
   - 🔬 **General Science & Technology** (Physics, Chemistry, Cell Biology, Optics).
   - 🌍 **Indian Polity & General Knowledge** (Constitution, Fundamental Rights, Geography, Modern History).
   - 🧩 **Logical Reasoning & Mental Ability** (Number Series, Blood Relations, Coding-Decoding).
   - 📖 **English Language & Comprehension** (Grammar Rules, Subject-Verb Agreement, Idioms).
   - 💻 **Computer Awareness & IT Fundamentals** (Networking Protocols, Hardware, Architecture).

4. **Instant Automatic Scoring & Analytics**
   - Precise scoring engine (+2.0 marks for correct, -0.5 negative penalty for wrong answers).
   - Accuracy percentage, total time taken, correct vs incorrect breakdown.
   - **Question-by-Question Solution Review**: Full step-by-step explanation, mathematical formula derivations, and concept notes for every question.
   - **Certificate of Merit & Performance**: Printable certificate with candidate name, score, accuracy, timestamp, and **ARVIND YADAV ✨ verification stamp**.

5. **Admin Management Portal (PIN: `1234`)**
   - Create and customize new mock tests (Title, Subject, Duration, Marks per Question, Negative Penalty, Syllabus description).
   - Author custom MCQ questions with 4 choices, designated answer, and detailed step-by-step explanations.
   - View registered candidates directory with their unique roll numbers and emails.
   - View student test submissions, timestamps, and performance metrics.
   - Export all test banks to JSON and import custom test banks.

6. **Public Web Deployment & Firebase Cloud Integration**
   - Full Firebase Web SDK integration (Firebase Auth & Firestore).
   - Offline-first LocalStorage caching so tests run instantly with zero setup.
   - Cloud settings modal to link custom Firebase projects.
   - `public/` directory with `firebase.json` and `firestore.rules` prepared for single-command `firebase deploy`.

---

## 🚀 Public Web Deployment Instructions

### Option 1: Firebase Hosting (Recommended)
```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login to your Google/Firebase account
firebase login

# 3. Deploy hosting & firestore rules
firebase deploy
```

### Option 2: Vercel / Netlify / GitHub Pages
- Deploy the files located inside the `public/` directory (`index.html`, `styles.css`, `app.js`).
- Zero build steps or external bundlers required.

---

## 📱 Android App Architecture
- Packaged with an edge-to-edge Android container in `com.example.MainActivity` using hardware-accelerated WebView.
- Custom vector launcher icon with exam insignia and golden star branding.
- Runs offline and online seamlessly.
