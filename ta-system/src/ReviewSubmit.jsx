import React from "react";
import "./FormStyles.css"; // Ensure consistent styling

const ReviewSubmit = ({ formData }) => {
  return (
    <div className="step-container">
      <h3 className="step-title">Review Your Information</h3>

      <div className="review-container">
        <ul className="review-list">
          <li>
            <strong>Name:</strong> {formData.name || "Not provided"}
          </li>
          <li>
            <strong>UFID:</strong> {formData.UFID || "Not provided"}
          </li>
          <li>
            <strong>Email:</strong> {formData.email || "Not provided"}
          </li>
          <li>
            <strong>Phone:</strong> {formData.phone || "Not provided"}
          </li>
          <li>
            <strong>Date of Birth:</strong> {formData.dob || "Not provided"}
          </li>
          <li>
            <strong>Program:</strong> {formData.program || "Not provided"}
          </li>
          <li>
            <strong>Department:</strong> {formData.department || "Not provided"}
          </li>
          <li>
            <strong>GPA:</strong> {formData.gpa || "Not provided"}
          </li>
          <li>
            <strong>Completed Courses:</strong>{" "}
            {formData.courses.length > 0
              ? formData.courses.join(", ")
              : "Not provided"}
          </li>
          <li>
            <strong>Programming Languages:</strong>{" "}
            {formData.programmingLanguages.length > 0
              ? formData.programmingLanguages.join(", ")
              : "Not provided"}
          </li>
          <li>
            <strong>Teaching Experience:</strong>{" "}
            {formData.teachingExperience || "Not provided"}
          </li>
          <li>
            <strong>Areas of Expertise:</strong>{" "}
            {formData.expertise.length > 0
              ? formData.expertise.join(", ")
              : "Not provided"}
          </li>
          <li>
            <strong>Availability:</strong> {formData.availability || "Not provided"}
          </li>
          <li>
            <strong>Hours Per Week:</strong> {formData.hoursPerWeek || "Not provided"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReviewSubmit;
