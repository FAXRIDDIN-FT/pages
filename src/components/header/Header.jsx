import React, { useEffect, useLayoutEffect, useState } from "react";

const Header = () => {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(true);

  useEffect(() => {
    console.log("mount");
  
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log("update");
  }, [bool, count]);

  useLayoutEffect(()=>{
    console.log("useLayoutEffect");
  }, [])

  return (
    <div>

      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <button onClick={() => setBool((p) => !p)}>
        turn {bool ? "on" : "off"}
      </button>
    </div>
  );
};

export default React.memo(Header);
