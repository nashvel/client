import React from "react";

const ConfirmationPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Would you like to clear sales for this month?</h3>
        <button onClick={onClose}>Cancel</button>
        <button onClick={() => { alert("Sales Cleared!"); onClose(); }}>Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
