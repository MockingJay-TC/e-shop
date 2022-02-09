import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComp from "./components/Header/HeaderComp";
import Home from "./components/Pages/Home/Home";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HeaderComp childComp={<Home />} />} />{" "}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
