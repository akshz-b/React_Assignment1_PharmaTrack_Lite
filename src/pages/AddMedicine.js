import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMedicine({ onAddMedicine }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    batchNo: "",
    category: "",
    expiryDate: "",
    stock: "",
    price: "",
    manufacturer: "",
    description: "",
    dosage: "",
    storage: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Medicine name is required";
    if (!formData.batchNo) newErrors.batchNo = "Batch number is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.expiryDate) {
      newErrors.expiryDate = "Expiry date is required";
    } else if (new Date(formData.expiryDate) <= new Date()) {
      newErrors.expiryDate = "Expiry date must be in the future";
    }
    if (!formData.stock) {
      newErrors.stock = "Stock is required";
    } else if (formData.stock < 0) {
      newErrors.stock = "Stock cannot be negative";
    }
    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (formData.price < 0) {
      newErrors.price = "Price cannot be negative";
    }
    if (!formData.manufacturer)
      newErrors.manufacturer = "Manufacturer is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.dosage) newErrors.dosage = "Dosage is required";
    if (!formData.storage) newErrors.storage = "Storage is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newMedicine = {
      ...formData,
      id: Date.now(),
      stock: parseInt(formData.stock),
      price: parseFloat(formData.price),
    };

    onAddMedicine(newMedicine);
  };

  return (
    <div className="container">
      <h2>Add New Medicine</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Medicine Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label>Batch Number *</label>
          <input
            type="text"
            name="batchNo"
            value={formData.batchNo}
            onChange={handleChange}
          />
          {errors.batchNo && <div className="error">{errors.batchNo}</div>}
        </div>

        <div className="form-group">
          <label>Category *</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          {errors.category && <div className="error">{errors.category}</div>}
        </div>

        <div className="form-group">
          <label>Expiry Date *</label>
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
          />
          {errors.expiryDate && (
            <div className="error">{errors.expiryDate}</div>
          )}
        </div>

        <div className="form-group">
          <label>Stock Quantity *</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            min="0"
          />
          {errors.stock && <div className="error">{errors.stock}</div>}
        </div>

        <div className="form-group">
          <label>Price (₹) *</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            step="0.01"
          />
          {errors.price && <div className="error">{errors.price}</div>}
        </div>

        <div className="form-group">
          <label>Manufacturer *</label>
          <input
            type="text"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
          />
          {errors.manufacturer && (
            <div className="error">{errors.manufacturer}</div>
          )}
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && (
            <div className="error">{errors.description}</div>
          )}
        </div>

        <div className="form-group">
          <label>Dosage Information *</label>
          <input
            type="text"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
          />
          {errors.dosage && <div className="error">{errors.dosage}</div>}
        </div>

        <div className="form-group">
          <label>Storage Instructions *</label>
          <input
            type="text"
            name="storage"
            value={formData.storage}
            onChange={handleChange}
          />
          {errors.storage && <div className="error">{errors.storage}</div>}
        </div>

        <button type="submit">Add Medicine</button>
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddMedicine;
