import { useState } from "react";
import classes from "./App.module.scss"

export const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
        <button className={classes.button} onClick={()=>setCount(count-1)}>-</button>

        <div>{count}</div>
        
        <button className={classes.redButton} onClick={()=>setCount(count+1)}>+</button>
    </>
  );
};

export default App;