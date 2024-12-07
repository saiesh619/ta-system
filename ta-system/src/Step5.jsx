import React from "react";
import "./FormStyles.css";

const ReviewSubmit = ({ formData }) => {
  return (
    <div className="step-container">
      <h3 className="step-title">Step 5: Review and Submit</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default ReviewSubmit;
