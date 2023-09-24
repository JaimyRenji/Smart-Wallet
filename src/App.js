import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { SmartWallet } from "./pages/dashboard/index";
import { Landing } from "./pages/landing";
import { FormData } from "./pages/formdata/index";
import { FormDataExpense } from "./pages/formdataincome";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/smartwallet" element={<SmartWallet />} />
          <Route path="/formdata" element={<FormData />} />
          <Route path="/formdataexpense" element={<FormDataExpense />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;