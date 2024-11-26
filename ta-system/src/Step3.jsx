import React from "react";
import "./FormStyles.css";

const Step3 = ({ formData, handleChange }) => {
  const programmingLanguages = ["Python", "Java", "C++", "JavaScript"];
  const expertiseAreas = ["AI", "Algorithms", "Data Structures", "Databases"];

  return (
    <div className="step-container">
      <h3 className="step-title">Step 3: Skills and Expertise</h3>
      <form className="form-grid">
        <div className="form-field form-field-full">
          <label>Programming Languages:</label>
          {programmingLanguages.map((lang) => (
            <div key={lang}>
              <input
                type="checkbox"
                checked={formData.programmingLanguages.includes(lang)}
                onChange={(e) => {
                  const value = e.target.checked
                    ? [...formData.programmingLanguages, lang]
                    : formData.programmingLanguages.filter((l) => l !== lang);
                  handleChange("programmingLanguages", value);
                }}
              />
              {lang}
            </div>
          ))}
        </div>
        <div className="form-field form-field-full">
          <label>Areas of Expertise:</label>
          {expertiseAreas.map((area) => (
            <div key={area}>
              <input
                type="checkbox"
                checked={formData.expertise.includes(area)}
                onChange={(e) => {
                  const value = e.target.checked
                    ? [...formData.expertise, area]
                    : formData.expertise.filter((a) => a !== area);
                  handleChange("expertise", value);
                }}
              />
              {area}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Step3;
