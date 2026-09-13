# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for **JavaScript XML**. It is a special syntax used in React that allows us to write HTML-like code inside JavaScript or TypeScript.

I like using JSX because it makes the UI code easier to understand. We can write the structure of a component directly inside the React code instead of creating HTML elements separately.

For example:

```jsx
<h1>Hello World</h1>
```

Here, we can easily understand that an `h1` heading will be displayed on the webpage.

So, JSX makes React code more readable and easier to work with.

---

## 2. What is the difference between props and state?

Props and state are both used to handle data in React, but they work differently.

**Props** are used to pass data from a parent component to a child component. Props are read-only, so the child component cannot directly change the props.

For example, if a parent component sends a user's name to a child component, the child can use that name through props.

**State** is used to store data inside a component that can change over time. When the state changes, React updates the UI automatically.

For example, if I have a counter and click a button to increase the number, I would use state for that.

So, simply:

* **Props** → used to pass data from parent to child.
* **State** → used to store and manage changing data inside a component.

---

## 3. What is the `useState` hook in React?

`useState` is a React hook that allows us to create and manage state inside a functional component.

For example:

```tsx
const [count, setCount] = useState(0);
```

Here, `count` stores the current value and `setCount` is used to update the value.

Whenever the state changes, React re-renders the component and shows the updated data on the screen.

---

## 4. What is the purpose of the `useEffect` hook?

`useEffect` is used to perform side effects in a React component.

For example, we can use it for fetching data from an API, changing the document title, setting a timer, or doing something after the component renders.

For example:

```tsx
useEffect(() => {
  console.log("Component rendered");
}, []);
```

The empty dependency array means the effect will run once when the component is mounted.

---

## 5. What is a React component?

A component is a reusable part of a React application.

For example, in my project, I can create separate components for the Navbar, Technology Card, Sidebar, and Footer.

This makes the code easier to manage because each component has its own responsibility.

Components also help us reuse the same UI in different places without writing the same code again.

---

## 6. Why is the `key` prop used in React?

The `key` prop is used when we render a list of elements in React.

It helps React identify which item has been added, removed, or changed.

For example:

```tsx
cards.map(card => (
  <div key={card.id}>
    {card.name}
  </div>
))
```

Here, `card.id` is used as the key because every card has a unique ID.

Using a unique key helps React update the list efficiently.

---

## 7. What is conditional rendering in React?

Conditional rendering means showing different UI elements based on a condition.

For example, in my project, if a technology is already selected, I show **"✔️ Added to Stack"**. Otherwise, I show **"Add to Stack"**.

For example:

```tsx
{selectedCard ? "✔️ Added to Stack" : "Add to Stack"}
```

This is useful because the UI can change based on the current state or data.

---

## 8. What is the difference between controlled and uncontrolled components?

A controlled component is a form element whose value is controlled by React state.

For example:

```tsx
const [name, setName] = useState("");
```

If an input uses this state as its value, React controls the input.

An uncontrolled component manages its own value through the DOM instead of React state.

In most React applications, controlled components are commonly used because they give us more control over form data.

---

## 9. What is React and why is it useful?

React is a JavaScript library for building user interfaces.

It helps us create websites using reusable components. Instead of writing one large piece of code, we can divide the application into smaller components.

I find React useful because it makes applications easier to build, manage, and update. It is also widely used for creating modern and interactive web applications.

---

## 10. What is the Virtual DOM?

The Virtual DOM is a lightweight representation of the real DOM.

When something changes in a React application, React first compares the changes with the Virtual DOM. Then it updates only the necessary parts of the real DOM.

This helps React update the UI efficiently without unnecessarily changing the whole page.
