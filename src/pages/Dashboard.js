import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MedicineTable from "../components/MedicineTable";

function Dashboard({ medicines }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSortBy(null);
  };

  const handleSort = (field) => {
    setSortBy(field);
  };

  const handleMedicineClick = (id) => {
    navigate(`/medicine/${id}`);
  };

  // Filter medicines
  let filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort medicines
  if (sortBy === "expiryDate") {
    filteredMedicines = [...filteredMedicines].sort(
      (a, b) => new Date(a.expiryDate) - new Date(b.expiryDate)
    );
  } else if (sortBy === "stock") {
    filteredMedicines = [...filteredMedicines].sort(
      (a, b) => a.stock - b.stock
    );
  }

  return (
    <div className="container">
      <h2>Medicine Dashboard</h2>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onReset={handleReset}
      />
      {filteredMedicines.length === 0 ? (
        <div className="no-results">No results found</div>
      ) : (
        <MedicineTable
          medicines={filteredMedicines}
          onMedicineClick={handleMedicineClick}
          onSort={handleSort}
          sortBy={sortBy}
        />
      )}
    </div>
  );
}

export default Dashboard;
