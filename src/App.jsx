import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Modal from "./components/modal/Modal";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      {/* <Header/> */}
      <h2>useEffect</h2>
      <Hero/>
      <button onClick={()=> setShow((prev) => !prev)}>Share</button>
      {/* conditional rendering */}
      {
        show && <Modal setShow={setShow}/>
      }
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
