# 🚀 AI-Powered Job Preparation Portal



---

## 📌 Problem Statement

Many job seekers struggle to understand why their resumes get rejected or how to prepare effectively for specific roles. They often lack:
- Clear insight into skill gaps  
- Personalized interview preparation  
- ATS-friendly resume formatting  

---

## 💡 Solution

This application acts as an AI-powered assistant that:
- Analyzes resumes against job descriptions  
- Identifies missing skills  
- Generates personalized interview questions  
- Creates ATS-optimized resumes  

---

## ✨ Key Features

### 📄 Resume & Job Description Analysis
- Upload resume and job description  
- Detect skill gaps using AI  

### 🎯 AI Interview Preparation
- Generates technical and behavioral questions  
- Tailored to the job role and candidate profile  

### 📑 ATS-Optimized Resume Generator
- AI-generated resume formatting  
- Improves chances of passing ATS filters  

### 📊 User Dashboard
- View past analyses  
- Manage interview reports  

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)  
- SCSS  
- Axios  
- Context API  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB Atlas  
- Mongoose  

### Authentication & Security
- JWT Authentication  
- Token Blacklisting  
- Bcrypt Password Hashing  

### AI Integration
- Google Gemini API  

### PDF Generation
- Puppeteer  

---

## 🏗️ Architecture

The project follows a scalable **4-layer architecture**:

1. UI Layer (React)  
2. API Layer (Express)  
3. State Management Layer (Context API)  
4. Service/Hook Layer  

---

## ⚙️ How It Works

1. User uploads resume and job description  
2. Backend sends structured prompt to Gemini API  
3. AI returns insights (skill gaps, questions, suggestions)  
4. Data is processed and displayed on dashboard  
5. Resume is converted into PDF using Puppeteer  

---

## 👨‍💻 My Contribution

- Designed and developed full-stack architecture  
- Implemented secure authentication (JWT + blacklisting)  
- Built AI prompt pipeline using Gemini API  
- Created reusable frontend components  
- Developed PDF generation system using Puppeteer  
- Ensured scalable and maintainable code structure  

---

## ⚡ Challenges Faced

- Designing structured prompts for consistent AI output  
- Handling JSON schema validation from AI responses  
- Implementing secure logout using token blacklisting  
- Generating pixel-perfect PDFs from dynamic HTML  

---

## 📈 Impact

- Helps users prepare smarter and faster  
- Provides personalized interview preparation  
- Improves resume shortlisting chances  
- Simulates real-world job preparation tools  

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Install dependencies
cd project-folder
npm install

# Run frontend
npm run dev

# Run backend
npm start
```

---

## ⭐ Support

If you found this project useful, please give it a ⭐ on GitHub!

---

## 📬 Contact

Feel free to connect for collaboration or opportunities 🚀
