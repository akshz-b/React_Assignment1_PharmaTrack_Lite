import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function MedicineDetails({ medicines }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const medicine = medicines.find((m) => m.id === parseInt(id));

  if (!medicine) {
    return (
      <div className="container">
        <h2>Medicine not found</h2>
        <button onClick={() => navigate("/")}>Back to Dashboard</button>
      </div>
    );
  }

  const getStatusBadge = (stock) => {
    if (stock === 0)
      return <span className="status-badge out-of-stock">Out of Stock</span>;
    if (stock <= 50)
      return <span className="status-badge low-stock">Low Stock</span>;
    return <span className="status-badge in-stock">In Stock</span>;
  };

  return (
    <div className="container">
      <button onClick={() => navigate("/")}>← Back to Dashboard</button>
      <div className="details">
        <h2>
          {medicine.name} {getStatusBadge(medicine.stock)}
        </h2>
        <div className="detail-row">
          <strong>Batch No:</strong> {medicine.batchNo}
        </div>
        <div className="detail-row">
          <strong>Category:</strong> {medicine.category}
        </div>
        <div className="detail-row">
          <strong>Manufacturer:</strong> {medicine.manufacturer}
        </div>
        <div className="detail-row">
          <strong>Expiry Date:</strong> {medicine.expiryDate}
        </div>
        <div className="detail-row">
          <strong>Stock:</strong> {medicine.stock} units
        </div>
        <div className="detail-row">
          <strong>Price:</strong> ₹{medicine.price}
        </div>
        <div className="detail-row">
          <strong>Description:</strong> {medicine.description}
        </div>
        <div className="detail-row">
          <strong>Dosage:</strong> {medicine.dosage}
        </div>
        <div className="detail-row">
          <strong>Storage:</strong> {medicine.storage}
        </div>
      </div>
    </div>
  );
}

export default MedicineDetails;
