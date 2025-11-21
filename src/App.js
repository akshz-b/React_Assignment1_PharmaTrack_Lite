import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import MedicineDetails from "./pages/MedicineDetails";
import AddMedicine from "./pages/AddMedicine";
import { medicines as initialMedicines } from "./data/medicines";
import "./App.css";

function App() {
  const [medicines, setMedicines] = useState(initialMedicines);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleAddMedicine = (newMedicine) => {
    setMedicines([...medicines, newMedicine]);
    setSuccessMessage("Medicine added successfully!");
    navigate("/");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="app">
      <Navbar />
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <Routes>
        <Route path="/" element={<Dashboard medicines={medicines} />} />
        <Route
          path="/medicine/:id"
          element={<MedicineDetails medicines={medicines} />}
        />
        <Route
          path="/add"
          element={<AddMedicine onAddMedicine={handleAddMedicine} />}
        />
      </Routes>
    </div>
  );
}

export default App;
