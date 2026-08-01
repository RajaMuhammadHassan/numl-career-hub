# NUML Career Hub - Islamabad Software Houses Directory

**NUML Career Hub** is a clean, modern web application built specifically for **National University of Modern Languages (NUML)** Software Engineering, Computer Science, Information Technology, and Artificial Intelligence students.

It provides a centralized directory of verified software houses in **Islamabad**, allowing students to quickly discover companies, access official LinkedIn pages, and view career portals for job and internship opportunities.

---

## ✨ Features

- 🏢 **Verified Islamabad Software Houses**: Complete collection of top tech companies and software houses operating in Islamabad.
- 🔗 **Direct Official Links**: Every company card includes tested, direct buttons for official **LinkedIn** and **Careers** portals.
- ⚡ **Instant Search**: Real-time filtering by company name.
- 🎨 **Modern Dark Theme**: Clean aesthetic using dark tones and lime accents (`#a3e635`).
- ➕ **Suggest Company**: Modal for users to submit new software houses.
- 💬 **Feedback & Issue Reporting**: Integrated feedback form allowing users to report broken links, suggest features, or report incorrect info.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
- 🚀 **100% Client-Side Ready**: Loads data dynamically from `companies.json`, making it instantly deployable on **Vercel** or **GitHub Pages**.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.react.dev/)
- **Deployment**: Vercel / Netlify / GitHub Pages

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/numl-career-hub.git
cd numl-career-hub
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```text
numl-career-hub/
├── public/
│   └── companies.json          # Verified directory data
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Header navigation & search
│   │   ├── Hero.tsx             # Main hero banner & search
│   │   ├── CompaniesList.tsx    # Responsive grid display
│   │   ├── CompanyCard.tsx      # Individual card with logo & links
│   │   ├── About.tsx            # Platform details & creator info
│   │   ├── Footer.tsx           # Footer with attribution
│   │   ├── AddCompanyModal.tsx  # Add new software house modal
│   │   └── FeedbackModal.tsx    # Feedback & issue reporting modal
│   ├── services/
│   │   └── feedbackService.ts   # LocalStorage & cloud-ready service
│   ├── types.ts                 # TypeScript interfaces
│   ├── App.tsx                  # Main entry component
│   ├── main.tsx                 # React DOM mount point
│   └── index.css                # Global CSS & Tailwind setup
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚢 Deploying to Vercel

1. Push your code to a **GitHub** repository.
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings (**Framework Preset: Vite**).
5. Click **Deploy**.

---

## 👨‍💻 Author

Created by **Raja Muhammad Hassan** for NUML Software Engineering, Computer Science, Information Technology & Artificial Intelligence Students.
