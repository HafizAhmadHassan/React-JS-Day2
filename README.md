## Execution and Naming Convention Practices
index.html execute
inside there is root it will execute main.jsx

main.jsx find root and append app in it
css applied index.css

write app.jsx from scratch we created function apple

main.jsx we have App it does not matter
In main.jsx we should always has App
tags in html are started with small letters

and components of function should start with capital letter

component should start with div which act as wrapper so we will not have wrapper

for example:

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> code Step by Step</h1>
    <h1> Hello React 19</h1>
    <h1> Counter : {count}</h1>
    <User/>

    <button onClick={()=>setCount(count+1)}> Click to increase Counter</button>
    </>
  )
}

does not work

function App() {
  const [count, setCount] = useState(0)

  return (

    <h1> code Step by Step</h1>
    <h1> Hello React 19</h1>
    <h1> Counter : {count}</h1>
    <User/>

    <button onClick={()=>setCount(count+1)}> Click to increase Counter</button>

  )
}

- we created header Header.jsx

use in App.jsx

import Header from './Header'

we can embedd

<Header/>



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
