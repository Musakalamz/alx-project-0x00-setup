# 🚀 React Genesis: Mastering Next.js Setup

A hands-on project designed to **teach the fundamentals of modern front-end development** using **React, TypeScript, and Next.js**.  
The application mimics Airbnb’s UI (listings, ratings, and interactive components) while focusing on **best practices** in code quality, reusability, and responsive design.

---

## 📖 Project Description

This repository is part of a structured learning path to help you:

- Scaffold a Next.js + TypeScript project
- Build reusable React components with strict typing
- Understand Next.js routing (Pages Router)
- Apply **responsive design** with Tailwind CSS
- Manage assets and static files in Next.js
- Enforce code quality with ESLint
- Practice modular architecture and component composition

---

## 🎯 Learning Objectives

By the end of this project, you will be able to:

- Create a Next.js project with TypeScript support
- Organize project directories for scalability
- Implement **basic routing** in Next.js
- Define and consume **TypeScript interfaces** for props
- Build **reusable UI components** (Card, Pill, Button, etc.)
- Apply Tailwind CSS for responsive layouts
- Configure ESLint for consistent code quality
- Leverage Next.js `<Image />` for optimized performance

---

## 🛠 Requirements

- **Node.js** v16+
- **npm** or **yarn**
- **VS Code** (recommended)
- **Next.js** v13+
- **TypeScript**
- **Tailwind CSS**
- **ESLint**

---

## 📂 Project Best Practices

### 1. Structure

- `components/` → Reusable UI components
- `interfaces/` → TypeScript interfaces & types
- `pages/` → Follows Next.js **Pages Router** conventions

### 2. Component Design

- Typed with interfaces (`React.FC<Props>`)
- Reusable, modular, single responsibility per component
- Props for customization

### 3. Code Quality

- ESLint rules enforced
- Consistent arrow function usage
- Strong typing with TypeScript

### 4. Styling

- Tailwind CSS utility-first approach
- Responsive design principles
- Consistent typography & spacing

### 5. Performance

- Optimized images with Next.js `<Image />`
- Automatic code splitting
- Minimal dependencies

---

## ⚠️ Note for Learners

Copy-pasting code may feel faster but slows your **understanding**.  
To **maximize learning**:

- Read instructions carefully
- **Type the code yourself** to internalize structure & logic
- Experiment & test your code

💡 _Hands-on practice builds deeper knowledge and long-term retention._

---

## 📝 Project Assessment

Your project will be evaluated via **manual reviews**, with an **auto-check** ensuring required files exist.

✅ Submit all required files  
✅ Generate your review link on time  
✅ Peer-review participation encouraged

⚠️ If you miss the deadline, you won’t be able to generate a review link.

---

## ⏰ Tasks Overview

### 0. Scaffolding a Project

- Use `npx create-next-app@latest alx-project-0x00 --typescript`
- Enable: ESLint, Tailwind, Import Alias
- Disable: `/src` directory, App Router
- Run: `npm run dev -- -p 3000`

### 1. Setting up Directories

- Create `components/` and `interfaces/`
- Update `pages/index.tsx` to arrow function style
- Add `Card.tsx` and `Pill.tsx` under `components/`

### 2. Basic Routing

- Create `pages/landing.tsx` and `pages/about.tsx`
- Access via `/landing` and `/about`

### 3. Rendering Components

- Implement `Card` and `Pill` components
- Use Next.js `<Image />` and Tailwind for styling

### 4. Using Components

- Import and render `<Card />` inside `pages/landing.tsx`
- Duplicate for demonstration

### 5. Typing Components

- Create `PillProps` interface
- Update `Pill` to accept `title` as a prop

### 6. Advanced Task

- Build a **Button component**
- Accepts `title` and `styles` as props
- Variants: `small`, `medium`, `large` + `rounded-sm`, `rounded-md`, `rounded-full`

---

## 📌 Repository

- **GitHub Repo**: `alx-project-0x00-setup`
- **Directory**: `alx-project-0x00`
- **File(s)**: As specified per task

---

## 🎉 Wrap Up

This project sets the foundation for **scalable front-end applications** with Next.js.  
Stay consistent, code hands-on, and always refactor with best practices in mind.

✨ Happy coding and keep building awesome things!
