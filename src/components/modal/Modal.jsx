import React, { useEffect } from "react";

const Modal = ({ setShow }) => {
  useEffect(() => {
    // cleanup function
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div className="w-80 h-80 bg-gray-300 fixed top-1/2 left-1/2 -translate-1/2">
      <h2>Modal</h2>
      <button onClick={() => setShow((prev) => !prev)}>close</button>
    </div>
  );
};

export default Modal;
