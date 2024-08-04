## Notes for creating a vite app

```bash
bun create vite@latest
bun install
bun run dev
```

## Tailwind

```bash
bun install -D tailwindcss postcss autoprefixer
bun tailwindcss init -p
```

## tailwind.config.js

```CSS
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## App.jsx

```JSX
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

## Redux-toolkit

```bash
bun install @reduxjs/toolkit
bun install react-redux
bun run dev
```

## For All with react-router, reduxToolkit , tinymce html-react-parser reactHookForm

```bash
 bun install @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form
```
