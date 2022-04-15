import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "./components/auth";
import { Contact } from "./components/contact";
import { Home } from "./components/home";
import { NavBar } from "./components/navigation";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
