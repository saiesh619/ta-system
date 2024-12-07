import React, { useState } from "react";
import "./Onboarding.css"; // Add styling for the onboarding component

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-modal">
        {step === 1 && (
          <div>
            <h2>Welcome to the Job Portal!</h2>
            <p>Find your dream job with ease using our platform.</p>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2>Search for Jobs</h2>
            <p>Use the search and filters to find the jobs that suit you best.</p>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2>Track Applications</h2>
            <p>Check the status of your applications and manage them seamlessly.</p>
          </div>
        )}
        <button className="next-button" onClick={handleNext}>
          {step < 3 ? "Next" : "Finish"}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
