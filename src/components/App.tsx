import { useState } from "react";
import classes from "./App.module.scss"
import { Link, Outlet } from "react-router-dom";


export const App = () => {
  const [count, setCount] = useState<number>(0);

  if(__ENV__ === 'development'){
    // появится в сборке только при build:dev
  }

  return (
    <>
        <h1>PLATFORM={__PLATFORM__}</h1>
        <div>{count}</div>

        <button className={classes.button} onClick={()=>setCount(count-1)}>-</button>
        <button className={classes.redButton} onClick={()=>setCount(count+1)}>+</button>

        <div>
          <Link to={'/about'}>About</Link>
          &#9;
          <Link to={'/shop'}>Shop</Link>
        </div>
        

        <Outlet />
    </>
  );
};

export default App;