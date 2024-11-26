import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ReviewSubmit from "./ReviewSubmit";
import "./ProfilePage.css"; // Include the CSS for styling

const ProfilePage = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false); // Track if form is submitted
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    name: "Saiesh",
    UFID: "57751975",
    email: "sprabhu1@ufl.edu",
    phone: "",
    dob: "",
    program: "Master's",
    department: "Computer Science",
    gpa: "0.0",
    courses: [],
    programmingLanguages: [],
    teachingExperience: "",
    expertise: [],
    availability: "",
    hoursPerWeek: "",
  });

  const handleNext = () => setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  const handlePrev = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true); // Mark as submitted
    setTimeout(() => {
      // Optional additional feedback
    }, 500); // Simulate a delay (e.g., server response time)
  };

  return (
    <div className="profile-page-container">
      {!submitted ? (
        <>
          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
          <h3 className="step-title">Step {step} of {totalSteps}</h3>

          <div className="form-content">
            {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
            {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
            {step === 3 && <Step3 formData={formData} handleChange={handleChange} />}
            {step === 4 && <Step4 formData={formData} handleChange={handleChange} />}
            {step === 5 && <ReviewSubmit formData={formData} />}
          </div>

          {/* Navigation Buttons */}
          <div className="button-container">
            {step > 1 && (
              <button className="button back-button" onClick={handlePrev}>
                Back
              </button>
            )}
            {step < totalSteps && (
              <button className="button next-button" onClick={handleNext}>
                Next
              </button>
            )}
            {step === totalSteps && (
              <button
                className="button submit-button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="submission-feedback">
          <h2>Thank You!</h2>
          <p>Your submission was successful. Your Profile Has Been Updated.</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
