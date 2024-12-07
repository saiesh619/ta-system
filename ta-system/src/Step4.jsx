import React from "react";
import "./FormStyles.css";

const Step4 = ({ formData, handleChange }) => {
  return (
    <div className="step-container">
      <h3 className="step-title">Step 4: Availability</h3>
      <form className="form-grid">
        <div className="form-field">
          <label>Preferred Days and Times:</label>
          <input
            type="text"
            value={formData.availability}
            onChange={(e) => handleChange("availability", e.target.value)}
            placeholder="e.g., Mon-Fri 9AM-5PM"
          />
        </div>
        <div className="form-field form-field-full">
          <label>Weekly Availability (hours):</label>
          <input
            type="number"
            value={formData.hoursPerWeek}
            onChange={(e) => handleChange("hoursPerWeek", e.target.value)}
            placeholder="Enter total hours per week"
          />
        </div>
      </form>
    </div>
  );
};

export default Step4;
