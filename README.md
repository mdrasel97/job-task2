# React CSV Automation Project

## 📌 Overview

In this project, multiple React apps are automatically generated from a CSV file.
A separate React build will be created for each domain, and each app will use the CSV data.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite\
- **Backend/Script:** Node.js (fs, path, csv-parser, fs-extra)\
- **CSV Parser:** Papa Parse (Frontend), csv-parser (Backend)

---

## 📂 Project Structure

    project-root/
    │── apps/                  # All generated apps
    │── template-app/          # Base template for React apps
    │── website.csv            # CSV file with domain, phone, address
    │── generate.js            # Node script to generate apps
    │── README.md              # Project documentation

---

## 🚀 How to Run

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Generate React apps from CSV

```bash
node index.js
```

### 3️⃣ Go to any generated app folder

```bash
cd apps/mydomain.com
```

### 4️⃣ Start the development server (Recommended)

```bash
npm run dev
```

👉 `http://localhost:5173` এ গিয়ে অ্যাপ দেখতে পারবে।

---

## ⚡ CSV File Format

`website.csv` ফাইলের ভেতর নিচের মত ডেটা থাকতে হবে:

```csv
domain,phone,address
mydomain.com,01712345678,Dhaka
example.com,01898765432,Chittagong
```

---

## ✅ Recommended

Development করার সময় সবসময় ব্যবহার:

```bash
npm run dev
```
