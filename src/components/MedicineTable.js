import React from "react";

function MedicineTable({ medicines, onMedicineClick, onSort, sortBy }) {
  const isExpiringSoon = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    return expiry - today <= thirtyDays && expiry >= today;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Medicine Name</th>
          <th>Batch No.</th>
          <th>Category</th>
          <th onClick={() => onSort("expiryDate")}>
            Expiry Date {sortBy === "expiryDate" && "↓"}
          </th>
          <th onClick={() => onSort("stock")}>
            Stock Quantity {sortBy === "stock" && "↓"}
          </th>
          <th>Price (₹)</th>
        </tr>
      </thead>
      <tbody>
        {medicines.map((medicine) => (
          <tr key={medicine.id} onClick={() => onMedicineClick(medicine.id)}>
            <td>{medicine.name}</td>
            <td>{medicine.batchNo}</td>
            <td>{medicine.category}</td>
            <td
              className={
                isExpiringSoon(medicine.expiryDate) ? "expiring-soon" : ""
              }
            >
              {medicine.expiryDate}
            </td>
            <td>
              {medicine.stock}
              {medicine.stock < 20 && (
                <span className="low-stock-badge">Low Stock</span>
              )}
            </td>
            <td>₹{medicine.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MedicineTable;
