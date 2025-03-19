import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Documentaion from "./components/Documentaion";

function App() {
  return (
    <div className=" w-full ">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/documentation" element={<Documentaion />} />
      </Routes>
    </div>
  );
}

export default App;
