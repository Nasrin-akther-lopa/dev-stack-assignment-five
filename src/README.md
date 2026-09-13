# 🚀 Dev Stack Builder

A modern and responsive web application for exploring popular web development technologies and building your own personalized technology stack.

**Dev Stack Builder** allows users to browse different technologies, view their details, and add their favorite technologies to a personal stack. Users can also remove individual technologies or clear the entire stack whenever they want.

---

## 🌐 Live Website

🔗 **Live Demo:** [Visit Dev Stack Builder](YOUR_LIVE_SITE_LINK)

## 📂 GitHub Repository

🔗 **Repository:** [View Source Code](YOUR_GITHUB_REPOSITORY_LINK)

---

## 📖 About The Project

Dev Stack Builder is a frontend web application built with **React and TypeScript**.

The main purpose of this project is to create an interactive platform where developers or learners can explore different technologies used in modern web development.

The application displays technologies such as frontend libraries, backend technologies, databases, programming languages, styling tools, DevOps tools, and other development tools.

Users can easily add technologies to their own stack and manage the selected technologies from the sidebar.

This project also focuses on creating a clean user interface, responsive layout, reusable React components, and interactive user experiences.

---

## ✨ Key Features

### 🧩 Explore Technologies

Users can explore a collection of different web development technologies. Each technology card provides useful information including:

* Technology name
* Technology icon
* Category
* Description
* Difficulty level
* Rating
* Badge

### ➕ Build Your Own Stack

Users can click the **"Add to Stack"** button to add a technology to their personal stack.

The selected technologies are displayed in the **Your Stack** sidebar.

### 🚫 Prevent Duplicate Technologies

The same technology cannot be added more than once.

If a user tries to add a technology that is already selected, the application shows a warning notification.

### ❌ Remove Technologies

Users can remove a single technology from their stack by clicking the remove button.

### 🗑️ Remove All

Users can clear all selected technologies at once by clicking the **Remove All** button.

### 🔔 Toast Notifications

The application uses **React-Toastify** to provide user-friendly notifications for different actions such as:

* Technology added successfully
* Duplicate technology warning
* Technology removed
* All technologies removed

### 📱 Responsive Design

The website is fully responsive and works properly on:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

---

## 🛠️ Technologies Used

| Technology        | Purpose                       |
| ----------------- | ----------------------------- |
| ⚛️ React.js       | Building the user interface   |
| 📘 TypeScript     | Type-safe development         |
| 🎨 Tailwind CSS   | Styling and responsive design |
| 🌸 DaisyUI        | UI components                 |
| 🔔 React-Toastify | Toast notifications           |
| 📄 JSON           | Storing technology data       |
| ⚡ Vite            | Development and build tool    |

---

## 📊 Technology Data

The technology information is stored in a separate JSON file instead of hardcoding the data directly inside the React component.

Each technology contains information such as:

```text
id
name
category
description
icon
rating
difficulty
badge
```

This approach makes the application easier to maintain and allows new technologies to be added without changing the main components.

---

## 🎨 UI & Design

The project follows a modern developer-focused design with:

* Clean and minimal interface
* Responsive technology grid
* Sticky navigation bar
* Gradient brand theme
* Technology cards
* Interactive buttons
* Sidebar stack management
* Toast notifications
* Mobile-friendly navigation

The primary brand gradient is used consistently throughout the interface to maintain a unified visual identity.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for **JavaScript XML**.

It allows us to write HTML-like syntax inside JavaScript or TypeScript code.

JSX makes React components easier to write and understand because we can describe the UI structure directly inside our component.

For example, we can write:

```jsx
<h1>Hello World</h1>
```

instead of creating HTML elements manually using JavaScript.

---

## 2. What is the difference between props and state?

**Props** and **state** are both used to work with data in React, but they have different purposes.

### Props

Props are used to pass data from a **parent component to a child component**.

Props are read-only, which means the child component should not directly change them.

### State

State is used to store data that can change over time inside a component.

When state changes, React re-renders the component and updates the UI.

### In simple words:

**Props → Data comes from parent**

**State → Data managed inside the component**

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React component.

When the state value changes, React updates the UI automatically.

In this project, I used `useState` to manage the technologies selected by the user.

For example, when a user clicks **"Add to Stack"**, the selected technology is added to the state and displayed inside the **Your Stack** section.

I also used state to manage the selected technology list and update it when a technology is removed.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform **side effects** in React components.

Side effects can include:

* Fetching data
* Loading external data
* Working with APIs
* Updating the document
* Running code after a component renders

In this project, I used `useEffect` to load the technology data from the local JSON file when the application loads.

This allows the technology information to be loaded separately from the React components instead of hardcoding the array directly inside the component.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

When we render a list using `.map()`, React needs to identify each individual item.

The `key` prop gives every item a unique identity.

React uses these keys to understand:

* Which item was changed
* Which item was removed
* Which item was added
* Which item needs to be updated

Using a unique key also helps React update the UI more efficiently.

In this project, I used the unique technology `id` as the key for technology cards.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements depending on a condition.

In this project, I used conditional rendering in the **Your Stack** section.

When the user has not selected any technology, the application displays an empty-state message.

When the user adds technologies, the empty message disappears and the selected technologies are displayed instead.

In simple words:

```text
If stack is empty → Show empty message

If stack has items → Show selected technologies
```

This makes the UI dynamic and user-friendly.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

In React, a parent component can pass data to a child component using **props**.

For example, the parent can send a technology object to a technology card component through props.

If the child needs to communicate with the parent, the parent can pass a **function** to the child through props.

Then the child can call that function when an action happens, such as clicking an **Add to Stack** button.

### Simple flow:

```text
Parent Component
       ↓
      Props
       ↓
Child Component
       ↓
  Function Call
       ↓
Parent Component
```

This allows React components to communicate with each other in a structured way.

---

## 📁 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── TechnologyCard/
│   ├── TechnologyCards/
│   ├── YourStack/
│   └── Footer/
│
├── data/
│   └── technologies.json
│
├── types/
│   └── InCardsType.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Go to the project directory

```bash
cd your-project-folder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available on the local development server.

---

## 📦 Important Packages

### React-Toastify

React-Toastify is used to display toast notifications for user actions.

It is used for:

* Add to Stack
* Duplicate add attempt
* Remove technology
* Remove all technologies

---

## 💡 What I Learned From This Project

While building this project, I practiced and improved my understanding of:

* React components
* Props
* State management
* `useState`
* `useEffect`
* Conditional rendering
* `.map()` rendering
* Unique `key` props
* TypeScript interfaces
* Type-safe React components
* JSON data handling
* Event handling
* Tailwind CSS
* Responsive design
* React-Toastify
* Component-based architecture

---

## 🎯 Future Improvements

Some features that could be added in the future:

* 🔎 Technology search functionality
* 🏷️ Category filtering
* ⭐ Rating-based sorting
* 🌙 Dark/Light theme switcher
* 💾 Local storage support
* 🔐 User authentication
* 📊 Technology comparison
* 🔗 Technology details page

---

## 👩‍💻 Developer

**Nasrin Akther**

Aspiring Web Developer | React & TypeScript Learner

I enjoy learning new technologies, building web projects, and improving my problem-solving skills.

---

## ⭐ Support

If you like this project, feel free to give the repository a ⭐ on GitHub.

Thank you for visiting **Dev Stack Builder**! 🚀
