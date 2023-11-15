import { useState } from "react";
import "./App.scss"

export const App = () => {
    const [count, setCount] = useState<number>(0)
  return (
    <>
        Hello world
        <button onClick={()=>setCount(count-1)}>-</button>
        {count}
        <button onClick={()=>setCount(count+1)}>+</button>
    </>
  );
};

export default App;