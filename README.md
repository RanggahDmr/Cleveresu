# 📝 Cleveresu — AI Powered CV Builder

Cleveresu adalah aplikasi pembuat CV modern yang membantu pengguna membuat **CV ATS-Friendly** secara mudah dan cepat. Pengguna cukup mengisi data melalui form, dan sistem akan menampilkan **live preview** CV dalam format HTML yang siap diekspor ke PDF. Aplikasi ini juga menyediakan fitur **AI Content Generator** untuk mendukung penulisan experience, summary, dan skill dengan lebih profesional.

---

## 📸 Screenshot

![Cleveresu Screenshot](/mnt/data/18056ea8-8084-4e8d-80c6-f31356766ff7.png)


---


## ✨ Features
- 🔹 Live Preview CV (HTML + Styling)
- 🔹 AI Content Generator (Summary, Experience, Skills)
- 🔹 Inline Edit (dengan debounce agar tidak update per karakter)
- 🔹 Dashboard & Profile Management
- 🔹 Menyimpan data ke database (NeonDB via Prisma)
- 🔹 Export CV ke PDF
- 🔹 Responsive UI dengan animasi halus (Framer Motion)

---

## 🧰 Tech Stack
**Frontend:** React, Redux Toolkit, Tailwind, ShadCN UI, Framer Motion  
**Backend:** Express.js, Prisma ORM  
**Database:** NeonDB (PostgreSQL)  
**Tools:** Axios, Debounce, PDF Exporter, Vercel (FE), Railway/Render (BE)

---

## 🚀 Installation

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/cleveresu.git
cd cleveresu
