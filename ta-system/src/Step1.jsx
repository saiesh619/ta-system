import React from "react";
import "./FormStyles.css";

const Step1 = ({ formData, handleChange }) => {
  return (
    <div className="step-container">
      <h3 className="step-title">Step 1: Personal Information</h3>
      <form className="form-grid">
        <div className="form-field">
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-field">
          <label>UFID:</label>
          <input
            type="text"
            value={formData.UFID}
            onChange={(e) => handleChange("UFID", e.target.value)}
            placeholder="Enter profile picture URL"
          />
        </div>
        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-field">
          <label>Phone:</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-field form-field-full">
          <label>Date of Birth:</label>
          <input
            type="date"
            value={formData.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
