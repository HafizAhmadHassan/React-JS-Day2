import { useState } from 'react'
import './App.css'
import User from './User'
import Header from './Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <h1> code Step by Step</h1>
    <h1> Hello React 19</h1>
    <h1> Counter : {count}</h1>
    <User/>

    <button onClick={()=>setCount(count+1)}> Click to increase Counter</button>
    </>
  )
}

export default App
