import React from "react";
import "./FormStyles.css";

const Step2 = ({ formData, handleChange }) => {
  return (
    <div className="step-container">
      <h3 className="step-title">Step 2: Academic Background</h3>
      <form className="form-grid">
        <div className="form-field">
          <label>Program:</label>
          <input
            type="text"
            value={formData.program}
            onChange={(e) => handleChange("program", e.target.value)}
            placeholder="Enter your program (e.g., Master's)"
          />
        </div>
        <div className="form-field">
          <label>Department:</label>
          <input
            type="text"
            value={formData.department}
            onChange={(e) => handleChange("department", e.target.value)}
            placeholder="Enter your department"
          />
        </div>
        <div className="form-field">
          <label>GPA:</label>
          <input
            type="number"
            step="0.1"
            value={formData.gpa}
            onChange={(e) => handleChange("gpa", e.target.value)}
            placeholder="Enter your GPA"
          />
        </div>
        <div className="form-field form-field-full">
          <label>Completed Courses:</label>
          <textarea
            value={formData.courses.join(", ")}
            onChange={(e) => handleChange("courses", e.target.value.split(","))}
            placeholder="List completed courses separated by commas"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Step2;
