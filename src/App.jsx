import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import HeaderComp from "./components/Header/HeaderComp";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HeaderComp childComp={<Home />} />} />{" "}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
