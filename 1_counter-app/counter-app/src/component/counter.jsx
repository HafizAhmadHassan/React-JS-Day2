import { useState } from "react"

const Counter = () => {

    
    const Increment = () => {
      setCount(count + 1);
    }
    
    const Decrement = () => {
        setCount(count - 1);
      }

    

    const[count, setCount ] = useState(0);
  
   return (
    <div>
        <h1>Counter App</h1>
        <p> {count} </p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>      
    </div>
  )
}

export default Counter
